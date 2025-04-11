import {Component, input, output} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-button',
    imports: [
        NgClass
    ],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
    type = input<'button' | 'submit' | 'reset'>('button');
    variant = input<'primary' | 'secondary' | 'danger'>('primary');
    disabled = input<boolean>(false);

    clickButton = output<void>();

    handleClickButton() {
        this.clickButton.emit();
    }
}
