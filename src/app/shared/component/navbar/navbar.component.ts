import {Component, inject} from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {ButtonComponent} from '../ui/button/button.component';
import {DarkModeStore} from '../../store/dark-mode.store';

@Component({
  selector: 'app-navbar',
    imports: [
        RouterLink,
        RouterLinkActive,
        ButtonComponent
    ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

    readonly darkModeStore = inject(DarkModeStore);

    handleClickDarkMode() {
        console.log('DarkModeService clicked');
        this.darkModeStore.toggleDarkMode();
    }
}
