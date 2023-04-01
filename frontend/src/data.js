// import hero slider images
import HeroSlideImage1 from './assets/img/dogs/dog-slide-1.png';
import HeroSlideImage2 from './assets/img/dogs/dog-slide-2.png';
import HeroSlideImage3 from './assets/img/dogs/dog-slide-3.png';
import Earmits from './assets/Diseases/Earmits.png';
import mange from './assets/Diseases/mange.jpg';
import RingworminCats from './assets/Diseases/RingworminCats.jpg';
import RingworminDogs from './assets/Diseases/RingworminDogs.webp';

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
    name: 'LogOut',
    href: '/login',
  }
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

export const disease = [
  {
    Animaltype:'Cat',
    disease:'Earmite',
    discription:'The ear mite, Otodectes cynotis, is a surface mite that lives on cats, dogs, rabbits, and ferrets. It is usually found in the ear canal but it can also live on the skin surface. Ear mites are highly contagious, and animals become infested by direct contact with another infested animal.',
    medicine:'Ear mites in cats are a treatable condition. Both systemic and topical treatments are available, including systemic selamectin, moxidectin, ivermectin, and milbemycin. Your veterinarian may also clean your cats ears with an appropriate cleaning solution.',
    img:{Earmits},
  },
  
  {
    Animaltype:'cat',
    disease:'RingWorm',
    discription:'The clearest and most common clinical signs of feline ringworm include the following: circular areas of hair loss, broken and stubbly hair, scaling or crusty skin, alterations in hair or skin color, inflamed areas of skin, excessive grooming and scratching, infected claws or nail beds, and dandruff.',
    medicine:'In most cases of ringworm, effective treatment will require the administration of an oral anti-fungal drug. The most commonly used drugs for this purpose are itraconazole (Itrafungol®, Sporanox®, Onmel®) or terbinafine.',
    img:{RingworminCats},
  },

  {
    Animaltype:'Dog',
    disease:'Mange',
    discription:'Depending on which type of mite is involved, dog mange may result in signs such as itchiness and hair loss in its early stage. Early-stage mange in dogs can be difficult to differentiate from other skin conditions. You should consult with your vet if you notice any signs of skin disease such as scratching, hair loss or scabs on the skin.',
    medicine:'NexGard® and NexGard SPECTRA® provide effective demodectic mange treatment, sarcoptic mange treatment and ear mite treatment for dogs. Two consecutive monthly treatments of NexGard or NexGard SPECTRA are recommended for sarcoptic mange',
    img:{mange},
  },

  {
    Animaltype:'Dog',
    disease:'RingWorm',
    discription:'In dogs, ringworm has a number of different appearances, most often areas of hair loss with a crusty covering, or (rarely) may be asymptomatic. Patches of ringworm may look like a grey, scaly patch in some dogs, but more like a red lesion in others. You may see some hair loss or patches of broken hair',
    medicine:'Currently, two medications are primarily recommended to treat ringworm: Itraconazole and terbinafine. Griseofulvin is also available and has been the traditional anti-ringworm oral medication for decades',
    img:{RingworminDogs},
  },
]