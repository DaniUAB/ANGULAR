import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Módulos básicos de Angular

@Component({
  selector: 'app-home',
  standalone: true, // <-- ¡Crucial! Define que es un componente moderno/independiente
  imports: [
    CommonModule // Necesario para usar directivas como *ngIf, *ngFor, etc.
],
  templateUrl: './home.html', // Usando tu nombre de archivo
  styleUrl: './home.scss'
})
export class HomeComponent { // <-- Usando la convención de Angular
}
