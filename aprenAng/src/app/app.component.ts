import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'aprenAng';
  setLightMode() {
    document.body.classList.remove('dark-mode');
  }

  setDarkMode() {
    document.body.classList.add('dark-mode');
  }
}
