import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router'; // <-- ¡IMPORTANTE! Asegúrate de que esta línea esté aquí

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet], // <-- ¡DEBE ESTAR EL ROUTEROUTLET AQUÍ!
  templateUrl: './layout.html',
  styleUrl: './layout.scss'
})
export class LayoutComponent {
}
