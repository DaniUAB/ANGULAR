import { Routes } from '@angular/router';

// Asegúrate de que estas rutas de importación son correctas:
import { LayoutComponent } from './layout/layout';
import { HomeComponent } from './home/home';
import { AboutComponent } from './about/about'; // Nuevo componente importado

export const routes: Routes = [
  {
    path: '', // La ruta principal o molde (http://localhost:4200/)
    component: LayoutComponent, // Usa el LayoutComponent como molde
    children: [
      // Rutas Hijas (se cargan dentro del <router-outlet> del Layout)

      // 1. Ruta de Inicio (Home):
      {
        path: '',
        component: HomeComponent,
        title: 'Inicio | Mi Aplicación' // Título que se verá en la pestaña del navegador
      },

      // 2. Ruta Acerca de (About):
      {
        path: 'about',
        component: AboutComponent,
        title: 'Acerca de | Mi Aplicación'
      },

      // NOTA: Si necesitas una ruta /home, simplemente descomenta o añade:
      // { path: 'home', component: HomeComponent },
    ]
  }
];
