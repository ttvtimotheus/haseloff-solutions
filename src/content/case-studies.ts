import { CaseStudy } from './types';

export const caseStudies: CaseStudy[] = [
  {
    slug: 'logistics-portal',
    title: {
      de: 'Digitales Kundenportal für Heimbach Logistics',
      en: 'Digital Customer Portal for Heimbach Logistics',
    },
    subtitle: {
      de: 'Wie ein mittelständisches Logistikunternehmen seine Kundenprozesse vollständig digitalisierte',
      en: 'How a mid-sized logistics company fully digitized its customer-facing processes',
    },
    metaDescription: {
      de: 'Kundenportal mit Sendungsverfolgung, automatisierter Abrechnung und Routenoptimierung für Heimbach Logistics. 40% weniger manuelle Prozesse.',
      en: 'Customer portal with shipment tracking, automated billing, and route optimization for Heimbach Logistics. 40% fewer manual processes.',
    },
    client: 'Heimbach Logistics',
    industry: {
      de: 'Logistik & Transport',
      en: 'Logistics & Transport',
    },
    duration: {
      de: '4 Monate',
      en: '4 months',
    },
    stack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Stripe', 'Vercel'],
    problem: {
      de: 'Heimbach Logistics betrieb als wachsendes Speditionsunternehmen mit über 200 aktiven Geschäftskunden sämtliche Kundenkommunikation per Telefon, E-Mail und Fax. Sendungsstatus-Anfragen machten fast 60% des gesamten Anrufvolumens im Kundenservice aus — Informationen, die im internen System längst digital vorlagen, aber für Kunden nicht zugänglich waren.\n\nDie Rechnungsstellung erfolgte manuell über Excel-Tabellen und wurde monatlich per Post versandt. Fehlerhafte Rechnungen und verspätete Zustellungen führten regelmäßig zu Zahlungsverzögerungen von durchschnittlich 23 Tagen. Gleichzeitig fehlte den Disponenten ein effizientes Werkzeug zur Routenplanung — Touren wurden auf Basis von Erfahrungswerten zusammengestellt, ohne systematische Optimierung.\n\nDas Unternehmen verlor zunehmend Aufträge an digital besser aufgestellte Wettbewerber. Großkunden forderten Self-Service-Optionen und Echtzeit-Transparenz über ihre Sendungen. Ohne ein digitales Kundenportal drohte Heimbach, seine Marktposition im regionalen Transportgeschäft dauerhaft zu verlieren.\n\nDie Geschäftsführung erkannte: Eine schrittweise Digitalisierung reicht nicht. Es braucht eine durchgängige Plattform, die Kundenerlebnis, Abrechnung und operative Planung in einem System vereint.',
      en: 'Heimbach Logistics, a growing freight company with over 200 active business clients, handled all customer communication via phone, email, and fax. Shipment status inquiries accounted for nearly 60% of total customer service call volume — information that already existed digitally in their internal systems but remained inaccessible to customers.\n\nInvoicing was done manually through Excel spreadsheets and sent monthly by postal mail. Incorrect invoices and delayed deliveries regularly led to payment delays averaging 23 days. Dispatchers also lacked an efficient route planning tool — tours were assembled based on experience rather than systematic optimization.\n\nThe company was increasingly losing contracts to digitally better-positioned competitors. Key accounts demanded self-service options and real-time visibility into their shipments. Without a digital customer portal, Heimbach risked permanently losing its market position in regional transport.\n\nManagement realized that incremental digitization would not suffice. They needed an end-to-end platform combining customer experience, billing, and operational planning in a single system.',
    },
    challenge: {
      de: 'Die größte Herausforderung lag in der Integration mit dem bestehenden Warenwirtschaftssystem von Heimbach. Das ERP-System war über 15 Jahre alt, verfügte über keine dokumentierte API und speicherte Daten in proprietären Formaten. Jede Echtzeit-Synchronisation musste über einen selbst entwickelten Adapter laufen, der sowohl Datenformate konvertiert als auch Konflikte zwischen alten und neuen Datensätzen auflöst.\n\nGleichzeitig musste das Portal unter hoher Last zuverlässig funktionieren. Während der Stoßzeiten zwischen 8 und 10 Uhr morgens griffen regelmäßig über 150 Kunden gleichzeitig auf Sendungsdaten zu. Die Architektur musste sowohl performant als auch ausfallsicher sein — ein Systemausfall hätte direkte Auswirkungen auf den Versandbetrieb gehabt.\n\nZusätzlich galt es, die Stripe-Integration für die automatisierte Abrechnung an deutsche Rechnungslegungsstandards und GoBD-Anforderungen anzupassen, einschließlich revisionssicherer Archivierung und korrekter Umsatzsteuerbehandlung.',
      en: 'The biggest challenge was integration with Heimbach\'s existing ERP system. The software was over 15 years old, had no documented API, and stored data in proprietary formats. Every real-time synchronization had to run through a custom-built adapter that both converted data formats and resolved conflicts between legacy and new records.\n\nThe portal also had to perform reliably under heavy load. During peak hours between 8 and 10 AM, over 150 clients regularly accessed shipment data simultaneously. The architecture needed to be both performant and fault-tolerant — a system outage would have directly impacted shipping operations.\n\nAdditionally, the Stripe integration for automated billing had to comply with German invoicing standards and GoBD requirements, including audit-proof archiving and correct VAT handling.',
    },
    solution: {
      de: 'Wir entwickelten ein vollständiges Kundenportal auf Basis von Next.js und TypeScript, gehostet auf Vercel mit einer PostgreSQL-Datenbank für alle transaktionalen Daten. Das Portal bietet Kunden Echtzeit-Sendungsverfolgung mit Live-Statusupdates, die über WebSocket-Verbindungen direkt aus dem ERP-Adapter gespeist werden.\n\nFür die Abrechnung implementierten wir eine Stripe-basierte Lösung, die Rechnungen automatisch auf Basis abgeschlossener Aufträge generiert. Jede Rechnung wird GoBD-konform archiviert und kann vom Kunden direkt im Portal eingesehen, heruntergeladen und bezahlt werden. SEPA-Lastschrift und Kreditkartenzahlung stehen als Zahlungsmethoden zur Verfügung.\n\nDas Routing-Modul nutzt einen eigens entwickelten Algorithmus, der historische Auftragsdaten, Verkehrsmuster und Fahrzeugkapazitäten berücksichtigt. Disponenten erhalten optimierte Tourenvorschläge, die sie mit einem Klick übernehmen oder manuell anpassen können. Im Testbetrieb reduzierte das Modul die durchschnittliche Fahrzeit pro Tour um 18%.\n\nDas gesamte System wurde mit rollenbasierter Zugriffskontrolle ausgestattet: Endkunden sehen ihre Sendungen und Rechnungen, Disponenten verwalten Touren, und die Geschäftsführung hat Zugriff auf ein Dashboard mit Echtzeit-KPIs zu Umsatz, Auslastung und Kundenzufriedenheit.',
      en: 'We built a complete customer portal using Next.js and TypeScript, hosted on Vercel with a PostgreSQL database for all transactional data. The portal provides real-time shipment tracking with live status updates fed through WebSocket connections directly from the ERP adapter.\n\nFor billing, we implemented a Stripe-based solution that automatically generates invoices based on completed orders. Every invoice is archived in compliance with GoBD standards and can be viewed, downloaded, and paid directly within the portal. SEPA direct debit and credit card payments are available as payment methods.\n\nThe routing module uses a custom-built algorithm that factors in historical order data, traffic patterns, and vehicle capacities. Dispatchers receive optimized route suggestions that they can accept with one click or adjust manually. During testing, the module reduced average driving time per route by 18%.\n\nThe entire system features role-based access control: end customers see their shipments and invoices, dispatchers manage routes, and management has access to a dashboard with real-time KPIs on revenue, utilization, and customer satisfaction.',
    },
    results: {
      de: [
        '40% weniger manuelle Prozesse in der Kundenkommunikation und Auftragsabwicklung',
        '3x schnellere Rechnungsstellung — von durchschnittlich 12 Tagen auf unter 4 Tage',
        '95% Kundenzufriedenheit im Portal-Feedback nach den ersten 6 Monaten',
        '60% weniger Support-Tickets durch Self-Service-Sendungsverfolgung und Online-Rechnungen',
      ],
      en: [
        '40% fewer manual processes in customer communication and order processing',
        '3x faster invoicing — from an average of 12 days down to under 4 days',
        '95% customer satisfaction in portal feedback after the first 6 months',
        '60% reduction in support tickets through self-service tracking and online invoices',
      ],
    },
    relatedBlogSlugs: [],
  },
  {
    slug: 'dentist-management-system',
    title: {
      de: 'Patientenportal für Zahnarztpraxis Dr. Hoffmann',
      en: 'Patient Portal for Dental Practice Dr. Hoffmann',
    },
    subtitle: {
      de: 'Online-Terminbuchung, digitale Patientenakte und automatisches Recall-System für eine moderne Zahnarztpraxis',
      en: 'Online appointment booking, digital patient records, and automated recall system for a modern dental practice',
    },
    metaDescription: {
      de: 'Patientenportal mit Online-Buchung, Behandlungshistorie und Recall-System für Zahnarztpraxis Dr. Hoffmann. 70% weniger Telefonbuchungen.',
      en: 'Patient portal with online booking, treatment history, and recall system for dental practice Dr. Hoffmann. 70% fewer phone bookings.',
    },
    client: 'Zahnarztpraxis Dr. Hoffmann',
    industry: {
      de: 'Gesundheitswesen',
      en: 'Healthcare',
    },
    duration: {
      de: '3 Monate',
      en: '3 months',
    },
    stack: ['React', 'Node.js', 'PostgreSQL', 'Docker', 'AWS'],
    problem: {
      de: 'Die Zahnarztpraxis Dr. Hoffmann in Burg betreut rund 3.500 aktive Patienten und beschäftigt drei Zahnärzte sowie vier Mitarbeiterinnen an der Rezeption. Der gesamte Praxisbetrieb — von der Terminvergabe über die Patientenkommunikation bis zur Recall-Verwaltung — lief über Telefon und handschriftliche Kalender. In Stoßzeiten war die Telefonleitung bis zu 40 Minuten am Stück besetzt.\n\nPatienten mussten für jeden Termin anrufen, oft mehrfach, weil die Leitung belegt war. Neue Patienten brachen den Versuch häufig ab und wechselten zu Praxen mit Online-Buchung. Die Praxis schätzte, dass monatlich 30 bis 40 potenzielle Neupatienten verloren gingen.\n\nDas Recall-System — die Erinnerung an Vorsorgeuntersuchungen und Prophylaxe-Termine — wurde manuell über Karteikarten verwaltet. Regelmäßig fielen Patienten durch das Raster: Über 35% der halbjährlichen Kontrolltermine wurden nicht wahrgenommen, weil keine Erinnerung verschickt wurde.\n\nDr. Hoffmann wollte eine Lösung, die Patienten Autonomie gibt, das Rezeptionsteam entlastet und gleichzeitig nahtlos mit der bestehenden Praxissoftware zusammenarbeitet.',
      en: 'The dental practice Dr. Hoffmann in Burg serves approximately 3,500 active patients and employs three dentists along with four front-desk staff. The entire practice operation — from appointment scheduling to patient communication to recall management — ran via phone and handwritten calendars. During peak times, the phone line was busy for up to 40 minutes straight.\n\nPatients had to call for every appointment, often multiple times because the line was engaged. New patients frequently gave up and switched to practices offering online booking. The practice estimated losing 30 to 40 potential new patients per month.\n\nThe recall system — reminders for preventive checkups and prophylaxis appointments — was managed manually via index cards. Patients regularly slipped through the cracks: over 35% of biannual checkup appointments were missed because no reminder was sent.\n\nDr. Hoffmann wanted a solution that gives patients autonomy, relieves the front-desk team, and integrates seamlessly with the existing practice management software.',
    },
    challenge: {
      de: 'Die zentrale Herausforderung war die Integration mit der bestehenden Praxisverwaltungssoftware. Das System nutzte eine proprietäre Datenbank ohne offene Schnittstelle. Wir mussten einen bidirektionalen Sync entwickeln, der Termine und Patientendaten zuverlässig zwischen beiden Systemen abgleicht, ohne die laufende Praxis zu stören.\n\nDatenschutz war ein weiteres kritisches Thema. Patientendaten unterliegen der DSGVO und dem deutschen Patientendatenschutzgesetz. Jeder Datenzugriff muss protokolliert, jede Übertragung verschlüsselt und jede Speicherung auf deutschen Servern erfolgen. Die Architektur musste von Grund auf Privacy-by-Design umsetzen.\n\nSchließlich musste das System für eine Zielgruppe funktionieren, die von 20 bis 85 Jahre reicht. Die Oberfläche musste intuitiv genug sein, dass auch ältere Patienten ohne technische Erfahrung Termine buchen und ihre Behandlungshistorie einsehen können.',
      en: 'The central challenge was integration with the existing practice management software. The system used a proprietary database with no open interface. We had to develop a bidirectional sync that reliably reconciles appointments and patient data between both systems without disrupting daily operations.\n\nData privacy was another critical concern. Patient data is subject to GDPR and German patient data protection regulations. Every data access must be logged, every transmission encrypted, and all storage must reside on German servers. The architecture had to implement privacy-by-design from the ground up.\n\nFinally, the system had to work for a target audience ranging from age 20 to 85. The interface needed to be intuitive enough that even elderly patients without technical experience could book appointments and review their treatment history.',
    },
    solution: {
      de: 'Wir entwickelten ein React-basiertes Patientenportal mit einem Node.js-Backend, gehostet auf AWS in der Region Frankfurt. Die PostgreSQL-Datenbank speichert alle Patienten- und Termindaten verschlüsselt. Ein Docker-basierter Sync-Service gleicht im 30-Sekunden-Takt Daten mit der Praxissoftware ab.\n\nDas Online-Buchungssystem zeigt Patienten verfügbare Zeitslots in Echtzeit an. Behandlungsarten sind kategorisiert — von der Routinekontrolle bis zur Wurzelbehandlung — und jede Kategorie hat hinterlegte Standarddauern, die der Algorithmus bei der Slot-Berechnung berücksichtigt. Bestätigungen und Erinnerungen werden automatisch per E-Mail und SMS versendet.\n\nDas automatisierte Recall-System analysiert die Behandlungshistorie jedes Patienten und generiert individualisierte Erinnerungen. Prophylaxe-Patienten erhalten nach sechs Monaten eine Erinnerung, Parodontose-Patienten nach drei Monaten. Die Erinnerungen werden in drei Stufen versandt: eine freundliche Erstmeldung, eine Folgeerinnerung nach zwei Wochen und eine dringende Empfehlung nach vier Wochen.\n\nDie Patientenakte zeigt vergangene Behandlungen, anstehende Termine, Röntgenbilder und Kostenvoranschläge in einer übersichtlichen Zeitleiste. Die Oberfläche wurde nach Accessibility-Standards (WCAG 2.1 AA) entwickelt, mit großen Schaltflächen, hohem Kontrast und klarer Typografie.',
      en: 'We built a React-based patient portal with a Node.js backend, hosted on AWS in the Frankfurt region. The PostgreSQL database stores all patient and appointment data in encrypted form. A Docker-based sync service reconciles data with the practice software every 30 seconds.\n\nThe online booking system shows patients available time slots in real time. Treatment types are categorized — from routine checkups to root canal therapy — and each category has default durations that the algorithm factors into slot calculations. Confirmations and reminders are sent automatically via email and SMS.\n\nThe automated recall system analyzes each patient\'s treatment history and generates individualized reminders. Prophylaxis patients receive a reminder after six months, periodontitis patients after three months. Reminders are sent in three stages: a friendly initial notice, a follow-up after two weeks, and an urgent recommendation after four weeks.\n\nThe patient record displays past treatments, upcoming appointments, X-rays, and cost estimates in a clear timeline view. The interface was developed following accessibility standards (WCAG 2.1 AA), with large buttons, high contrast, and clear typography.',
    },
    results: {
      de: [
        '70% weniger telefonische Terminbuchungen — das Rezeptionsteam kann sich auf die Patientenbetreuung vor Ort konzentrieren',
        '25% mehr gebuchte Termine pro Monat durch niedrigere Buchungshürden und Recall-Automatisierung',
        '50% weniger administrativer Aufwand bei der Terminplanung und Patientenkommunikation',
        '98% Patientenzufriedenheit basierend auf einer Umfrage unter 450 Portal-Nutzern nach 3 Monaten',
      ],
      en: [
        '70% fewer phone-based appointment bookings — front-desk team can focus on in-person patient care',
        '25% more booked appointments per month through lower booking barriers and recall automation',
        '50% less administrative effort in appointment scheduling and patient communication',
        '98% patient satisfaction based on a survey of 450 portal users after 3 months',
      ],
    },
    relatedBlogSlugs: [],
  },
  {
    slug: 'utility-customer-app',
    title: {
      de: 'Kunden-App für Stadtwerke Burg',
      en: 'Customer App for Stadtwerke Burg',
    },
    subtitle: {
      de: 'Mobile App für Zählerstandserfassung, Störungsmeldung und Verbrauchsanalyse eines kommunalen Energieversorgers',
      en: 'Mobile app for meter readings, fault reporting, and consumption analysis for a municipal energy provider',
    },
    metaDescription: {
      de: 'Mobile Kunden-App für Stadtwerke Burg mit digitaler Zählerstandserfassung, Störungsmeldung und Verbrauchsanalyse. 80% digitale Ablesung.',
      en: 'Mobile customer app for Stadtwerke Burg with digital meter readings, fault reporting, and consumption analysis. 80% digital readings.',
    },
    client: 'Stadtwerke Burg',
    industry: {
      de: 'Energie & Versorgung',
      en: 'Energy & Utilities',
    },
    duration: {
      de: '5 Monate',
      en: '5 months',
    },
    stack: ['React Native', 'Node.js', 'PostgreSQL', 'Firebase', 'AWS'],
    problem: {
      de: 'Die Stadtwerke Burg versorgen als kommunaler Energieversorger über 12.000 Haushalte und Gewerbebetriebe in Burg und Umgebung mit Strom, Gas und Wasser. Die jährliche Zählerstandserfassung war ein logistischer Kraftakt: Über 40 Ableser waren wochenlang unterwegs, um Zählerstände manuell zu erfassen. Rund 30% der Haushalte waren beim ersten Besuch nicht erreichbar, was Zweit- und Drittbesuche und kostenintensive Schätzungen erforderte.\n\nStörungsmeldungen gingen ausschließlich über die Hotline ein, die werktags von 8 bis 16 Uhr besetzt war. Außerhalb dieser Zeiten mussten Kunden eine Notfallnummer anrufen, die an einen externen Dienstleister weitergeleitet wurde. Die durchschnittliche Bearbeitungszeit einer Störungsmeldung betrug 4,5 Stunden — ein Großteil davon entfiel auf die manuelle Weiterleitung und Dokumentation.\n\nKunden hatten keinen Einblick in ihren eigenen Verbrauch. Die einzige Information kam einmal jährlich mit der Abrechnung. Ohne Transparenz fehlte jeder Anreiz zum Energiesparen, und Abrechnungsreklamationen häuften sich, weil Kunden die Beträge nicht nachvollziehen konnten.\n\nDie Stadtwerke brauchten eine mobile Lösung, die den direkten Draht zum Kunden herstellt, operative Kosten senkt und gleichzeitig das Image als moderner kommunaler Versorger stärkt.',
      en: 'Stadtwerke Burg, a municipal energy provider, supplies over 12,000 households and businesses in and around Burg with electricity, gas, and water. The annual meter reading process was a logistical undertaking: over 40 readers spent weeks manually recording meter data. Around 30% of households were unreachable on the first visit, requiring second and third attempts and costly estimations.\n\nFault reports came exclusively through the hotline, staffed on weekdays from 8 AM to 4 PM. Outside these hours, customers had to call an emergency number routed to an external service provider. The average processing time for a fault report was 4.5 hours — most of it spent on manual forwarding and documentation.\n\nCustomers had no visibility into their own consumption. The only information arrived once a year with the bill. Without transparency, there was no incentive to save energy, and billing complaints piled up because customers could not understand the amounts.\n\nStadtwerke Burg needed a mobile solution that establishes a direct channel to customers, reduces operational costs, and strengthens their image as a modern municipal provider.',
    },
    challenge: {
      de: 'Die App musste mit dem bestehenden SAP IS-U System der Stadtwerke kommunizieren — einer Branchenlösung für Versorgungsunternehmen, die für ihre Komplexität bekannt ist. Die Schnittstelle musste Zählerstände validieren, Vertragsdaten abrufen und Störungsmeldungen in das interne Ticketsystem einspeisen, ohne die Stabilität des Produktivsystems zu gefährden.\n\nBei der Zählerstandserfassung per Foto kam eine zusätzliche Herausforderung hinzu: Die App muss Zählerstände aus Fotos unterschiedlicher Qualität und unter verschiedenen Lichtverhältnissen zuverlässig auslesen. Alte Drehscheibenzähler, digitale Zähler und Smart Meter haben jeweils völlig verschiedene Anzeigeformate.\n\nDie Verbrauchsanalyse musste aus den verfügbaren Daten — in den meisten Fällen nur der Jahresablesung plus der neuen monatlichen Selbstablesung — aussagekräftige Visualisierungen erzeugen. Gleichzeitig musste die App offline-fähig sein, da viele Zähler im Keller installiert sind, wo häufig kein Mobilfunkempfang besteht.',
      en: 'The app had to communicate with Stadtwerke\'s existing SAP IS-U system — an industry solution for utility companies known for its complexity. The interface needed to validate meter readings, retrieve contract data, and feed fault reports into the internal ticketing system without jeopardizing the stability of the production environment.\n\nMeter reading via photo presented an additional challenge: the app must reliably extract readings from photos of varying quality and lighting conditions. Old rotary disc meters, digital meters, and smart meters each have entirely different display formats.\n\nConsumption analysis had to generate meaningful visualizations from available data — in most cases only the annual reading plus the new monthly self-readings. At the same time, the app had to work offline, since many meters are installed in basements where mobile reception is often unavailable.',
    },
    solution: {
      de: 'Wir entwickelten eine Cross-Platform-App mit React Native, die sowohl für iOS als auch Android aus einer einzigen Codebasis gebaut wird. Das Node.js-Backend auf AWS kommuniziert über eine eigens entwickelte Middleware-Schicht mit dem SAP IS-U System. Firebase liefert Push-Benachrichtigungen und Echtzeit-Updates bei Störungen.\n\nDie Zählerstandserfassung bietet zwei Wege: manuelle Eingabe mit intelligenter Plausibilitätsprüfung und Foto-Upload mit serverseitiger Texterkennung. Der Algorithmus vergleicht den übermittelten Wert automatisch mit historischen Daten und markiert Ausreißer zur manuellen Prüfung. Eingaben werden lokal zwischengespeichert und bei Netzwerkverfügbarkeit synchronisiert — ideal für Kellerräume ohne Empfang.\n\nDas Störungsmeldesystem ermöglicht Kunden, Probleme rund um die Uhr zu melden — mit Standort, Fotos und Kategorie-Auswahl. Meldungen werden automatisch priorisiert und an das zuständige Team geroutet. Kunden erhalten Statusupdates in Echtzeit per Push-Benachrichtigung.\n\nDie Verbrauchsanalyse zeigt Kunden ihren Strom-, Gas- und Wasserverbrauch in interaktiven Diagrammen. Monatsvergleiche, Vorjahresvergleiche und Prognosen für die nächste Abrechnung geben Transparenz und motivieren zum Energiesparen. Ein Benchmark-Feature vergleicht den eigenen Verbrauch anonymisiert mit ähnlichen Haushalten in der Region.',
      en: 'We built a cross-platform app with React Native, serving both iOS and Android from a single codebase. The Node.js backend on AWS communicates with the SAP IS-U system through a custom-built middleware layer. Firebase delivers push notifications and real-time updates during outages.\n\nMeter reading offers two paths: manual entry with intelligent plausibility checks and photo upload with server-side text recognition. The algorithm automatically compares submitted values with historical data and flags outliers for manual review. Entries are cached locally and synchronized when a network connection becomes available — ideal for basements without reception.\n\nThe fault reporting system allows customers to report issues around the clock — with location, photos, and category selection. Reports are automatically prioritized and routed to the responsible team. Customers receive real-time status updates via push notification.\n\nConsumption analysis shows customers their electricity, gas, and water usage in interactive charts. Monthly comparisons, year-over-year comparisons, and projections for the next bill provide transparency and motivate energy savings. A benchmark feature anonymously compares personal consumption with similar households in the region.',
    },
    results: {
      de: [
        '80% der Zählerstandsmeldungen erfolgen digital über die App — die Zahl der Vor-Ort-Ableser wurde von 40 auf 8 reduziert',
        '4,7 Sterne Durchschnittsbewertung im App Store und Google Play Store',
        '60% weniger Anrufe auf der Kunden-Hotline durch Self-Service-Funktionen und Push-Benachrichtigungen',
        '15.000 Downloads im ersten Jahr — das entspricht einer Durchdringungsrate von über 70% der Privatkunden',
      ],
      en: [
        '80% of meter readings submitted digitally via the app — on-site readers reduced from 40 to 8',
        '4.7-star average rating on the App Store and Google Play Store',
        '60% fewer calls to the customer hotline through self-service features and push notifications',
        '15,000 downloads in the first year — corresponding to a penetration rate of over 70% among residential customers',
      ],
    },
    relatedBlogSlugs: [],
  },
];
