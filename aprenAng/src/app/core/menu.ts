import { IMenuItem } from "./interface/menu.interface";

export const MENU: IMenuItem[] = [
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
        label: 'Artistas',
        icon: 'bxs-user-account',
        link: '/artistas',
        subItems: [],
      },
      {
        label: 'Productos',
        icon: 'bxs-component',
        link: '/productos',
        subItems: [],
      },
    ],
  },
  {
    label: 'Other Menu',
    icon: 'bx-folder',
    subItems: [],
  },
];
