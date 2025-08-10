export type ExperienceItem = {
  id: number;
  experience: string;
  language: string;
};

export type ProjectItem = {
  id: number;
  image: string;
  image_mobile: string;
  alt: string;
  title: string;
  languages: string;
  linkProject: string;
  linkGithub: string;
  width?: number; // default 475
  height?: number; // default 348
};
