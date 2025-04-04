import {Component, inject} from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {ButtonComponent} from '../ui/button/button.component';
import {DarkModeService} from '../../service/dark-mode.service';

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

    darkModeService: DarkModeService = inject(DarkModeService);

    handleClickDarkMode() {
        console.log('DarkModeService clicked');
        this.darkModeService.updateDarkMode();
    }
}
