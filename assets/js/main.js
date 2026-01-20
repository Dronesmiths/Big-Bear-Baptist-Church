const initializeHeroSlider = () => {
    const slider = document.querySelector('.hero-slider');
    if (!slider) return;

    const slides = Array.from(slider.querySelectorAll('.hero-slide'));
    const dots = Array.from(slider.querySelectorAll('.hero-slider-dot'));
    const prevButton = slider.querySelector('[data-action="prev"]');
    const nextButton = slider.querySelector('[data-action="next"]');

    if (!slides.length) return;

    let currentIndex = 0;
    let intervalId;

    const activateSlide = (targetIndex) => {
        slides[currentIndex].classList.remove('active');
        dots[currentIndex]?.classList.remove('active');

        currentIndex = (targetIndex + slides.length) % slides.length;

        slides[currentIndex].classList.add('active');
        dots[currentIndex]?.classList.add('active');
    };

    const startRotation = () => {
        stopRotation();
        intervalId = window.setInterval(() => {
            activateSlide(currentIndex + 1);
        }, 7000);
    };

    const stopRotation = () => {
        if (intervalId) {
            window.clearInterval(intervalId);
        }
    };

    const handleInteraction = (callback) => {
        callback();
        startRotation();
    };

    nextButton?.addEventListener('click', () => handleInteraction(() => activateSlide(currentIndex + 1)));
    prevButton?.addEventListener('click', () => handleInteraction(() => activateSlide(currentIndex - 1)));

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => handleInteraction(() => activateSlide(index)));
    });

    slider.addEventListener('mouseenter', stopRotation);
    slider.addEventListener('mouseleave', startRotation);

    startRotation();
};

const initializeNavigation = () => {
    const toggle = document.querySelector('[data-nav-toggle]');
    const menu = document.querySelector('[data-nav-menu]');
    if (!menu || !toggle) return;

    const navLinks = menu.querySelectorAll('a[href]');
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';

    // Highlight current page
    navLinks.forEach((link) => {
        const href = link.getAttribute('href');
        if (!href) return;

        const normalizedHref = href.replace('./', '');
        const isMatch = normalizedHref === currentPath || (normalizedHref === 'index.html' && currentPath === '');

        if (isMatch) {
            link.classList.add('text-emerald-600');
        } else {
            link.classList.remove('text-emerald-600');
        }
    });

    // Toggle menu on button click
    toggle.addEventListener('click', () => {
        const isOpen = menu.classList.toggle('nav-open');
        toggle.setAttribute('aria-expanded', String(isOpen));
    });

    // Close menu when a link is clicked
    navLinks.forEach((link) => {
        link.addEventListener('click', () => {
            menu.classList.remove('nav-open');
            toggle.setAttribute('aria-expanded', 'false');
        });
    });

    // Close menu on resize if screen is large
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 768) {
            menu.classList.remove('nav-open');
            toggle.setAttribute('aria-expanded', 'false');
        }
    });

    // Close menu when clicking outside on mobile
    document.addEventListener('click', (e) => {
        if (window.innerWidth < 768 && !menu.contains(e.target) && !toggle.contains(e.target)) {
            menu.classList.remove('nav-open');
            toggle.setAttribute('aria-expanded', 'false');
        }
    });
};

const initializeCurrentYear = () => {
    const targets = document.querySelectorAll('[data-current-year]');
    if (!targets.length) return;

    const year = new Date().getFullYear();
    targets.forEach((node) => {
        node.textContent = year;
    });
};

document.addEventListener('DOMContentLoaded', () => {
    initializeHeroSlider();
    initializeNavigation();
    initializeCurrentYear();
});
