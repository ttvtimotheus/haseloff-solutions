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
    id: 'ecommerce-platform',
    title: 'E-Commerce Platform',
    description: 'Vollständige E-Commerce-Lösung mit Headless CMS, Zahlungsintegration und Lagerverwaltung.',
    descriptionEn: 'Complete e-commerce solution with headless CMS, payment integration, and inventory management.',
    tags: ['webapp', 'backend', 'api'],
    stack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Stripe', 'Vercel'],
    link: 'https://example.com',
  },
  {
    id: 'mobile-banking',
    title: 'Mobile Banking App',
    description: 'Sichere Banking-App mit biometrischer Authentifizierung und Echtzeit-Transaktionen.',
    descriptionEn: 'Secure banking app with biometric authentication and real-time transactions.',
    tags: ['mobile', 'backend', 'api'],
    stack: ['React Native', 'Node.js', 'PostgreSQL', 'Redis', 'AWS'],
    link: 'https://example.com',
  },
  {
    id: 'analytics-dashboard',
    title: 'Analytics Dashboard',
    description: 'Echtzeit-Datenvisualisierung und Business Intelligence Platform für KMUs.',
    descriptionEn: 'Real-time data visualization and business intelligence platform for SMEs.',
    tags: ['webapp', 'frontend', 'database'],
    stack: ['React', 'TypeScript', 'D3.js', 'PostgreSQL', 'Docker'],
    link: 'https://example.com',
    github: 'https://github.com',
  },
  {
    id: 'api-gateway',
    title: 'API Gateway System',
    description: 'Skalierbare API-Gateway-Lösung mit Rate Limiting, Caching und Monitoring.',
    descriptionEn: 'Scalable API gateway solution with rate limiting, caching, and monitoring.',
    tags: ['backend', 'api', 'database'],
    stack: ['Node.js', 'Redis', 'PostgreSQL', 'Docker', 'Kubernetes'],
    github: 'https://github.com',
  },
  {
    id: 'content-management',
    title: 'Content Management System',
    description: 'Modernes Headless CMS mit KI-gestützter Inhaltsgenerierung und Mehrsprachigkeit.',
    descriptionEn: 'Modern headless CMS with AI-powered content generation and multilingual support.',
    tags: ['webapp', 'backend', 'database'],
    stack: ['Next.js', 'TypeScript', 'PostgreSQL', 'OpenAI', 'Vercel'],
    link: 'https://example.com',
  },
  {
    id: 'iot-monitoring',
    title: 'IoT Monitoring Platform',
    description: 'Überwachungs- und Steuerungsplattform für industrielle IoT-Geräte mit Echtzeit-Alerts.',
    descriptionEn: 'Monitoring and control platform for industrial IoT devices with real-time alerts.',
    tags: ['webapp', 'backend', 'api'],
    stack: ['React', 'Node.js', 'InfluxDB', 'MQTT', 'Docker'],
    link: 'https://example.com',
  },
];
