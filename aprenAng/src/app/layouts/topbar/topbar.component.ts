import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.css'
})
export class TopbarComponent implements OnInit {
  ngOnInit(): void {
    const themeSwitch = document.getElementById('theme-switch');
    themeSwitch?.addEventListener('change', (event: any) => {
      document.body.classList.toggle('dark-theme', event.target.checked);
    });
  }
}
