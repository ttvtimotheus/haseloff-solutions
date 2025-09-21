export type Project = {
  id: string;
  title: string;
  summary: string;
  tags: string[]; // e.g. ["Web App", "Mobile", "Backend"]
  image?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  stack?: string[]; // technology badges
  href?: string;
};

// Provide an empty list by default. Populate with real projects.
export const projects: ReadonlyArray<Project> = [];
