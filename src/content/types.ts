export type Bilingual = { de: string; en: string };

export interface BlogArticle {
  slug: string;
  title: Bilingual;
  subtitle: Bilingual;
  metaDescription: Bilingual;
  author: string;
  publishDate: string;
  readingTime: Bilingual;
  sections: ArticleSection[];
  conclusion: Bilingual;
  relatedSlugs: string[];
}

export interface ArticleSection {
  id: string;
  heading: Bilingual;
  content: Bilingual;
}

export interface CaseStudy {
  slug: string;
  title: Bilingual;
  subtitle: Bilingual;
  metaDescription: Bilingual;
  client: string;
  industry: Bilingual;
  duration: Bilingual;
  stack: string[];
  problem: Bilingual;
  challenge: Bilingual;
  solution: Bilingual;
  results: { de: string[]; en: string[] };
  relatedBlogSlugs: string[];
}

export interface ServicePage {
  slug: string;
  title: Bilingual;
  subtitle: Bilingual;
  metaDescription: Bilingual;
  overview: Bilingual;
  process: { step: Bilingual; description: Bilingual }[];
  technologies: string[];
  industries: { de: string[]; en: string[] };
  useCases: { title: Bilingual; description: Bilingual }[];
  faq: { question: Bilingual; answer: Bilingual }[];
  relatedCaseStudySlugs: string[];
}
