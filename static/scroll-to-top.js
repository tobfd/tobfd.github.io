// Scroll to Top Button Funktionalität
const scrollToTopBtn = document.getElementById('scrollToTop');

// Button anzeigen/verstecken basierend auf Scroll-Position
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollToTopBtn.classList.add('show');
    } else {
        scrollToTopBtn.classList.remove('show');
    }
});

// Nach oben scrollen beim Klick
scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

