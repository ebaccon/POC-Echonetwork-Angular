import {Component, inject} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavbarComponent} from './shared/component/navbar/navbar.component';
import {DarkModeStore} from './shared/store/dark-mode.store';

@Component({
  selector: 'app-root',
    imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
    title = 'EchoNetwork';

    readonly darkModeStore = inject(DarkModeStore);
}
