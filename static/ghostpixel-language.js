function setGhostPixelLanguage(lang) {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const keys = key.split('.');
        let translation = ghostpixelTranslations[lang];

        for (const k of keys) {
            translation = translation[k];
        }

        if (translation) {
            element.innerHTML = translation;
        }
    });

    // Footer Links je nach Sprache anzeigen/verstecken
    const deLinks = document.querySelectorAll('.footer-link-de');
    const enLinks = document.querySelectorAll('.footer-link-en');

    if (lang === 'de') {
        deLinks.forEach(link => link.style.display = '');
        enLinks.forEach(link => link.style.display = 'none');
    } else {
        deLinks.forEach(link => link.style.display = 'none');
        enLinks.forEach(link => link.style.display = '');
    }

    // Bilder je nach Sprache wechseln
    const screenshotImages = document.querySelectorAll('.screenshot-img');
    screenshotImages.forEach(img => {
        const dePath = img.getAttribute('data-img-de');
        const enPath = img.getAttribute('data-img-en');

        if (lang === 'de' && dePath) {
            img.src = dePath;
        } else if (lang === 'en' && enPath) {
            img.src = enPath;
        }
    });

    document.documentElement.lang = lang;
    localStorage.setItem('preferredLanguage', lang);
}

function initGhostPixelLanguageSelector() {
    const languageSelector = document.getElementById('languageSelector');

    if (languageSelector) {
        languageSelector.addEventListener('change', (e) => {
            setGhostPixelLanguage(e.target.value);
        });

        // Load saved language preference (default: English)
        const savedLang = localStorage.getItem('preferredLanguage') || 'en';
        languageSelector.value = savedLang;
        setGhostPixelLanguage(savedLang);
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initGhostPixelLanguageSelector);
