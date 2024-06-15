import { IMenuItem } from "./interface/menu.interface";

/**
 *
 * This is an Array for a Dynamic Menu
 *
 * **/

export const TOPMENU: IMenuItem[] = [
  /*{
        label: 'PROCESO DE VENTA',
        isTitle: true
    },*/
  {
    label: 'Dashboard',
    icon: 'bxs-dashboard',
    subItems: [
      {
        label: 'Ejemplos',
        icon: 'bx-right-arrow-alt',
        link: '/app',
        subItems: [],
      },
    ],
  },
  {
    label: 'Kyclops',
    icon: 'bx-collection',
    subItems: [
      {
        label: 'Podcast',
        icon: 'bx-package',
        link: '/podcast',
        subItems: [],
      },
      {
        label: 'Eventos',
        icon: 'bxs-contact',
        link: '/eventos',
        subItems: [],
      },
      {
        label: 'Luegares',
        icon: 'bx-user-plus',
        link: '/venues',
        subItems: [],
      },
      // {
      //   label: 'Artistas',
      //   icon: 'bxs-user-account',
      //   link: '/admin/artists',
      //   subItems: [],
      // },
      // {
      //   label: 'Observaciones',
      //   icon: 'bx-note',
      //   link: '/admin/observations',
      //   subItems: [],
      // },
      // {
      //   label: 'Products',
      //   icon: 'bxs-component',
      //   link: '/venues',
      //   subItems: [],
      // },
    ],
  },
];
