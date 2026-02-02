/* ==========================================
   ANIMATIONS JAVASCRIPT
   Scroll-triggered animations and reveal effects
   ========================================== */

'use strict';

// ==========================================
// SCROLL REVEAL INITIALIZATION
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    initScrollReveal();
    initStaggerAnimations();
    initTimelineAnimations();
    initFloatingElements();
    initTextAnimations();
});

// ==========================================
// SCROLL REVEAL
// ==========================================
function initScrollReveal() {
    const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-zoom');
    
    if (revealElements.length === 0) {
        // Auto-add reveal classes to common elements
        addRevealClasses();
    }
    
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                
                // Optionally unobserve after animation
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe all reveal elements
    const allRevealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-zoom');
    allRevealElements.forEach(el => observer.observe(el));
}

// ==========================================
// AUTO-ADD REVEAL CLASSES
// ==========================================
function addRevealClasses() {
    // Add reveal to section headers
    const sectionHeaders = document.querySelectorAll('.section-header');
    sectionHeaders.forEach(header => {
        header.classList.add('reveal');
    });
    
    // Add reveal to cards
    const cards = document.querySelectorAll('.expertise-card, .brand-card, .project-card, .cert-card, .education-card');
    cards.forEach((card, index) => {
        card.classList.add('reveal');
        card.classList.add(`reveal-delay-${(index % 3) + 1}`);
    });
    
    // Add reveal to about content
    const aboutImage = document.querySelector('.about-image');
    const aboutText = document.querySelector('.about-text');
    if (aboutImage) aboutImage.classList.add('reveal-left');
    if (aboutText) aboutText.classList.add('reveal-right');
    
    // Add reveal to contact content
    const contactInfo = document.querySelector('.contact-info');
    const contactForm = document.querySelector('.contact-form-wrapper');
    if (contactInfo) contactInfo.classList.add('reveal-left');
    if (contactForm) contactForm.classList.add('reveal-right');
}

// ==========================================
// STAGGER ANIMATIONS
// ==========================================
function initStaggerAnimations() {
    const staggerContainers = [
        '.hero-stats',
        '.about-highlights',
        '.timeline-responsibilities',
        '.card-skills'
    ];
    
    staggerContainers.forEach(selector => {
        const container = document.querySelector(selector);
        if (!container) return;
        
        const items = container.children;
        Array.from(items).forEach((item, index) => {
            item.classList.add('stagger-item');
            item.style.animationDelay = `${index * 0.1}s`;
        });
        
        // Observe container
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                }
            });
        }, { threshold: 0.2 });
        
        observer.observe(container);
    });
}

// ==========================================
// TIMELINE ANIMATIONS
// ==========================================
function initTimelineAnimations() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    if (timelineItems.length === 0) return;
    
    const observerOptions = {
        threshold: 0.3,
        rootMargin: '0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, observerOptions);
    
    timelineItems.forEach(item => observer.observe(item));
}

// ==========================================
// FLOATING ELEMENTS
// ==========================================
function initFloatingElements() {
    const floatingElements = document.querySelectorAll('.floating-badge, .shape');
    
    floatingElements.forEach((el, index) => {
        // Randomize animation duration for more natural movement
        const duration = 3 + (index * 0.5);
        el.style.animationDuration = `${duration}s`;
    });
}

// ==========================================
// TEXT ANIMATIONS
// ==========================================
function initTextAnimations() {
    // Typing effect for specific elements
    const typingElements = document.querySelectorAll('.typing-effect');
    
    typingElements.forEach(el => {
        const text = el.textContent;
        el.textContent = '';
        el.style.display = 'inline-block';
        
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                el.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        };
        
        // Start typing when element is visible
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    typeWriter();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(el);
    });
}

// ==========================================
// SMOOTH SCROLL PROGRESS
// ==========================================
function initScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.classList.add('scroll-progress');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        height: 3px;
        background: linear-gradient(90deg, var(--primary-color), var(--accent-color));
        z-index: 9999;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.pageYOffset / windowHeight) * 100;
        progressBar.style.width = scrolled + '%';
    });
}

document.addEventListener('DOMContentLoaded', initScrollProgress);

// ==========================================
// MOUSE TRAIL EFFECT
// ==========================================
function initMouseTrail() {
    // Only on non-touch devices
    if (!window.matchMedia('(hover: hover)').matches) return;
    
    let trails = [];
    const maxTrails = 20;
    
    document.addEventListener('mousemove', (e) => {
        if (trails.length >= maxTrails) {
            const oldTrail = trails.shift();
            oldTrail.remove();
        }
        
        const trail = document.createElement('div');
        trail.classList.add('cursor-trail');
        trail.style.left = e.clientX + 'px';
        trail.style.top = e.clientY + 'px';
        document.body.appendChild(trail);
        
        trails.push(trail);
        
        setTimeout(() => {
            trail.remove();
            trails = trails.filter(t => t !== trail);
        }, 500);
    });
}

// Uncomment to enable mouse trail effect
// document.addEventListener('DOMContentLoaded', initMouseTrail);

// ==========================================
// PARALLAX SCROLLING
// ==========================================
function initAdvancedParallax() {
    const parallaxElements = [
        { selector: '.floating-shapes', speed: 0.3 },
        { selector: '.hero-image', speed: 0.2 },
        { selector: '.about-pattern', speed: 0.4 }
    ];
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        
        parallaxElements.forEach(({ selector, speed }) => {
            const element = document.querySelector(selector);
            if (element) {
                const offset = scrolled * speed;
                element.style.transform = `translateY(${offset}px)`;
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', initAdvancedParallax);

// ==========================================
// MAGNETIC BUTTON EFFECT
// ==========================================
function initMagneticButtons() {
    const magneticButtons = document.querySelectorAll('.btn-primary, .btn-secondary');
    
    magneticButtons.forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
        });
        
        btn.addEventListener('mouseleave', () => {
            btn.style.transform = 'translate(0, 0)';
        });
    });
}

document.addEventListener('DOMContentLoaded', initMagneticButtons);

// ==========================================
// TILT EFFECT ON CARDS
// ==========================================
function initTiltEffect() {
    const tiltCards = document.querySelectorAll('.project-card, .expertise-card');
    
    tiltCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
        });
    });
}

// Only apply tilt effect on desktop
if (window.innerWidth > 1024) {
    document.addEventListener('DOMContentLoaded', initTiltEffect);
}

// ==========================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ==========================================
class AnimationObserver {
    constructor(elements, options = {}) {
        this.elements = typeof elements === 'string' 
            ? document.querySelectorAll(elements) 
            : elements;
        
        this.options = {
            threshold: options.threshold || 0.2,
            rootMargin: options.rootMargin || '0px',
            animationClass: options.animationClass || 'animate',
            once: options.once !== undefined ? options.once : true
        };
        
        this.init();
    }
    
    init() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(this.options.animationClass);
                    
                    if (this.options.once) {
                        observer.unobserve(entry.target);
                    }
                } else if (!this.options.once) {
                    entry.target.classList.remove(this.options.animationClass);
                }
            });
        }, {
            threshold: this.options.threshold,
            rootMargin: this.options.rootMargin
        });
        
        this.elements.forEach(el => observer.observe(el));
    }
}

// ==========================================
// NUMBER COUNTER ANIMATION
// ==========================================
function animateNumber(element, start, end, duration) {
    const range = end - start;
    const increment = range / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if ((increment > 0 && current >= end) || (increment < 0 && current <= end)) {
            element.textContent = end;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// ==========================================
// WAVE ANIMATION
// ==========================================
function initWaveAnimation() {
    const wave = document.querySelector('.wave');
    if (!wave) return;
    
    setInterval(() => {
        wave.style.animation = 'none';
        setTimeout(() => {
            wave.style.animation = '';
        }, 10);
    }, 3000);
}

document.addEventListener('DOMContentLoaded', initWaveAnimation);

// ==========================================
// GLITCH EFFECT (Optional)
// ==========================================
function initGlitchEffect() {
    const glitchElements = document.querySelectorAll('.glitch-effect');
    
    glitchElements.forEach(el => {
        const text = el.textContent;
        el.setAttribute('data-text', text);
        
        el.addEventListener('mouseenter', () => {
            el.classList.add('glitching');
            setTimeout(() => {
                el.classList.remove('glitching');
            }, 500);
        });
    });
}

// ==========================================
// PAGE LOAD ANIMATIONS
// ==========================================
window.addEventListener('load', () => {
    // Trigger initial animations
    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
        heroSection.classList.add('loaded');
    }
    
    // Animate elements sequentially
    setTimeout(() => {
        const firstSection = document.querySelector('.about-section');
        if (firstSection) {
            firstSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            setTimeout(() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }, 100);
        }
    }, 1000);
});

// ==========================================
// SMOOTH REVEAL ON PAGE LOAD
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    document.body.style.opacity = '0';
    
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// ==========================================
// EXPORT FOR MODULAR USE
// ==========================================
window.PortfolioAnimations = {
    AnimationObserver,
    animateNumber,
    initScrollReveal,
    initStaggerAnimations,
    initTimelineAnimations,
    initMagneticButtons,
    initTiltEffect
};

console.log('%c Animations Module Loaded ', 'background: #F7B32B; color: #0A1128; font-size: 12px; padding: 5px;');
