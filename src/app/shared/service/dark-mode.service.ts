import {Injectable, signal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DarkModeService {
    isDarkMode = signal(false);

    updateDarkMode() {
        this.isDarkMode.update((value) => !value)
    }
}
