import { Hero, Home } from '../models/home.types';

export const HeroMocks: Hero = {
  carouselItems: [
    {
      title: 'this is the title',
      description: 'this is the description for the image',
      imageUrl:
        'https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      title: 'this is the title',
      description: 'this is the description for the image',
      imageUrl:
        'https://images.pexels.com/photos/395196/pexels-photo-395196.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      title: 'this is the title',
      description: 'this is the description for the image',
      imageUrl:
        'https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
  ],
};

export const HomeMocks: Home = {
  hero: HeroMocks,
};
