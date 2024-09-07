export type Home = {
  hero: Hero;
};

export type Hero = {
  carouselItems: CarouselItem[];
};

export type CarouselItem = {
  imageUrl: string;
  title: string;
  description: string;
};
