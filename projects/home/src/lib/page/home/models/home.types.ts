import { Aboutme } from '../../../feature/about/types/about.types';

export type Home = {
  hero: Hero;
  about: Aboutme;
};

export type Hero = {
  carouselItems: CarouselItem[];
};

export type CarouselItem = {
  imageUrl: string;
  title: string;
  description: string;
};
