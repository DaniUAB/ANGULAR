import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Necesario para componentes standalone

@Component({
  selector: 'app-about',
  standalone: true, // ¡Esto lo define como componente independiente!
  imports: [
    CommonModule // Permite usar directivas Angular básicas
  ],
  templateUrl: './about.html', // Usando tu nombre de archivo corto
  styleUrl: './about.scss'
})
export class AboutComponent { // Usando el nombre de clase estándar (AboutComponent)
}
