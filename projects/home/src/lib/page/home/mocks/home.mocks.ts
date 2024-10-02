import { AboutMocks } from '../../../feature/about/mocks/about.mocks';
import { Hero, Home } from '../models/home.types';

export const HeroMocks: Hero = {
  carouselItems: [
    {
      title: '',
      description: '',
      imageUrl: 'camera.jpg',
    },
    {
      title: '',
      description: '',
      imageUrl: 'coffee.jpg',
    },
    {
      title: '',
      description: '',
      imageUrl: 'sunset.jpg',
    },
  ],
};

export const HomeMocks: Home = {
  hero: HeroMocks,
  about: AboutMocks,
};
