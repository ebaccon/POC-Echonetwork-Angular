import {Component, input, model, output} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
    selector: 'app-switch-button',
    imports: [
        NgClass
    ],
    templateUrl: './switch-button.component.html',
    styleUrl: './switch-button.component.scss'
})
export class SwitchButtonComponent {
    checked = model<boolean>(false);
    disabled = input<boolean>(false);

    toggleSwitch = output<boolean>();

    handleToggleSwitch() {
        if (!this.disabled()) {
            this.checked.set(!this.checked());
            this.toggleSwitch.emit(this.checked());
        }
    }
}
