
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  isNavbarCollapsed = true;
  title = 'aprenAng';
  setLightMode() {
    document.body.classList.remove('dark-mode');
  }

  setDarkMode() {
    document.body.classList.add('dark-mode');
  }
  currentDate: string = '';
  currentTime: string = '';

  ngOnInit(): void {
    this.updateDateTime();
    setInterval(() => this.updateDateTime(), 1000);
  }

  updateDateTime(): void {
    const now = new Date();
    this.currentDate = now.toLocaleDateString();
    this.currentTime = now.toLocaleTimeString();
  }
  selectedButton: string = '';

  selectButton(button: string) {
    this.selectedButton = button;
  }
}
