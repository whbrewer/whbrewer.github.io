// ===================================
// Scroll Animations
// ===================================

document.addEventListener('DOMContentLoaded', function() {

    // ===================================
    // Intersection Observer for Fade-In Effects
    // ===================================
    const fadeElements = document.querySelectorAll('.fade-in');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const fadeObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: stop observing after animation
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    fadeElements.forEach(element => {
        fadeObserver.observe(element);
    });

    // ===================================
    // Slide-In Animations
    // ===================================
    const slideLeftElements = document.querySelectorAll('.slide-in-left');
    const slideRightElements = document.querySelectorAll('.slide-in-right');

    const slideObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    slideLeftElements.forEach(element => {
        slideObserver.observe(element);
    });

    slideRightElements.forEach(element => {
        slideObserver.observe(element);
    });

    // ===================================
    // Scale-In Animations
    // ===================================
    const scaleElements = document.querySelectorAll('.scale-in');

    scaleElements.forEach(element => {
        fadeObserver.observe(element);
    });

    // ===================================
    // Service Card Stagger Animation
    // ===================================
    const serviceCards = document.querySelectorAll('.service-card');

    const cardObserverOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const cardObserver = new IntersectionObserver(function(entries) {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Add delay based on card index
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, index * 100);
            }
        });
    }, cardObserverOptions);

    serviceCards.forEach(card => {
        cardObserver.observe(card);
    });

    // ===================================
    // Testimonial Card Animation
    // ===================================
    const testimonialCards = document.querySelectorAll('.testimonial-card');

    testimonialCards.forEach(card => {
        cardObserver.observe(card);
    });

    // ===================================
    // Number Counter Animation (Optional)
    // ===================================
    function animateCounter(element, target, duration = 2000) {
        const start = 0;
        const increment = target / (duration / 16);
        let current = start;

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = target;
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current);
            }
        }, 16);
    }

    // Example usage (if you add counter elements):
    // const counters = document.querySelectorAll('.counter');
    // counters.forEach(counter => {
    //     const target = parseInt(counter.getAttribute('data-target'));
    //     const counterObserver = new IntersectionObserver(entries => {
    //         entries.forEach(entry => {
    //             if (entry.isIntersecting) {
    //                 animateCounter(counter, target);
    //                 counterObserver.unobserve(counter);
    //             }
    //         });
    //     }, { threshold: 0.5 });
    //     counterObserver.observe(counter);
    // });

    // ===================================
    // Parallax Effect (Subtle)
    // ===================================
    const hero = document.querySelector('.hero');

    if (hero && window.matchMedia('(prefers-reduced-motion: no-preference)').matches) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const parallaxSpeed = 0.5;

            if (scrolled < window.innerHeight) {
                hero.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
            }
        }, { passive: true });
    }

    // ===================================
    // Add smooth reveal to contact section
    // ===================================
    const contactSection = document.querySelector('.contact');

    if (contactSection) {
        const contactObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.2 });

        contactSection.style.opacity = '0';
        contactSection.style.transform = 'translateY(30px)';
        contactSection.style.transition = 'opacity 0.8s ease, transform 0.8s ease';

        contactObserver.observe(contactSection);
    }
});
