import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout';
import { HomeComponent } from './home/home';
import { AboutComponent } from './about/about';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
        title: 'Inicio | Mi Aplicación'
      },
      {
        path: 'about',
        component: AboutComponent,
        title: 'Acerca de | Mi Aplicación'
      }
    ]
  }
];
