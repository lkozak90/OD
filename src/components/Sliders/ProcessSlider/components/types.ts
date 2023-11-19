export interface Slide {
  subtitle: string;
  title: string;
  text: string;
  image: {
    src: string;
    alt: string;
  };
  features?: {
    icon: React.ReactNode;
    text: string;
  }[];
}
