/* ==========================================
   FORM HANDLING
   Contact form validation and submission
   ========================================== */

'use strict';

// ==========================================
// FORM INITIALIZATION
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    initContactForm();
    initFormValidation();
    initFormAnimations();
});

// ==========================================
// CONTACT FORM HANDLER
// ==========================================
function initContactForm() {
    const form = document.getElementById('contact-form');
    
    if (!form) return;
    
    form.addEventListener('submit', handleFormSubmit);
}

async function handleFormSubmit(e) {
    e.preventDefault();
    
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    const formStatus = document.querySelector('.form-status');
    const submitBtn = form.querySelector('.btn-submit');
    
    // Validate form
    if (!validateForm(data)) {
        showFormStatus('error', 'Please fill in all required fields correctly.');
        return;
    }
    
    // Disable submit button
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    
    try {
        // Simulate form submission (replace with actual backend endpoint)
        await simulateFormSubmission(data);
        
        // Success
        showFormStatus('success', 'Thank you! Your message has been sent successfully.');
        form.reset();
        
        // Track form submission (if analytics is set up)
        trackFormSubmission(data);
        
    } catch (error) {
        // Error
        showFormStatus('error', 'Oops! Something went wrong. Please try again or contact me directly.');
        console.error('Form submission error:', error);
    } finally {
        // Re-enable submit button
        submitBtn.disabled = false;
        submitBtn.innerHTML = 'Send Message <i class="fas fa-paper-plane"></i>';
    }
}

// ==========================================
// FORM VALIDATION
// ==========================================
function initFormValidation() {
    const formInputs = document.querySelectorAll('#contact-form input, #contact-form textarea');
    
    formInputs.forEach(input => {
        // Real-time validation
        input.addEventListener('blur', () => validateField(input));
        input.addEventListener('input', () => clearFieldError(input));
    });
}

function validateForm(data) {
    let isValid = true;
    
    // Name validation
    if (!data.name || data.name.trim().length < 2) {
        isValid = false;
        showFieldError('name', 'Please enter a valid name');
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!data.email || !emailRegex.test(data.email)) {
        isValid = false;
        showFieldError('email', 'Please enter a valid email address');
    }
    
    // Subject validation
    if (!data.subject || data.subject.trim().length < 3) {
        isValid = false;
        showFieldError('subject', 'Please enter a subject');
    }
    
    // Message validation
    if (!data.message || data.message.trim().length < 10) {
        isValid = false;
        showFieldError('message', 'Please enter a message (at least 10 characters)');
    }
    
    return isValid;
}

function validateField(input) {
    const value = input.value.trim();
    const name = input.name;
    
    clearFieldError(input);
    
    switch (name) {
        case 'name':
            if (value.length < 2) {
                showFieldError(name, 'Name must be at least 2 characters');
                return false;
            }
            break;
            
        case 'email':
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                showFieldError(name, 'Please enter a valid email');
                return false;
            }
            break;
            
        case 'subject':
            if (value.length < 3) {
                showFieldError(name, 'Subject must be at least 3 characters');
                return false;
            }
            break;
            
        case 'message':
            if (value.length < 10) {
                showFieldError(name, 'Message must be at least 10 characters');
                return false;
            }
            break;
    }
    
    return true;
}

function showFieldError(fieldName, message) {
    const field = document.getElementById(fieldName);
    if (!field) return;
    
    field.classList.add('error');
    
    // Create error message element if it doesn't exist
    let errorElement = field.parentElement.querySelector('.field-error');
    if (!errorElement) {
        errorElement = document.createElement('span');
        errorElement.classList.add('field-error');
        errorElement.style.cssText = 'color: #dc3545; font-size: 0.875rem; margin-top: 0.25rem; display: block;';
        field.parentElement.appendChild(errorElement);
    }
    
    errorElement.textContent = message;
}

function clearFieldError(input) {
    input.classList.remove('error');
    const errorElement = input.parentElement.querySelector('.field-error');
    if (errorElement) {
        errorElement.remove();
    }
}

// ==========================================
// FORM STATUS DISPLAY
// ==========================================
function showFormStatus(type, message) {
    const formStatus = document.querySelector('.form-status');
    
    if (!formStatus) return;
    
    formStatus.className = 'form-status ' + type;
    formStatus.textContent = message;
    formStatus.style.display = 'block';
    
    // Auto-hide after 5 seconds
    setTimeout(() => {
        formStatus.style.display = 'none';
    }, 5000);
}

// ==========================================
// SIMULATE FORM SUBMISSION
// ==========================================
async function simulateFormSubmission(data) {
    // Simulate API call delay
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate 90% success rate
            if (Math.random() > 0.1) {
                console.log('Form submitted:', data);
                resolve({ success: true });
            } else {
                reject(new Error('Submission failed'));
            }
        }, 1500);
    });
}

// ==========================================
// ACTUAL FORM SUBMISSION (for production)
// ==========================================
async function submitFormToBackend(data) {
    // Replace with your actual backend endpoint
    const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    });
    
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    
    return await response.json();
}

// ==========================================
// EMAIL SERVICE INTEGRATION (Example: EmailJS)
// ==========================================
async function sendEmailViaEmailJS(data) {
    // Example using EmailJS service
    // Replace with your EmailJS credentials
    
    const serviceID = 'YOUR_SERVICE_ID';
    const templateID = 'YOUR_TEMPLATE_ID';
    const publicKey = 'YOUR_PUBLIC_KEY';
    
    try {
        const response = await emailjs.send(serviceID, templateID, data, publicKey);
        return response;
    } catch (error) {
        throw new Error('EmailJS error: ' + error.text);
    }
}

// ==========================================
// FORM ANIMATIONS
// ==========================================
function initFormAnimations() {
    const formGroups = document.querySelectorAll('.form-group');
    
    formGroups.forEach((group, index) => {
        group.style.opacity = '0';
        group.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            group.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            group.style.opacity = '1';
            group.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

// ==========================================
// CHARACTER COUNTER
// ==========================================
function initCharacterCounter() {
    const messageField = document.getElementById('message');
    
    if (!messageField) return;
    
    const maxChars = 500;
    
    // Create counter element
    const counter = document.createElement('div');
    counter.classList.add('char-counter');
    counter.style.cssText = 'text-align: right; font-size: 0.875rem; color: var(--text-light); margin-top: 0.25rem;';
    counter.textContent = `0 / ${maxChars}`;
    
    messageField.parentElement.appendChild(counter);
    
    messageField.addEventListener('input', () => {
        const length = messageField.value.length;
        counter.textContent = `${length} / ${maxChars}`;
        
        if (length > maxChars) {
            counter.style.color = '#dc3545';
            messageField.value = messageField.value.substring(0, maxChars);
        } else if (length > maxChars * 0.9) {
            counter.style.color = '#ffc107';
        } else {
            counter.style.color = 'var(--text-light)';
        }
    });
}

document.addEventListener('DOMContentLoaded', initCharacterCounter);

// ==========================================
// AUTO-SAVE DRAFT (LocalStorage)
// ==========================================
function initFormAutosave() {
    const form = document.getElementById('contact-form');
    
    if (!form) return;
    
    const inputs = form.querySelectorAll('input, textarea');
    
    // Load saved data
    inputs.forEach(input => {
        const savedValue = localStorage.getItem(`form_${input.name}`);
        if (savedValue) {
            input.value = savedValue;
        }
    });
    
    // Auto-save on input
    inputs.forEach(input => {
        input.addEventListener('input', debounce(() => {
            localStorage.setItem(`form_${input.name}`, input.value);
        }, 500));
    });
    
    // Clear saved data on successful submission
    form.addEventListener('submit', () => {
        setTimeout(() => {
            inputs.forEach(input => {
                localStorage.removeItem(`form_${input.name}`);
            });
        }, 2000);
    });
}

document.addEventListener('DOMContentLoaded', initFormAutosave);

// ==========================================
// SPAM PROTECTION (Honeypot)
// ==========================================
function initHoneypot() {
    const form = document.getElementById('contact-form');
    
    if (!form) return;
    
    // Create honeypot field
    const honeypot = document.createElement('input');
    honeypot.type = 'text';
    honeypot.name = 'website';
    honeypot.style.display = 'none';
    honeypot.tabIndex = -1;
    honeypot.autocomplete = 'off';
    
    form.appendChild(honeypot);
    
    // Check honeypot on submit
    form.addEventListener('submit', (e) => {
        if (honeypot.value !== '') {
            e.preventDefault();
            console.warn('Spam detected');
            return false;
        }
    });
}

document.addEventListener('DOMContentLoaded', initHoneypot);

// ==========================================
// TRACK FORM SUBMISSION
// ==========================================
function trackFormSubmission(data) {
    // Google Analytics tracking (if GA is set up)
    if (typeof gtag !== 'undefined') {
        gtag('event', 'form_submission', {
            event_category: 'Contact',
            event_label: 'Contact Form',
            value: 1
        });
    }
    
    // Console log for development
    console.log('Form submission tracked:', {
        timestamp: new Date().toISOString(),
        data: data
    });
}

// ==========================================
// UTILITY FUNCTIONS
// ==========================================
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ==========================================
// FORM ACCESSIBILITY
// ==========================================
function initFormAccessibility() {
    const form = document.getElementById('contact-form');
    
    if (!form) return;
    
    // Add ARIA labels
    const inputs = form.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        const label = form.querySelector(`label[for="${input.id}"]`);
        if (label && !input.getAttribute('aria-label')) {
            input.setAttribute('aria-label', label.textContent);
        }
    });
    
    // Add required indicators
    const requiredFields = form.querySelectorAll('[required]');
    requiredFields.forEach(field => {
        field.setAttribute('aria-required', 'true');
    });
}

document.addEventListener('DOMContentLoaded', initFormAccessibility);

// ==========================================
// EXPORT FOR MODULAR USE
// ==========================================
window.FormHandler = {
    validateForm,
    showFormStatus,
    submitFormToBackend,
    trackFormSubmission
};

console.log('%c Form Handler Loaded ', 'background: #28a745; color: white; font-size: 12px; padding: 5px;');
