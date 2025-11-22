function setLanguage(lang) {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const keys = key.split('.');
        let translation = translations[lang];

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

    document.documentElement.lang = lang;
    localStorage.setItem('preferredLanguage', lang);
}

function initLanguageSelector() {
    const languageSelector = document.getElementById('languageSelector');

    if (languageSelector) {
        languageSelector.addEventListener('change', (e) => {
            setLanguage(e.target.value);
        });

        // Load saved language preference (default: English)
        const savedLang = localStorage.getItem('preferredLanguage') || 'en';
        languageSelector.value = savedLang;
        setLanguage(savedLang);
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initLanguageSelector);

