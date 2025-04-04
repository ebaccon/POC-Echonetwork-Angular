import {Component, inject} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavbarComponent} from './shared/component/navbar/navbar.component';
import {DarkModeService} from './shared/service/dark-mode.service';

@Component({
  selector: 'app-root',
    imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
    title = 'EchoNetwork';

    darkModeService: DarkModeService = inject(DarkModeService);
}
