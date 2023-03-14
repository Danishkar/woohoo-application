// import hero slider images
import HeroSlideImage1 from './assets/img/dogs/dog-slide-1.png';
import HeroSlideImage2 from './assets/img/dogs/dog-slide-2.png';
import HeroSlideImage3 from './assets/img/dogs/dog-slide-3.png';

// import social icons
import { AiFillYoutube, AiFillInstagram, AiFillGithub } from 'react-icons/ai';

export const navigation = [
  {
    name: 'home',
    href: '/',
  },
  {
    name: 'About Us',
    href: '#',
  },
  {
    name: 'Accommodation',
    href: '#',
  },
  {
    name: 'Contact Us',
    href: '#',
  },
  {
    name: 'Profile',
    href: '/profile',
  },
];


export const heroSlider = [
  {
    id: 1,
    title: 'We take care of your pet.',
    image: <HeroSlideImage1 />,
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.',
    buttonText: 'Get an appointment',
  },
  {
    id: 2,
    title: 'Lorem ipsum dolor sit.',
    image: <HeroSlideImage2 />,
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.',
    buttonText: 'Get an appointment',
  },
  {
    id: 3,
    title: 'Nunc odio in et, lectus sit.',
    image: <HeroSlideImage3 />,
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.',
    buttonText: 'Get an appointment',
  },
];

export const social = [
  {
    icon: <AiFillYoutube />,
    href: '#',
  },
  {
    icon: <AiFillInstagram />,
    href: '#',
  },
  {
    icon: <AiFillGithub />,
    href: '#',
  },
];
