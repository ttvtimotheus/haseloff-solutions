export interface Project {
  id: string;
  title: string;
  description: string;
  descriptionEn: string;
  tags: string[];
  stack: string[];
  link?: string;
  github?: string;
  image?: string;
}

export const projects: Project[] = [
  {
    id: 'heimbach-logistics',
    title: 'Heimbach Logistics Portal',
    description: 'Digitale Transformation eines mittelständischen Logistikunternehmens. Kundenportal mit Sendungsverfolgung, automatisierter Rechnungsstellung und Routenoptimierung.',
    descriptionEn: 'Digital transformation of a mid-sized logistics company. Customer portal with shipment tracking, automated billing, and route optimization.',
    tags: ['webapp', 'backend', 'api'],
    stack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Stripe', 'Vercel'],
  },
  {
    id: 'stadtwerke-app',
    title: 'Stadtwerke Burg Kunden-App',
    description: 'Mobile App für lokale Stadtwerke mit Zählerstandsmeldung, Störungsmeldungen und Verbrauchsanalyse. Push-Benachrichtigungen für wichtige Updates.',
    descriptionEn: 'Mobile app for local utilities with meter readings, fault reporting, and consumption analysis. Push notifications for important updates.',
    tags: ['mobile', 'backend', 'api'],
    stack: ['React Native', 'Node.js', 'PostgreSQL', 'Firebase', 'AWS'],
  },
  {
    id: 'bbs-genthin-website',
    title: 'BBS Genthin - Moderne Schulwebsite',
    description: 'Kompletter Relaunch der Website für die Berufsbildenden Schulen Genthin. Responsive Design, Stundenplanintegration, Online-Anmeldungen und digitales Schwarzes Brett für Schüler und Lehrer.',
    descriptionEn: 'Complete website relaunch for Genthin Vocational School. Responsive design, timetable integration, online registrations, and digital bulletin board for students and teachers.',
    tags: ['webapp', 'frontend', 'backend'],
    stack: ['Next.js', 'TypeScript', 'Strapi CMS', 'PostgreSQL', 'Vercel'],
  },
  {
    id: 'kanzlei-management',
    title: 'Rechtsanwaltskanzlei Weber - Mandatenverwaltung',
    description: 'Digitale Mandatenverwaltung mit Terminplanung, Dokumentenarchiv und automatisierter Abrechnung. DSGVO-konform und anwaltsspezifisch.',
    descriptionEn: 'Digital client management with appointment scheduling, document archive, and automated billing. GDPR-compliant and lawyer-specific.',
    tags: ['webapp', 'backend', 'database'],
    stack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Vercel'],
  },
  {
    id: 'handwerk-plattform',
    title: 'Elektro Müller - Kundenplattform',
    description: 'Online-Plattform für Elektrohandwerksbetrieb mit Kostenvoranschlägen, Terminbuchung und digitaler Rechnungsstellung. Integration bestehender Warenwirtschaft.',
    descriptionEn: 'Online platform for electrical contractor with cost estimates, appointment booking, and digital invoicing. Integration with existing inventory system.',
    tags: ['webapp', 'backend', 'api'],
    stack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Stripe', 'Docker'],
  },
  {
    id: 'praxis-software',
    title: 'Zahnarztpraxis Dr. Hoffmann - Patientenportal',
    description: 'Patientenportal mit Online-Terminbuchung, Behandlungshistorie und Recall-System. Nahtlose Integration in bestehende Praxissoftware.',
    descriptionEn: 'Patient portal with online appointment booking, treatment history, and recall system. Seamless integration with existing practice software.',
    tags: ['webapp', 'backend', 'api'],
    stack: ['React', 'Node.js', 'PostgreSQL', 'Docker', 'AWS'],
  },
];
