import { AfterViewInit, Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { Subject } from 'rxjs';
import { IMenuItem } from '../../core/interface/menu.interface';
import { MENU } from '../../core/menu';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterModule,
  ],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit, AfterViewInit, OnChanges, OnDestroy {
  public isCollapsed: boolean = false;
  public showOnlyMainIcon: boolean = false;
  panelOpenState = false;
  $unSubscribe = new Subject<void>();
  public menuItems: IMenuItem[] = [];
  public isDarkTheme: boolean = false;

  constructor(
    private router: Router
  ) {}

  ngOnInit() {
    this.initialize();
    console.log(this.menuItems); // Verifica que los datos se estén llenando correctamente
  }

  ngAfterViewInit() {}

  ngOnChanges() {}

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
    this.showOnlyMainIcon = this.isCollapsed;
  }

  private initialize(): void {
    let id = 0;
    MENU.forEach((menu: IMenuItem) => {
      if (menu.subItems && menu.subItems.length > 0) { // Verificación corregida aquí
        menu.id = id;
        id = this.setParentId(menu, menu.id);
      } else {
        menu.id = id;
        id++;
      }
      this.menuItems.push(menu);
    });
  }

  private setParentId(menuItem: IMenuItem, id: number): number {
    if (menuItem.subItems) { // Verificación adicional
      menuItem.subItems.forEach((sub: IMenuItem) => {
        id++;
        sub.id = id;
        sub.parentId = menuItem.id;
        if (sub.subItems && sub.subItems.length > 0) { // Verificación corregida aquí
          sub.id = id;
          id = this.setParentId(sub, sub.id);
        }
      });
    }
    return id;
  }

  hasItems(item: IMenuItem): boolean {
    return item.subItems ? item.subItems.length > 0 : false;
  }

  ngOnDestroy(): void {
    this.$unSubscribe.next();
    this.$unSubscribe.complete();
  }
  toggleTheme(event: Event) {
    this.isDarkTheme = (event.target as HTMLInputElement).checked;
    if (this.isDarkTheme) {
      document.body.classList.add('dark-theme');
      document.body.classList.remove('light-theme');
    } else {
      document.body.classList.add('light-theme');
      document.body.classList.remove('dark-theme');
    }
    this.saveTheme();
  }

  loadTheme() {
    const darkTheme = localStorage.getItem('dark-theme');
    this.isDarkTheme = darkTheme === 'true';
    if (this.isDarkTheme) {
      document.body.classList.add('dark-theme');
      document.body.classList.remove('light-theme');
    } else {
      document.body.classList.add('light-theme');
      document.body.classList.remove('dark-theme');
    }
  }

  saveTheme() {
    localStorage.setItem('dark-theme', this.isDarkTheme.toString());
  }
}
