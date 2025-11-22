const ghostpixelTranslations = {
    de: {
        nav: {
            home: "Startseite"
        },
        header: {
            subtitle: "Discord Bot für E-Mail Tracking-Pixel",
            description: 'ist ein Discord-Bot, mit dem du <span class="highlight">unsichtbare Tracking-Pixel</span> erstellen kannst, um zu sehen, wann eine E-Mail geöffnet wurde – <span class="highlight">ohne persönliche Daten</span> zu speichern.'
        },
        buttons: {
            inviteBot: "Bot einladen",
            supportServer: "Support-Server",
            joinSupportServer: "Support-Server beitreten"
        },
        features: {
            title: "✨ Funktionen",
            feature1: {
                title: "📩 Tracking-Pixel erstellen",
                desc: "Erstelle Tracking-Pixel direkt über Discord-Befehle und erhalte den passenden HTML-Code für deine E-Mail."
            },
            feature2: {
                title: "📊 Statistiken einsehen",
                desc: "Sieh dir im Bot an, wann deine E-Mails geöffnet wurden und behalte den Überblick."
            },
            feature3: {
                title: "🧾 Pixel verwalten",
                desc: "Verwalte deine erstellten Tracking-Pixel und lösche sie jederzeit wieder."
            },
            feature4: {
                title: "🌐 Status-Überwachung",
                desc: "Status-Seite über Uptime Kuma zeigt an, ob Bot, API und Datenbank online sind."
            },
            feature5: {
                title: "⚙️ Moderne Technologie",
                desc: "Der Bot läuft vollständig über eine eigene FastAPI-API mit PostgreSQL-Datenbank."
            },
            feature6: {
                title: "🌍 Mehrsprachig",
                desc: 'Unterstützt <span class="highlight">Deutsch</span> und <span class="highlight">Englisch</span> für internationale Nutzer.'
            }
        },
        screenshots: {
            title: "📸 Einblicke",
            screenshot1: {
                title: "Bot-Übersicht",
                desc: "Hier siehst du die Hauptfunktionen von GhostPixel auf einen Blick. Der Bot bietet eine intuitive Benutzeroberfläche direkt in Discord."
            },
            screenshot2: {
                title: "Pixel-Verwaltung",
                desc: "Mit dem Verwaltungs-Befehl kannst du alle deine erstellten Tracking-Pixel einsehen, bearbeiten und löschen."
            },
            screenshot3: {
                title: "Event-Übersicht",
                desc: "Behalte den Überblick über alle Tracking-Events. Sieh genau, wann deine E-Mails geöffnet wurden."
            }
        },
        privacy: {
            title: "🔒 Datenschutz",
            intro: 'ist <span class="highlight">datenschutzfreundlich</span> konzipiert und entspricht der <span class="highlight">DSGVO</span>:',
            point1: "<strong>Keine IP-Adressen</strong> – Es werden keine IP-Adressen der E-Mail-Empfänger gespeichert",
            point2: "<strong>Keine Gerätedaten</strong> – Keine User-Agents oder Geräteinformationen werden erfasst",
            point3: "<strong>Minimal-Prinzip</strong> – Nur Discord User-ID und Zeitstempel des Aufrufs werden gespeichert",
            point4: "<strong>Europa-Hosting</strong> – Server läuft im IONOS Rechenzentrum innerhalb der Europäischen Union (EU)"
        },
        tech: {
            title: "⚙️ Technische Details",
            tech1: "Modernes Backend mit FastAPI für schnelle API-Anfragen",
            tech2: "Zuverlässige Datenbank für alle Tracking-Daten",
            tech3: "Live-Statusüberwachung für Bot, API und Datenbank"
        },
        audience: {
            title: "🎯 Für wen ist GhostPixel?",
            desc: 'GhostPixel ist für alle, die wissen möchten, wann ihre E-Mails geöffnet werden – egal ob bei <span class="highlight">Bewerbungen</span>, <span class="highlight">wichtigen Nachrichten</span> oder im <span class="highlight">Alltag</span>. Einfach zu nutzen, direkt über Discord und ganz ohne technische Kenntnisse.'
        },
        contact: {
            title: "📬 Kontakt & Support",
            creator: "Ersteller:",
            planned: "(geplant)"
        },
        footer: {
            imprint: "Impressum",
            privacy: "Datenschutzerklärung",
            terms: "Nutzungsbedingungen"
        }
    },
    en: {
        nav: {
            home: "Home"
        },
        header: {
            subtitle: "Discord Bot for Email Tracking Pixels",
            description: 'is a Discord bot that lets you create <span class="highlight">invisible tracking pixels</span> to see when an email has been opened—<span class="highlight">without storing any personal data</span>.'
        },
        buttons: {
            inviteBot: "Invite Bot",
            supportServer: "Support Server",
            joinSupportServer: "Join Support Server"
        },
        features: {
            title: "✨ Features",
            feature1: {
                title: "📩 Create tracking pixels",
                desc: "Create tracking pixels directly via Discord commands and get the appropriate HTML code for your email."
            },
            feature2: {
                title: "📊 View statistics",
                desc: "Check the bot to see when your emails were opened and keep track of them."
            },
            feature3: {
                title: "🧾 Manage pixels",
                desc: "Manage the tracking pixels you have created and delete them at any time."
            },
            feature4: {
                title: "🌐 Status monitoring",
                desc: "The status page via Uptime Kuma shows whether the bot, API, and database are online."
            },
            feature5: {
                title: "⚙️ Modern technology",
                desc: "The bot runs entirely on its own FastAPI API with a PostgreSQL database."
            },
            feature6: {
                title: "🌍 Multilingual",
                desc: 'Supports <span class="highlight">German</span> and <span class="highlight">English</span> for international users.'
            }
        },
        screenshots: {
            title: "📸 Insights",
            screenshot1: {
                title: "Bot overview",
                desc: "Here you can see the main features of GhostPixel at a glance. The bot offers an intuitive user interface directly in Discord."
            },
            screenshot2: {
                title: "Pixel Management",
                desc: "With the management command, you can view, edit, and delete all of your created tracking pixels."
            },
            screenshot3: {
                title: "Event Overview",
                desc: "Keep track of all tracking events. See exactly when your emails were opened."
            }
        },
        privacy: {
            title: "🔒 Data protection",
            intro: 'is designed to be <span class="highlight">data protection-friendly</span> and complies with the <span class="highlight">GDPR</span>:',
            point1: "<strong>No IP addresses</strong> – No IP addresses of email recipients are stored.",
            point2: "<strong>No device data</strong> – No user agents or device information are collected.",
            point3: "<strong>Minimal principle</strong> – Only Discord user ID and timestamp of the call are stored.",
            point4: "<strong>European hosting</strong> – Server runs in the IONOS data center within the European Union (EU)."
        },
        tech: {
            title: "⚙️ Technical Details",
            tech1: "Modern backend with FastAPI for fast API requests.",
            tech2: "Reliable database for all tracking data.",
            tech3: "Live status monitoring for bot, API, and database"
        },
        audience: {
            title: "🎯 Who is GhostPixel for?",
            desc: 'GhostPixel is for anyone who wants to know when their emails are opened — whether they\'re <span class="highlight">job applications</span>, <span class="highlight">important messages</span>, or <span class="highlight">everyday correspondence</span>. Easy to use, directly through Discord, and no technical knowledge required.'
        },
        contact: {
            title: "📬 Contact & Support",
            creator: "Creator:",
            planned: "(planned)"
        },
        footer: {
            imprint: "Legal notice",
            privacy: "Privacy Policy",
            terms: "Terms of Service"
        }
    }
};
