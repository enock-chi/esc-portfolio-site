import bloggingApp from 'assets/blogging-app.png';
import rogueApparel from 'assets/rogue-apparel.png';
import propertyZen from 'assets/property-zen.png';
import Avatar3 from 'assets/testimonial/avatar3.png';
import Avatar4 from 'assets/testimonial/avatar4.png';

export default {
  data: [
    {
      id: 1,
      title: 'Blog App',
      description:
        'The Blog App is a blogging app created by utilizing the following main technologies: React.js, GraphQl, Tailwind CSS and Graph CMS to manage the content. The Blog App originally started because I wanted to create my very own blogging app.',
      avatar: bloggingApp,
      link: 'https://crunch-blogger.vercel.app',
      github: 'https://github.com/enock-chi/blogging-app',
    },
    {
      id: 2,
      title: 'Rogue Clothing',
      description:
        'Rogue Clothing is an eCommerce site created by utilizing the following main technologies: React.js, Material UI and MongoDB. Rogue Clothing was created in order to solve something of a real-world problem/project by making use of a database.',
      avatar: rogueApparel,
      link: 'https://rogue-apparel.vercel.app',
      github: 'https://github.com/enock-chi/esc-portfolio-site',
    },
    {
      id: 3,
      title: 'Property Zen',
      description:
        'Property Zen is a site created by utilizing the following main technologies: React.js, Chakra UI and Rapid API to get all property details. Property Zen was created in order to solve something of a real-world problem/project by making use of an API.',
      avatar: propertyZen,
      link: 'https://property-zen.vercel.app',
      github: 'https://github.com/enock-chi/property-zen',
    },
  ],
};
