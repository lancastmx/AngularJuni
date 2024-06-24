import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { PodcastListComponent } from './features/podcasts/podcast-list/podcast-list.component';
import { EventListComponent } from './features/events/event-list/event-list.component';
import { ArtistListComponent } from './features/artists/artist-list/artist-list.component';
import { ProductListComponent } from './features/products/product-list/product-list.component';
export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'podcast', component: PodcastListComponent },
      { path: 'artistas', component: ArtistListComponent },
      { path: 'eventos', component: EventListComponent  },
      { path: 'eventos', component: EventListComponent  },
      { path: 'productos', component: ProductListComponent   },
      // { path: 'venues', component: VenuesComponent },

      // Aquí puedes agregar más rutas hijas según necesites
    ],
  },
];
