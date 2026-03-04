import { ServicePage } from './types';

export const servicePages: ServicePage[] = [
  {
    slug: 'custom-software-development',
    title: {
      de: 'Individuelle Softwareentwicklung',
      en: 'Custom Software Development',
    },
    subtitle: {
      de: 'Maßgeschneiderte Software, die exakt auf Ihre Geschäftsprozesse zugeschnitten ist',
      en: 'Tailored software built precisely around your business processes',
    },
    metaDescription: {
      de: 'Individuelle Softwareentwicklung aus Burg. Wir entwickeln maßgeschneiderte Anwendungen mit React, Next.js, TypeScript und Node.js für Ihr Unternehmen.',
      en: 'Custom software development from Burg. We build tailored applications with React, Next.js, TypeScript, and Node.js for your business.',
    },
    overview: {
      de: 'Standardsoftware löst Standardprobleme. Aber Ihr Unternehmen ist nicht Standard. Wenn Geschäftsprozesse in vorgefertigte Tools gepresst werden, entstehen Workarounds, Medienbrüche und manuelle Zwischenschritte, die Zeit und Geld kosten. Individuelle Software beseitigt diese Reibungsverluste — sie bildet Ihre Prozesse exakt ab, nicht andersherum.\n\nBei Haseloff Software Solutions entwickeln wir maßgeschneiderte Anwendungen für mittelständische Unternehmen und Organisationen in Sachsen-Anhalt und darüber hinaus. Unser Stack — React, Next.js, TypeScript, Node.js und PostgreSQL — ist modern, bewährt und skalierbar. Wir setzen auf Technologien, die sich in tausenden Produktionsumgebungen weltweit bewiesen haben.\n\nVon der ersten Anforderungsanalyse bis zum Go-Live und darüber hinaus arbeiten wir eng mit Ihrem Team zusammen. Keine Blackbox-Entwicklung, keine monatelange Funkstille. Sie sehen alle zwei Wochen lauffähige Ergebnisse und können jederzeit Feedback geben, das direkt in die nächste Iteration einfließt.\n\nDas Ergebnis: Software, die sich anfühlt, als wäre sie schon immer Teil Ihres Unternehmens gewesen. Schneller, effizienter und zuverlässiger als jede Kombination aus Excel-Tabellen, E-Mail-Ketten und zugekauften Tools, die nie ganz zusammenpassen.',
      en: 'Off-the-shelf software solves off-the-shelf problems. But your business is not off-the-shelf. When processes get forced into pre-built tools, the result is workarounds, media breaks, and manual steps that cost time and money. Custom software eliminates this friction — it maps your processes exactly, not the other way around.\n\nAt Haseloff Software Solutions, we build tailored applications for mid-sized companies and organizations in Sachsen-Anhalt and beyond. Our stack — React, Next.js, TypeScript, Node.js, and PostgreSQL — is modern, proven, and scalable. We use technologies that have been battle-tested in thousands of production environments worldwide.\n\nFrom initial requirements analysis through go-live and beyond, we work closely with your team. No black-box development, no months of radio silence. You see working results every two weeks and can provide feedback that flows directly into the next iteration.\n\nThe result: software that feels like it has always been part of your business. Faster, more efficient, and more reliable than any combination of spreadsheets, email chains, and purchased tools that never quite fit together.',
    },
    process: [
      {
        step: { de: 'Anforderungsanalyse', en: 'Requirements Analysis' },
        description: {
          de: 'Wir analysieren Ihre bestehenden Prozesse, identifizieren Engpässe und definieren gemeinsam den Funktionsumfang. Am Ende steht ein klares Projektkonzept mit Zeitplan, Budget und priorisierten Features.',
          en: 'We analyze your existing processes, identify bottlenecks, and jointly define the feature scope. The result is a clear project concept with timeline, budget, and prioritized features.',
        },
      },
      {
        step: { de: 'Architektur & Design', en: 'Architecture & Design' },
        description: {
          de: 'Wir entwerfen die technische Architektur, definieren Datenmodelle und erstellen interaktive Prototypen. Sie sehen und testen das Konzept, bevor eine einzige Zeile Produktivcode geschrieben wird.',
          en: 'We design the technical architecture, define data models, and create interactive prototypes. You see and test the concept before a single line of production code is written.',
        },
      },
      {
        step: { de: 'Iterative Entwicklung', en: 'Iterative Development' },
        description: {
          de: 'In zweiwöchigen Sprints entwickeln wir funktionsfähige Softwareinkremente. Jeder Sprint liefert testbare Ergebnisse, und Ihr Feedback fließt direkt in die Planung des nächsten Sprints ein.',
          en: 'In two-week sprints, we develop functional software increments. Each sprint delivers testable results, and your feedback feeds directly into the planning of the next sprint.',
        },
      },
      {
        step: { de: 'Qualitätssicherung', en: 'Quality Assurance' },
        description: {
          de: 'Automatisierte Tests, Code-Reviews und Lasttests sichern die Qualität in jeder Phase. Wir testen nicht nur am Ende — Qualitätssicherung ist fester Bestandteil jedes Entwicklungszyklus.',
          en: 'Automated tests, code reviews, and load tests ensure quality at every stage. We do not just test at the end — quality assurance is an integral part of every development cycle.',
        },
      },
      {
        step: { de: 'Deployment & Go-Live', en: 'Deployment & Go-Live' },
        description: {
          de: 'Wir richten CI/CD-Pipelines ein, konfigurieren die Produktionsumgebung und begleiten den Go-Live. Rollback-Strategien und Monitoring stellen sicher, dass der Start reibungslos verläuft.',
          en: 'We set up CI/CD pipelines, configure the production environment, and support the go-live. Rollback strategies and monitoring ensure a smooth launch.',
        },
      },
      {
        step: { de: 'Wartung & Weiterentwicklung', en: 'Maintenance & Evolution' },
        description: {
          de: 'Nach dem Launch überwachen wir Performance und Verfügbarkeit, beheben Fehler und entwickeln neue Features. Ihre Software wächst mit Ihrem Unternehmen — ohne technische Schulden anzuhäufen.',
          en: 'After launch, we monitor performance and availability, fix bugs, and develop new features. Your software grows with your business — without accumulating technical debt.',
        },
      },
    ],
    technologies: ['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Docker', 'AWS'],
    industries: {
      de: [
        'Logistik & Transport',
        'Gesundheitswesen',
        'Energie & Versorgung',
        'Handwerk & Produktion',
        'Finanzdienstleistungen',
        'Öffentliche Verwaltung',
        'Einzelhandel & E-Commerce',
      ],
      en: [
        'Logistics & Transport',
        'Healthcare',
        'Energy & Utilities',
        'Manufacturing & Trades',
        'Financial Services',
        'Public Administration',
        'Retail & E-Commerce',
      ],
    },
    useCases: [
      {
        title: {
          de: 'Kundenportale & Self-Service-Plattformen',
          en: 'Customer Portals & Self-Service Platforms',
        },
        description: {
          de: 'Geben Sie Ihren Kunden direkten Zugriff auf Bestellungen, Rechnungen, Supporttickets und Dokumente. Weniger Anrufe, schnellere Abwicklung, höhere Kundenzufriedenheit.',
          en: 'Give your customers direct access to orders, invoices, support tickets, and documents. Fewer calls, faster processing, higher customer satisfaction.',
        },
      },
      {
        title: {
          de: 'Interne Verwaltungssysteme',
          en: 'Internal Management Systems',
        },
        description: {
          de: 'Ersetzen Sie Excel-Tabellen und Insellösungen durch ein zentrales System für Auftrags-, Projekt- oder Ressourcenverwaltung, das alle Abteilungen verbindet.',
          en: 'Replace spreadsheets and siloed tools with a centralized system for order, project, or resource management that connects all departments.',
        },
      },
      {
        title: {
          de: 'Datenintegration & Dashboards',
          en: 'Data Integration & Dashboards',
        },
        description: {
          de: 'Führen Sie Daten aus verschiedenen Quellen zusammen und machen Sie sie in Echtzeit-Dashboards sichtbar. Fundierte Entscheidungen statt Bauchgefühl.',
          en: 'Consolidate data from multiple sources and make it visible in real-time dashboards. Data-driven decisions instead of gut feelings.',
        },
      },
      {
        title: {
          de: 'Branchenspezifische Fachanwendungen',
          en: 'Industry-Specific Applications',
        },
        description: {
          de: 'Vom Patientenportal bis zum Dispositionssystem: Wir entwickeln Anwendungen, die branchenspezifische Anforderungen und Regularien von Anfang an berücksichtigen.',
          en: 'From patient portals to dispatch systems: we build applications that account for industry-specific requirements and regulations from day one.',
        },
      },
    ],
    faq: [
      {
        question: {
          de: 'Was kostet individuelle Softwareentwicklung?',
          en: 'What does custom software development cost?',
        },
        answer: {
          de: 'Die Kosten hängen vom Funktionsumfang, der Komplexität und den Integrationsanforderungen ab. Ein typisches Projekt für ein mittelständisches Unternehmen beginnt bei 15.000 € und kann je nach Umfang deutlich darüber liegen. Nach dem Erstgespräch erstellen wir ein transparentes Angebot mit festem Budgetrahmen.',
          en: 'Costs depend on the feature scope, complexity, and integration requirements. A typical project for a mid-sized company starts at €15,000 and can be significantly higher depending on scope. After an initial consultation, we provide a transparent proposal with a fixed budget framework.',
        },
      },
      {
        question: {
          de: 'Wie lange dauert ein typisches Projekt?',
          en: 'How long does a typical project take?',
        },
        answer: {
          de: 'Die meisten Projekte liegen zwischen 2 und 6 Monaten von der Anforderungsanalyse bis zum Go-Live. Ein MVP mit den wichtigsten Kernfunktionen kann oft bereits nach 6 bis 8 Wochen live gehen, danach wird iterativ weiterentwickelt.',
          en: 'Most projects take between 2 and 6 months from requirements analysis to go-live. An MVP with core functionality can often go live after just 6 to 8 weeks, followed by iterative development.',
        },
      },
      {
        question: {
          de: 'Können Sie bestehende Systeme integrieren?',
          en: 'Can you integrate with existing systems?',
        },
        answer: {
          de: 'Ja, Integration ist einer unserer Schwerpunkte. Wir haben Erfahrung mit ERP-Systemen, Praxissoftware, SAP, CRM-Systemen und proprietären Datenbanken. Wenn eine API vorhanden ist, nutzen wir sie — wenn nicht, entwickeln wir Adapter.',
          en: 'Yes, integration is one of our core strengths. We have experience with ERP systems, practice management software, SAP, CRM systems, and proprietary databases. If an API exists, we use it — if not, we build adapters.',
        },
      },
      {
        question: {
          de: 'Wer betreut die Software nach dem Go-Live?',
          en: 'Who maintains the software after go-live?',
        },
        answer: {
          de: 'Wir bieten Wartungsverträge mit garantierten Reaktionszeiten, regelmäßigen Updates und proaktivem Monitoring. Alternativ übergeben wir das Projekt vollständig an Ihr internes Team — mit umfassender Dokumentation und Wissenstransfer.',
          en: 'We offer maintenance contracts with guaranteed response times, regular updates, and proactive monitoring. Alternatively, we hand over the project completely to your internal team — with comprehensive documentation and knowledge transfer.',
        },
      },
      {
        question: {
          de: 'Arbeiten Sie nur mit Unternehmen aus der Region?',
          en: 'Do you only work with companies in the region?',
        },
        answer: {
          de: 'Unser Büro ist in Burg, Sachsen-Anhalt, und wir schätzen die persönliche Zusammenarbeit mit regionalen Kunden. Gleichzeitig arbeiten wir problemlos remote mit Kunden in ganz Deutschland und darüber hinaus. Videokonferenzen, geteilte Projektboards und regelmäßige Abstimmungen machen die Distanz unsichtbar.',
          en: 'Our office is in Burg, Sachsen-Anhalt, and we value the personal collaboration with regional clients. At the same time, we work seamlessly with clients across Germany and beyond. Video conferences, shared project boards, and regular check-ins make the distance invisible.',
        },
      },
    ],
    relatedCaseStudySlugs: ['logistics-portal', 'dentist-management-system', 'utility-customer-app'],
  },
  {
    slug: 'web-application-development',
    title: {
      de: 'Web-Applikationen',
      en: 'Web Application Development',
    },
    subtitle: {
      de: 'Moderne Web-Apps mit React und Next.js — schnell, skalierbar und benutzerfreundlich',
      en: 'Modern web apps built with React and Next.js — fast, scalable, and user-friendly',
    },
    metaDescription: {
      de: 'Web-Applikationen mit React und Next.js aus Burg. Performante, skalierbare Web-Apps mit modernem UI/UX für Ihr Unternehmen.',
      en: 'Web application development with React and Next.js from Burg. Performant, scalable web apps with modern UI/UX for your business.',
    },
    overview: {
      de: 'Eine Web-App ist mehr als eine Website mit Login. Es ist eine vollwertige Anwendung, die im Browser läuft, aber die Leistungsfähigkeit und Benutzerfreundlichkeit einer Desktop-Software bietet. Für Ihre Kunden, Mitarbeiter oder Partner wird sie zum täglichen Werkzeug — und damit zum Gesicht Ihres Unternehmens im digitalen Raum.\n\nWir entwickeln Web-Applikationen mit React und Next.js — dem Technologie-Stack, der von Unternehmen wie Netflix, Airbnb und Notion eingesetzt wird. Server-Side Rendering sorgt für schnelle Ladezeiten und SEO-Vorteile, React für eine reaktive und flüssige Benutzeroberfläche. TypeScript garantiert Typsicherheit und reduziert Fehler bereits während der Entwicklung.\n\nJede Web-App, die wir entwickeln, ist responsive — sie funktioniert auf Desktop, Tablet und Smartphone gleichermaßen. Performance ist keine Nebensache: Wir optimieren Ladezeiten, Bundle-Größen und Rendering-Strategien, damit Ihre Nutzer nicht warten müssen. Lighthouse-Scores über 90 sind unser Standard.\n\nOb Kundenportal, internes Dashboard, SaaS-Produkt oder öffentliche Plattform: Wir liefern Web-Apps, die technisch exzellent sind und sich gleichzeitig intuitiv bedienen lassen. Kein Nutzer sollte eine Anleitung brauchen.',
      en: 'A web app is more than a website with a login. It is a full-fledged application that runs in the browser but offers the performance and usability of desktop software. For your customers, employees, or partners, it becomes a daily tool — and thereby the face of your business in the digital space.\n\nWe build web applications with React and Next.js — the technology stack used by companies like Netflix, Airbnb, and Notion. Server-side rendering ensures fast load times and SEO benefits, while React delivers a reactive and fluid user interface. TypeScript guarantees type safety and catches errors during development.\n\nEvery web app we build is responsive — it works equally well on desktop, tablet, and smartphone. Performance is not an afterthought: we optimize load times, bundle sizes, and rendering strategies so your users never have to wait. Lighthouse scores above 90 are our standard.\n\nWhether customer portal, internal dashboard, SaaS product, or public platform: we deliver web apps that are technically excellent and intuitively usable at the same time. No user should need a manual.',
    },
    process: [
      {
        step: { de: 'Discovery & Konzept', en: 'Discovery & Concept' },
        description: {
          de: 'Wir klären Zielgruppe, Kernfunktionen und technische Rahmenbedingungen. User Stories, Wireframes und ein technisches Konzept bilden die Grundlage für die Entwicklung.',
          en: 'We clarify the target audience, core features, and technical constraints. User stories, wireframes, and a technical concept form the foundation for development.',
        },
      },
      {
        step: { de: 'UI/UX Design', en: 'UI/UX Design' },
        description: {
          de: 'Auf Basis der Wireframes entwickeln wir ein vollständiges Interface-Design. Interaktive Prototypen in Figma lassen Sie die App erleben, bevor die Entwicklung beginnt. Nutzertests validieren das Konzept frühzeitig.',
          en: 'Based on the wireframes, we develop a complete interface design. Interactive Figma prototypes let you experience the app before development starts. User testing validates the concept early.',
        },
      },
      {
        step: { de: 'Frontend-Entwicklung', en: 'Frontend Development' },
        description: {
          de: 'Wir entwickeln die Benutzeroberfläche komponentenbasiert mit React und Next.js. Tailwind CSS sorgt für konsistentes Design, und jede Komponente wird isoliert getestet, bevor sie ins Gesamtsystem integriert wird.',
          en: 'We build the user interface component by component with React and Next.js. Tailwind CSS ensures consistent design, and every component is tested in isolation before integration into the overall system.',
        },
      },
      {
        step: { de: 'Backend & API', en: 'Backend & API' },
        description: {
          de: 'Das Backend stellt APIs bereit, verwaltet Authentifizierung und verbindet sich mit Datenbanken und Drittanbieter-Services. RESTful oder GraphQL — wir wählen die Architektur, die zu Ihrem Anwendungsfall passt.',
          en: 'The backend provides APIs, manages authentication, and connects to databases and third-party services. RESTful or GraphQL — we choose the architecture that fits your use case.',
        },
      },
      {
        step: { de: 'Testing & Optimierung', en: 'Testing & Optimization' },
        description: {
          de: 'End-to-End-Tests, Performance-Audits und Accessibility-Checks stellen sicher, dass die App unter realen Bedingungen einwandfrei funktioniert. Wir optimieren, bis jede Interaktion schnell und zuverlässig ist.',
          en: 'End-to-end tests, performance audits, and accessibility checks ensure the app works flawlessly under real-world conditions. We optimize until every interaction is fast and reliable.',
        },
      },
      {
        step: { de: 'Launch & Skalierung', en: 'Launch & Scaling' },
        description: {
          de: 'Deployment auf Vercel oder AWS mit automatischen Previews für jede Änderung. Nach dem Launch überwachen wir die App und skalieren die Infrastruktur bei Bedarf — ob 100 oder 100.000 Nutzer.',
          en: 'Deployment on Vercel or AWS with automatic previews for every change. After launch, we monitor the app and scale the infrastructure as needed — whether 100 or 100,000 users.',
        },
      },
    ],
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel', 'PostgreSQL'],
    industries: {
      de: [
        'Logistik & Transport',
        'Gesundheitswesen',
        'Bildung & E-Learning',
        'Finanzdienstleistungen',
        'SaaS & Technologie',
        'Öffentliche Verwaltung',
        'Immobilien',
        'Medien & Verlage',
      ],
      en: [
        'Logistics & Transport',
        'Healthcare',
        'Education & E-Learning',
        'Financial Services',
        'SaaS & Technology',
        'Public Administration',
        'Real Estate',
        'Media & Publishing',
      ],
    },
    useCases: [
      {
        title: {
          de: 'SaaS-Produkte & Plattformen',
          en: 'SaaS Products & Platforms',
        },
        description: {
          de: 'Entwicklung von Multi-Tenant-Anwendungen mit Abonnementverwaltung, Benutzerverwaltung und skalierbarer Architektur — von der Idee bis zum zahlenden Kunden.',
          en: 'Development of multi-tenant applications with subscription management, user administration, and scalable architecture — from idea to paying customer.',
        },
      },
      {
        title: {
          de: 'Business Dashboards & Reporting',
          en: 'Business Dashboards & Reporting',
        },
        description: {
          de: 'Interaktive Dashboards, die Daten aus verschiedenen Quellen in Echtzeit visualisieren. Filtern, exportieren und analysieren Sie Ihre Geschäftskennzahlen an einem zentralen Ort.',
          en: 'Interactive dashboards that visualize data from multiple sources in real time. Filter, export, and analyze your business metrics in a single place.',
        },
      },
      {
        title: {
          de: 'Kundenportale mit Self-Service',
          en: 'Customer Portals with Self-Service',
        },
        description: {
          de: 'Portale, über die Ihre Kunden Bestellungen aufgeben, den Status verfolgen, Dokumente herunterladen und mit Ihrem Team kommunizieren können — ohne Anruf oder E-Mail.',
          en: 'Portals where your customers can place orders, track status, download documents, and communicate with your team — without a phone call or email.',
        },
      },
    ],
    faq: [
      {
        question: {
          de: 'Was ist der Unterschied zwischen einer Website und einer Web-App?',
          en: 'What is the difference between a website and a web app?',
        },
        answer: {
          de: 'Eine Website informiert — eine Web-App arbeitet. Web-Apps haben Benutzerkonten, verarbeiten Daten, reagieren auf Eingaben in Echtzeit und ersetzen häufig Desktop-Software oder manuelle Prozesse. Denken Sie an den Unterschied zwischen einer Speisekarte (Website) und einem Online-Bestellsystem (Web-App).',
          en: 'A website informs — a web app works. Web apps have user accounts, process data, react to input in real time, and often replace desktop software or manual processes. Think of the difference between a menu (website) and an online ordering system (web app).',
        },
      },
      {
        question: {
          de: 'Warum React und Next.js?',
          en: 'Why React and Next.js?',
        },
        answer: {
          de: 'React ist die meistgenutzte Frontend-Bibliothek weltweit mit einem riesigen Ökosystem und einer aktiven Community. Next.js ergänzt React um Server-Side Rendering, optimiertes Routing und eingebaute Performance-Optimierungen. Zusammen ermöglichen sie schnelle Entwicklung, exzellente Performance und langfristige Wartbarkeit.',
          en: 'React is the most widely used frontend library globally, with a vast ecosystem and active community. Next.js adds server-side rendering, optimized routing, and built-in performance optimizations to React. Together, they enable rapid development, excellent performance, and long-term maintainability.',
        },
      },
      {
        question: {
          de: 'Kann die Web-App auch offline funktionieren?',
          en: 'Can the web app work offline?',
        },
        answer: {
          de: 'Ja, mit Progressive Web App (PWA) Technologie können wir Offline-Funktionalität umsetzen. Daten werden lokal zwischengespeichert und bei Netzwerkverfügbarkeit synchronisiert. Das ist besonders relevant für Außendienstmitarbeiter oder Anwendungen in Bereichen mit schlechter Internetverbindung.',
          en: 'Yes, with Progressive Web App (PWA) technology we can implement offline functionality. Data is cached locally and synchronized when a network connection becomes available. This is particularly relevant for field workers or applications in areas with poor internet connectivity.',
        },
      },
      {
        question: {
          de: 'Wie stellen Sie die Sicherheit der Web-App sicher?',
          en: 'How do you ensure the security of the web app?',
        },
        answer: {
          de: 'Sicherheit beginnt bei der Architektur: Authentifizierung mit OAuth 2.0 oder JWT, rollenbasierte Zugriffskontrolle, verschlüsselte Datenübertragung und regelmäßige Dependency-Audits. Wir folgen den OWASP-Richtlinien und führen Penetrationstests durch, bevor eine App live geht.',
          en: 'Security starts at the architecture level: authentication with OAuth 2.0 or JWT, role-based access control, encrypted data transmission, and regular dependency audits. We follow OWASP guidelines and conduct penetration testing before any app goes live.',
        },
      },
    ],
    relatedCaseStudySlugs: ['logistics-portal', 'dentist-management-system'],
  },
  {
    slug: 'mobile-app-development',
    title: {
      de: 'Mobile App Entwicklung',
      en: 'Mobile App Development',
    },
    subtitle: {
      de: 'Cross-Platform-Apps mit React Native — eine Codebasis für iOS und Android',
      en: 'Cross-platform apps with React Native — one codebase for iOS and Android',
    },
    metaDescription: {
      de: 'Mobile App Entwicklung mit React Native aus Burg. Cross-Platform-Apps für iOS und Android mit nativer Performance und modernem Design.',
      en: 'Mobile app development with React Native from Burg. Cross-platform apps for iOS and Android with native performance and modern design.',
    },
    overview: {
      de: 'Ihre Kunden tragen das Smartphone den ganzen Tag in der Tasche. Eine mobile App bringt Ihr Unternehmen dorthin, wo Ihre Kunden sind — jederzeit erreichbar, immer nur einen Fingertipp entfernt. Ob Kunden-App, internes Werkzeug oder Companion-App zu einer bestehenden Plattform: Mobile Apps schaffen Nähe und Bindung.\n\nWir entwickeln Cross-Platform-Apps mit React Native, dem Framework von Meta (Facebook). Eine einzige Codebasis läuft sowohl auf iOS als auch auf Android — mit nativer Performance, nativen Animationen und Zugriff auf alle Gerätefunktionen wie Kamera, GPS, Push-Benachrichtigungen und biometrische Authentifizierung.\n\nDer Vorteil gegenüber separater iOS- und Android-Entwicklung ist enorm: Rund 70% weniger Entwicklungsaufwand, einheitliches Verhalten auf beiden Plattformen und deutlich schnellere Updates. Änderungen werden einmal entwickelt und gleichzeitig auf beiden Plattformen ausgerollt.\n\nVon der Konzeption über das UI-Design bis zur Veröffentlichung im App Store und Google Play Store begleiten wir den gesamten Prozess. Inklusive App Store Optimization, damit Ihre App nicht nur gut funktioniert, sondern auch gefunden wird.',
      en: 'Your customers carry their smartphone all day. A mobile app puts your business where your customers are — always reachable, always just one tap away. Whether customer app, internal tool, or companion app to an existing platform: mobile apps create proximity and loyalty.\n\nWe develop cross-platform apps with React Native, the framework by Meta (Facebook). A single codebase runs on both iOS and Android — with native performance, native animations, and access to all device features like camera, GPS, push notifications, and biometric authentication.\n\nThe advantage over separate iOS and Android development is substantial: approximately 70% less development effort, consistent behavior across both platforms, and significantly faster updates. Changes are developed once and rolled out on both platforms simultaneously.\n\nFrom concept through UI design to publication in the App Store and Google Play Store, we manage the entire process. Including App Store Optimization, so your app not only works well but also gets found.',
    },
    process: [
      {
        step: { de: 'Strategie & Konzept', en: 'Strategy & Concept' },
        description: {
          de: 'Welches Problem löst die App? Für wen? Wie oft wird sie genutzt? Wir definieren gemeinsam die Kernfunktionen und erstellen ein App-Konzept, das sowohl Nutzerbedürfnisse als auch Geschäftsziele adressiert.',
          en: 'What problem does the app solve? For whom? How often will it be used? Together, we define the core features and create an app concept that addresses both user needs and business goals.',
        },
      },
      {
        step: { de: 'UI/UX Design', en: 'UI/UX Design' },
        description: {
          de: 'Mobile Apps brauchen ein anderes Design als Web-Apps. Wir gestalten Interfaces, die für Daumen optimiert sind, den Plattform-Konventionen von iOS und Android folgen und durch Geschwindigkeit und Klarheit überzeugen.',
          en: 'Mobile apps need a different design than web apps. We create interfaces optimized for thumbs, following the platform conventions of iOS and Android, and designed to impress through speed and clarity.',
        },
      },
      {
        step: { de: 'App-Entwicklung', en: 'App Development' },
        description: {
          de: 'Wir entwickeln die App mit React Native und Expo, ergänzt durch native Module für plattformspezifische Funktionen. TypeScript sorgt für Typsicherheit, und eine komponentenbasierte Architektur ermöglicht schnelle Iterationen.',
          en: 'We build the app with React Native and Expo, supplemented by native modules for platform-specific features. TypeScript provides type safety, and a component-based architecture enables rapid iterations.',
        },
      },
      {
        step: { de: 'Backend & API-Integration', en: 'Backend & API Integration' },
        description: {
          de: 'Das App-Backend stellt APIs bereit, verwaltet Nutzerkonten und synchronisiert Daten. Firebase liefert Push-Benachrichtigungen und Echtzeit-Funktionen. Die API-Schicht ist so gebaut, dass sie sowohl die App als auch eine zukünftige Web-Version bedienen kann.',
          en: 'The app backend provides APIs, manages user accounts, and synchronizes data. Firebase delivers push notifications and real-time features. The API layer is built to serve both the app and a future web version.',
        },
      },
      {
        step: { de: 'Testing auf echten Geräten', en: 'Testing on Real Devices' },
        description: {
          de: 'Wir testen auf einer breiten Palette echter iOS- und Android-Geräte — nicht nur im Simulator. Performance-Tests, Akku-Verbrauch, verschiedene Bildschirmgrößen und Betriebssystemversionen werden systematisch geprüft.',
          en: 'We test on a wide range of real iOS and Android devices — not just simulators. Performance, battery consumption, various screen sizes, and operating system versions are systematically verified.',
        },
      },
      {
        step: { de: 'App Store Release', en: 'App Store Release' },
        description: {
          de: 'Wir übernehmen die Einreichung bei Apple und Google, inklusive Screenshots, Beschreibungstexte, Keyword-Optimierung und Einhaltung der Store-Richtlinien. Nach der Veröffentlichung managen wir Updates und reagieren auf Nutzerfeedback.',
          en: 'We handle submission to Apple and Google, including screenshots, descriptions, keyword optimization, and compliance with store guidelines. After publication, we manage updates and respond to user feedback.',
        },
      },
    ],
    technologies: ['React Native', 'Expo', 'TypeScript', 'Firebase', 'AWS'],
    industries: {
      de: [
        'Energie & Versorgung',
        'Gesundheitswesen',
        'Logistik & Transport',
        'Gastronomie & Hotellerie',
        'Immobilien',
        'Sport & Fitness',
        'Einzelhandel',
      ],
      en: [
        'Energy & Utilities',
        'Healthcare',
        'Logistics & Transport',
        'Hospitality & Restaurants',
        'Real Estate',
        'Sports & Fitness',
        'Retail',
      ],
    },
    useCases: [
      {
        title: {
          de: 'Kunden-Apps für Dienstleister',
          en: 'Customer Apps for Service Providers',
        },
        description: {
          de: 'Apps, über die Ihre Kunden Termine buchen, den Servicestatus verfolgen, Rechnungen einsehen und direkt mit Ihrem Team kommunizieren. Wie eine digitale Filiale in der Hosentasche.',
          en: 'Apps where your customers book appointments, track service status, view invoices, and communicate directly with your team. Like a digital branch office in their pocket.',
        },
      },
      {
        title: {
          de: 'Außendienst & Datenerfassung',
          en: 'Field Service & Data Collection',
        },
        description: {
          de: 'Mobile Apps für Techniker, Ableser oder Vertriebsmitarbeiter im Außendienst. Offline-fähig, mit GPS-Tracking, Foto-Upload und direkter Synchronisation ins Backendsystem.',
          en: 'Mobile apps for technicians, meter readers, or sales representatives in the field. Offline-capable, with GPS tracking, photo upload, and direct synchronization to the backend system.',
        },
      },
      {
        title: {
          de: 'Companion-Apps zu Web-Plattformen',
          en: 'Companion Apps for Web Platforms',
        },
        description: {
          de: 'Ergänzen Sie Ihre bestehende Web-Plattform um eine native App, die Push-Benachrichtigungen, Offline-Zugriff und Gerätefunktionen nutzt — für Nutzer, die unterwegs auf Ihre Plattform zugreifen.',
          en: 'Complement your existing web platform with a native app that leverages push notifications, offline access, and device features — for users who access your platform on the go.',
        },
      },
    ],
    faq: [
      {
        question: {
          de: 'Warum React Native statt nativer Entwicklung?',
          en: 'Why React Native instead of native development?',
        },
        answer: {
          de: 'React Native liefert native Performance aus einer einzigen Codebasis. Sie sparen rund 70% der Entwicklungskosten gegenüber separater iOS- und Android-Entwicklung, ohne Kompromisse bei der Nutzererfahrung. Apps wie Instagram, Shopify und Discord setzen auf React Native.',
          en: 'React Native delivers native performance from a single codebase. You save approximately 70% of development costs compared to separate iOS and Android development, without compromising user experience. Apps like Instagram, Shopify, and Discord use React Native.',
        },
      },
      {
        question: {
          de: 'Kann die App auf Kamera, GPS und andere Gerätefunktionen zugreifen?',
          en: 'Can the app access camera, GPS, and other device features?',
        },
        answer: {
          de: 'Ja, React Native bietet vollständigen Zugriff auf alle nativen Gerätefunktionen: Kamera, GPS, Beschleunigungssensor, biometrische Authentifizierung, Push-Benachrichtigungen, lokale Speicherung und mehr. Wo nötig, schreiben wir native Module für plattformspezifische Anforderungen.',
          en: 'Yes, React Native provides full access to all native device features: camera, GPS, accelerometer, biometric authentication, push notifications, local storage, and more. Where needed, we write native modules for platform-specific requirements.',
        },
      },
      {
        question: {
          de: 'Wie lange dauert es, bis die App im Store ist?',
          en: 'How long until the app is in the store?',
        },
        answer: {
          de: 'Ein typisches App-Projekt dauert 3 bis 5 Monate bis zur Store-Veröffentlichung. Eine erste Beta-Version zum internen Testen steht oft nach 6 bis 8 Wochen bereit. Der Apple Review-Prozess dauert in der Regel 1 bis 3 Tage, bei Google geht es oft schneller.',
          en: 'A typical app project takes 3 to 5 months to store publication. An initial beta version for internal testing is often ready after 6 to 8 weeks. The Apple review process usually takes 1 to 3 days; Google is often faster.',
        },
      },
      {
        question: {
          de: 'Was passiert nach der Veröffentlichung?',
          en: 'What happens after publication?',
        },
        answer: {
          de: 'Nach dem Launch überwachen wir Crash-Reports, Nutzerverhalten und Performance. Regelmäßige Updates halten die App kompatibel mit neuen OS-Versionen und fügen Features auf Basis von echtem Nutzerfeedback hinzu. Wir empfehlen mindestens ein Update pro Quartal.',
          en: 'After launch, we monitor crash reports, user behavior, and performance. Regular updates keep the app compatible with new OS versions and add features based on real user feedback. We recommend at least one update per quarter.',
        },
      },
    ],
    relatedCaseStudySlugs: ['utility-customer-app'],
  },
  {
    slug: 'business-automation',
    title: {
      de: 'Geschäftsprozess-Automatisierung',
      en: 'Business Process Automation',
    },
    subtitle: {
      de: 'Wiederkehrende Aufgaben automatisieren, Fehler eliminieren, Teams entlasten',
      en: 'Automate recurring tasks, eliminate errors, free up your teams',
    },
    metaDescription: {
      de: 'Geschäftsprozess-Automatisierung aus Burg. Wir automatisieren Workflows, Abrechnungen und Datenflüsse mit Node.js, PostgreSQL und AWS.',
      en: 'Business process automation from Burg. We automate workflows, billing, and data flows with Node.js, PostgreSQL, and AWS.',
    },
    overview: {
      de: 'In jedem Unternehmen gibt es Aufgaben, die regelmäßig Zeit fressen, aber keinen echten Mehrwert schaffen: Daten von einem System ins andere kopieren, Rechnungen manuell erstellen, Berichte zusammenstellen, Erinnerungen verschicken. Jede einzelne dauert nur Minuten — aber in Summe binden sie Mitarbeiter, die ihre Zeit produktiver einsetzen könnten.\n\nGeschäftsprozess-Automatisierung ersetzt diese manuellen Routinen durch zuverlässige, fehlerfreie Software. Keine vergessenen E-Mails, keine Tippfehler in Rechnungen, keine Berichte, die erst Freitagnachmittag fertig werden. Prozesse laufen im Hintergrund, 24 Stunden am Tag, 7 Tage die Woche.\n\nWir analysieren Ihre bestehenden Workflows, identifizieren Automatisierungspotenzial und entwickeln maßgeschneiderte Lösungen mit Node.js, PostgreSQL und AWS. Von einfachen Webhook-Integrationen zwischen zwei Tools bis hin zu komplexen, mehrstufigen Prozessen, die mehrere Systeme orchestrieren — wir finden die richtige Lösung für Ihr Budget.\n\nDer ROI ist in der Regel innerhalb weniger Monate messbar. Unsere Kunden berichten typischerweise von 40 bis 70% Zeitersparnis in den automatisierten Prozessen — Zeit, die Ihr Team in wertschöpfende Arbeit investieren kann.',
      en: 'Every business has tasks that regularly consume time without creating real value: copying data from one system to another, manually creating invoices, compiling reports, sending reminders. Each takes only minutes — but in total, they tie up employees who could use their time more productively.\n\nBusiness process automation replaces these manual routines with reliable, error-free software. No forgotten emails, no typos in invoices, no reports that are not ready until Friday afternoon. Processes run in the background, 24 hours a day, 7 days a week.\n\nWe analyze your existing workflows, identify automation potential, and develop tailored solutions with Node.js, PostgreSQL, and AWS. From simple webhook integrations between two tools to complex, multi-stage processes orchestrating multiple systems — we find the right solution for your budget.\n\nThe ROI is typically measurable within a few months. Our clients typically report 40 to 70% time savings in automated processes — time your team can invest in value-creating work.',
    },
    process: [
      {
        step: { de: 'Prozess-Audit', en: 'Process Audit' },
        description: {
          de: 'Wir dokumentieren Ihre bestehenden Workflows, messen den Zeitaufwand pro Prozessschritt und identifizieren die Aufgaben mit dem höchsten Automatisierungspotenzial. Das Ergebnis ist eine priorisierte Roadmap.',
          en: 'We document your existing workflows, measure the time spent per process step, and identify tasks with the highest automation potential. The result is a prioritized roadmap.',
        },
      },
      {
        step: { de: 'Lösungsdesign', en: 'Solution Design' },
        description: {
          de: 'Für jeden zu automatisierenden Prozess definieren wir Auslöser, Regeln, Ausnahmebehandlung und Zielzustand. Wir entscheiden, welche Systeme angebunden werden müssen und welche Technologie die effizienteste Lösung bietet.',
          en: 'For each process to be automated, we define triggers, rules, exception handling, and target state. We determine which systems need to be connected and which technology offers the most efficient solution.',
        },
      },
      {
        step: { de: 'Entwicklung & Integration', en: 'Development & Integration' },
        description: {
          de: 'Wir entwickeln die Automatisierungen und integrieren sie in Ihre bestehende Systemlandschaft. APIs, Webhooks, Datenbankverbindungen und Dateisystem-Trigger werden so konfiguriert, dass alles nahtlos ineinandergreift.',
          en: 'We develop the automations and integrate them into your existing system landscape. APIs, webhooks, database connections, and file system triggers are configured to work together seamlessly.',
        },
      },
      {
        step: { de: 'Testing & Absicherung', en: 'Testing & Safeguarding' },
        description: {
          de: 'Automatisierte Prozesse müssen besonders zuverlässig sein, weil niemand zusieht. Wir testen jeden Pfad — inklusive Fehlerfälle — und bauen Monitoring und Alerting ein, das sofort Alarm schlägt, wenn etwas nicht planmäßig läuft.',
          en: 'Automated processes must be especially reliable because nobody is watching. We test every path — including error cases — and build in monitoring and alerting that raises alarms immediately when something does not go as planned.',
        },
      },
      {
        step: { de: 'Rollout & Schulung', en: 'Rollout & Training' },
        description: {
          de: 'Wir führen die Automatisierungen schrittweise ein, zunächst parallel zum manuellen Prozess. Ihr Team wird geschult und erhält Dokumentation, damit jeder versteht, was im Hintergrund passiert und wie Ausnahmen behandelt werden.',
          en: 'We roll out automations gradually, initially running in parallel with the manual process. Your team is trained and receives documentation so everyone understands what happens in the background and how exceptions are handled.',
        },
      },
    ],
    technologies: ['Node.js', 'PostgreSQL', 'Docker', 'AWS Lambda', 'Stripe', 'APIs'],
    industries: {
      de: [
        'Logistik & Transport',
        'Energie & Versorgung',
        'Finanzdienstleistungen',
        'Gesundheitswesen',
        'Handwerk & Produktion',
        'Immobilienverwaltung',
        'E-Commerce',
        'Öffentliche Verwaltung',
      ],
      en: [
        'Logistics & Transport',
        'Energy & Utilities',
        'Financial Services',
        'Healthcare',
        'Manufacturing & Trades',
        'Property Management',
        'E-Commerce',
        'Public Administration',
      ],
    },
    useCases: [
      {
        title: {
          de: 'Automatisierte Abrechnung & Rechnungsstellung',
          en: 'Automated Billing & Invoicing',
        },
        description: {
          de: 'Rechnungen werden automatisch auf Basis abgeschlossener Aufträge, Lieferscheine oder Zeiterfassungen erstellt, versendet und in der Buchhaltung verbucht. Stripe-Integration für automatische Zahlungsabwicklung und Mahnwesen.',
          en: 'Invoices are automatically generated based on completed orders, delivery notes, or time tracking, sent out, and posted in accounting. Stripe integration for automatic payment processing and dunning.',
        },
      },
      {
        title: {
          de: 'Daten-Synchronisation zwischen Systemen',
          en: 'Data Synchronization Between Systems',
        },
        description: {
          de: 'Kundendaten, Bestellungen oder Lagerbestände werden in Echtzeit zwischen CRM, ERP, Shop-System und Buchhaltung synchronisiert. Keine doppelte Datenpflege, keine Inkonsistenzen.',
          en: 'Customer data, orders, or inventory levels are synchronized in real time between CRM, ERP, shop systems, and accounting. No duplicate data entry, no inconsistencies.',
        },
      },
      {
        title: {
          de: 'Workflow-Automatisierung & Benachrichtigungen',
          en: 'Workflow Automation & Notifications',
        },
        description: {
          de: 'Genehmigungs-Workflows, Eskalationsketten und automatische Benachrichtigungen per E-Mail, SMS oder Slack. Aufgaben werden dem richtigen Mitarbeiter zugewiesen, Fristen überwacht und Engpässe sichtbar gemacht.',
          en: 'Approval workflows, escalation chains, and automatic notifications via email, SMS, or Slack. Tasks are assigned to the right employee, deadlines monitored, and bottlenecks made visible.',
        },
      },
      {
        title: {
          de: 'Berichterstellung & Reporting',
          en: 'Report Generation & Reporting',
        },
        description: {
          de: 'Tages-, Wochen- oder Monatsberichte werden automatisch aus verschiedenen Datenquellen zusammengestellt und als PDF oder Dashboard bereitgestellt. Keine manuellen Exporte und Copy-Paste-Orgien mehr.',
          en: 'Daily, weekly, or monthly reports are automatically compiled from multiple data sources and delivered as PDF or dashboard. No more manual exports and copy-paste marathons.',
        },
      },
    ],
    faq: [
      {
        question: {
          de: 'Welche Prozesse eignen sich für Automatisierung?',
          en: 'Which processes are suitable for automation?',
        },
        answer: {
          de: 'Grundsätzlich jeder Prozess, der regelbasiert, wiederkehrend und zeitaufwändig ist. Die besten Kandidaten sind Prozesse, die heute manuell zwischen verschiedenen Systemen ablaufen: Daten übertragen, Dokumente erstellen, Statusänderungen weiterleiten, Berichte zusammenstellen.',
          en: 'Essentially any process that is rule-based, recurring, and time-consuming. The best candidates are processes that currently run manually between different systems: transferring data, creating documents, forwarding status changes, compiling reports.',
        },
      },
      {
        question: {
          de: 'Müssen wir unsere bestehenden Tools ersetzen?',
          en: 'Do we need to replace our existing tools?',
        },
        answer: {
          de: 'Nein. Automatisierung bedeutet in den meisten Fällen, bestehende Tools intelligent zu verbinden, nicht zu ersetzen. Wir integrieren uns über APIs und Webhooks in Ihre vorhandene Systemlandschaft und schließen die Lücken zwischen den Anwendungen, die heute manuell überbrückt werden.',
          en: 'No. In most cases, automation means intelligently connecting existing tools, not replacing them. We integrate via APIs and webhooks into your existing system landscape and close the gaps between applications that are currently bridged manually.',
        },
      },
      {
        question: {
          de: 'Was passiert, wenn ein automatisierter Prozess fehlschlägt?',
          en: 'What happens when an automated process fails?',
        },
        answer: {
          de: 'Jede Automatisierung wird mit robusten Fehlerbehandlungs- und Retry-Mechanismen ausgestattet. Bei kritischen Fehlern erhalten die zuständigen Mitarbeiter sofort eine Benachrichtigung. Ein Monitoring-Dashboard zeigt den Status aller Automatisierungen in Echtzeit.',
          en: 'Every automation is equipped with robust error handling and retry mechanisms. For critical failures, responsible team members receive immediate notification. A monitoring dashboard shows the status of all automations in real time.',
        },
      },
      {
        question: {
          de: 'Wie schnell amortisiert sich die Investition?',
          en: 'How quickly does the investment pay off?',
        },
        answer: {
          de: 'In der Regel innerhalb von 3 bis 9 Monaten, abhängig vom Prozessvolumen und den eingesparten Personalstunden. Wir berechnen vor Projektbeginn den erwarteten ROI auf Basis Ihrer konkreten Zahlen, damit Sie eine fundierte Entscheidung treffen können.',
          en: 'Typically within 3 to 9 months, depending on process volume and saved personnel hours. We calculate the expected ROI before project start based on your specific numbers, so you can make an informed decision.',
        },
      },
      {
        question: {
          de: 'Können Sie auch komplexe, mehrstufige Prozesse automatisieren?',
          en: 'Can you also automate complex, multi-stage processes?',
        },
        answer: {
          de: 'Ja, das ist sogar eine unserer Stärken. Mit AWS Lambda und Event-driven Architecture orchestrieren wir Prozesse, die mehrere Systeme, Bedingungen und Zeitpunkte umfassen. Zum Beispiel eine Auftragsabwicklung, die vom Bestelleingang über Lagerverfügbarkeit und Versandbenachrichtigung bis zur Rechnungsstellung vollautomatisch abläuft.',
          en: 'Yes, that is actually one of our strengths. With AWS Lambda and event-driven architecture, we orchestrate processes spanning multiple systems, conditions, and timepoints. For example, order processing that runs fully automated from order receipt through inventory checks and shipping notifications to invoicing.',
        },
      },
    ],
    relatedCaseStudySlugs: ['logistics-portal', 'utility-customer-app'],
  },
];
