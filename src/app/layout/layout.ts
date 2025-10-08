import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router'; // 👈 muy importante

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet], // 👈 asegúrate de incluirlo
  templateUrl: './layout.html',
  styleUrl: './layout.scss'
})
export class LayoutComponent {}
