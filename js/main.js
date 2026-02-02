/* ==========================================
   SHUBHANSHU SAXENA - PORTFOLIO
   Main JavaScript File
   ========================================== */

'use strict';

// ==========================================
// GLOBAL VARIABLES
// ==========================================
let isNavOpen = false;
let scrollPosition = 0;

// ==========================================
// DOM CONTENT LOADED
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    initPreloader();
    initNavigation();
    initMobileMenu();
    initSmoothScroll();
    initBackToTop();
    initCounters();
    initProjectFilter();
    initSkillBars();
    initCursorEffects();
});

// ==========================================
// WINDOW LOAD
// ==========================================
window.addEventListener('load', () => {
    hidePreloader();
});

// ==========================================
// SCROLL EVENT
// ==========================================
window.addEventListener('scroll', () => {
    handleNavbarScroll();
    handleBackToTopVisibility();
    updateScrollPosition();
});

// ==========================================
// PRELOADER
// ==========================================
function initPreloader() {
    const preloader = document.querySelector('.preloader');
    if (!preloader) return;
    
    // Simulate loading progress
    const progressBar = document.querySelector('.loader-progress');
    let progress = 0;
    
    const interval = setInterval(() => {
        progress += Math.random() * 10;
        if (progress >= 100) {
            progress = 100;
            clearInterval(interval);
        }
        if (progressBar) {
            progressBar.style.width = progress + '%';
        }
    }, 100);
}

function hidePreloader() {
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        setTimeout(() => {
            preloader.classList.add('hidden');
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 500);
        }, 500);
    }
}

// ==========================================
// NAVIGATION
// ==========================================
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // Remove active class from all links
            navLinks.forEach(l => l.classList.remove('active'));
            // Add active class to clicked link
            link.classList.add('active');
            
            // Close mobile menu if open
            if (isNavOpen) {
                closeMobileMenu();
            }
        });
    });
    
    // Highlight active section on scroll
    window.addEventListener('scroll', () => {
        highlightActiveSection(navLinks);
    });
}

function highlightActiveSection(navLinks) {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

function handleNavbarScroll() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;
    
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}

// ==========================================
// MOBILE MENU
// ==========================================
function initMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    
    if (!hamburger || !navMenu) return;
    
    hamburger.addEventListener('click', () => {
        if (isNavOpen) {
            closeMobileMenu();
        } else {
            openMobileMenu();
        }
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (isNavOpen && !navMenu.contains(e.target) && !hamburger.contains(e.target)) {
            closeMobileMenu();
        }
    });
}

function openMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    
    hamburger.classList.add('active');
    navMenu.classList.add('active');
    isNavOpen = true;
    
    // Prevent body scroll
    document.body.style.overflow = 'hidden';
}

function closeMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
    isNavOpen = false;
    
    // Restore body scroll
    document.body.style.overflow = '';
}

// ==========================================
// SMOOTH SCROLL
// ==========================================
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            
            // Skip if href is just "#"
            if (href === '#') {
                e.preventDefault();
                return;
            }
            
            const target = document.querySelector(href);
            
            if (target) {
                e.preventDefault();
                const offsetTop = target.offsetTop - 80; // Account for fixed navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ==========================================
// BACK TO TOP BUTTON
// ==========================================
function initBackToTop() {
    const backToTopBtn = document.getElementById('back-to-top');
    
    if (!backToTopBtn) return;
    
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

function handleBackToTopVisibility() {
    const backToTopBtn = document.getElementById('back-to-top');
    
    if (!backToTopBtn) return;
    
    if (window.scrollY > 300) {
        backToTopBtn.classList.add('visible');
    } else {
        backToTopBtn.classList.remove('visible');
    }
}

// ==========================================
// ANIMATED COUNTERS
// ==========================================
function initCounters() {
    const counters = document.querySelectorAll('.stat-number');
    let hasAnimated = false;
    
    const observerOptions = {
        threshold: 0.5
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !hasAnimated) {
                hasAnimated = true;
                animateCounters(counters);
            }
        });
    }, observerOptions);
    
    const statsSection = document.querySelector('.hero-stats');
    if (statsSection) {
        observer.observe(statsSection);
    }
}

function animateCounters(counters) {
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = 2000; // 2 seconds
        const increment = target / (duration / 16); // 60fps
        let current = 0;
        
        const updateCounter = () => {
            current += increment;
            if (current < target) {
                counter.textContent = Math.floor(current);
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target;
            }
        };
        
        updateCounter();
    });
}

// ==========================================
// PROJECT FILTER
// ==========================================
function initProjectFilter() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    if (filterBtns.length === 0) return;
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.getAttribute('data-filter');
            
            // Update active button
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Filter projects
            filterProjects(filter, projectCards);
        });
    });
}

function filterProjects(filter, projectCards) {
    projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        
        if (filter === 'all') {
            card.style.display = 'block';
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'scale(1)';
            }, 10);
        } else {
            if (category.includes(filter)) {
                card.style.display = 'block';
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'scale(1)';
                }, 10);
            } else {
                card.style.opacity = '0';
                card.style.transform = 'scale(0.8)';
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        }
    });
}

// ==========================================
// SKILL BARS ANIMATION
// ==========================================
function initSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    if (skillBars.length === 0) return;
    
    const observerOptions = {
        threshold: 0.5
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillBar = entry.target;
                const progress = skillBar.getAttribute('data-progress');
                skillBar.style.width = progress + '%';
                skillBar.classList.add('animate');
            }
        });
    }, observerOptions);
    
    skillBars.forEach(bar => observer.observe(bar));
}

// ==========================================
// CUSTOM CURSOR EFFECTS
// ==========================================
function initCursorEffects() {
    // Check if device supports hover (not touch device)
    if (!window.matchMedia('(hover: hover)').matches) return;
    
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorOutline = document.querySelector('.cursor-outline');
    
    if (!cursorDot || !cursorOutline) return;
    
    let mouseX = 0, mouseY = 0;
    let outlineX = 0, outlineY = 0;
    
    // Update cursor position on mouse move
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        cursorDot.style.left = mouseX + 'px';
        cursorDot.style.top = mouseY + 'px';
    });
    
    // Smooth outline following
    function animateOutline() {
        outlineX += (mouseX - outlineX) * 0.15;
        outlineY += (mouseY - outlineY) * 0.15;
        
        cursorOutline.style.left = outlineX + 'px';
        cursorOutline.style.top = outlineY + 'px';
        
        requestAnimationFrame(animateOutline);
    }
    animateOutline();
    
    // Expand cursor on hover over clickable elements
    const clickableElements = document.querySelectorAll('a, button, .btn, .filter-btn, .social-link');
    
    clickableElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursorDot.style.transform = 'translate(-50%, -50%) scale(2)';
            cursorOutline.style.width = '50px';
            cursorOutline.style.height = '50px';
        });
        
        el.addEventListener('mouseleave', () => {
            cursorDot.style.transform = 'translate(-50%, -50%) scale(1)';
            cursorOutline.style.width = '32px';
            cursorOutline.style.height = '32px';
        });
    });
}

// ==========================================
// TESTIMONIAL SLIDER
// ==========================================
function initTestimonialSlider() {
    const testimonials = document.querySelectorAll('.testimonial-card');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const dotsContainer = document.querySelector('.slider-dots');
    
    if (testimonials.length === 0) return;
    
    let currentSlide = 0;
    const totalSlides = testimonials.length;
    
    // Create dots
    for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement('span');
        dot.classList.add('slider-dot');
        if (i === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(i));
        dotsContainer.appendChild(dot);
    }
    
    const dots = document.querySelectorAll('.slider-dot');
    
    // Show first slide
    showSlide(0);
    
    // Next button
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            currentSlide = (currentSlide + 1) % totalSlides;
            showSlide(currentSlide);
        });
    }
    
    // Previous button
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
            showSlide(currentSlide);
        });
    }
    
    function showSlide(index) {
        testimonials.forEach((slide, i) => {
            if (i === index) {
                slide.style.display = 'block';
                setTimeout(() => {
                    slide.style.opacity = '1';
                }, 10);
            } else {
                slide.style.opacity = '0';
                setTimeout(() => {
                    slide.style.display = 'none';
                }, 300);
            }
        });
        
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    }
    
    function goToSlide(index) {
        currentSlide = index;
        showSlide(currentSlide);
    }
    
    // Auto-play
    setInterval(() => {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    }, 5000);
}

// Initialize testimonial slider
document.addEventListener('DOMContentLoaded', initTestimonialSlider);

// ==========================================
// PARALLAX EFFECT
// ==========================================
function initParallax() {
    const parallaxElements = document.querySelectorAll('.parallax');
    
    if (parallaxElements.length === 0) return;
    
    window.addEventListener('scroll', () => {
        parallaxElements.forEach(el => {
            const speed = el.getAttribute('data-speed') || 0.5;
            const offset = window.pageYOffset * speed;
            el.style.setProperty('--scroll-offset', `${offset}px`);
        });
    });
}

document.addEventListener('DOMContentLoaded', initParallax);

// ==========================================
// UPDATE SCROLL POSITION
// ==========================================
function updateScrollPosition() {
    scrollPosition = window.pageYOffset;
}

// ==========================================
// LAZY LOADING IMAGES
// ==========================================
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    if (images.length === 0) return;
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.getAttribute('data-src');
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

document.addEventListener('DOMContentLoaded', initLazyLoading);

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

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// ==========================================
// PERFORMANCE OPTIMIZATION
// ==========================================
// Optimize scroll events
window.addEventListener('scroll', throttle(() => {
    // Scroll-dependent operations
}, 100));

// ==========================================
// CONSOLE LOG (Development)
// ==========================================
console.log('%c Portfolio Loaded Successfully! ', 'background: #FF6B35; color: white; font-size: 20px; padding: 10px;');
console.log('%c Designed & Developed by Shubhanshu Saxena ', 'background: #004E89; color: white; font-size: 14px; padding: 5px;');
