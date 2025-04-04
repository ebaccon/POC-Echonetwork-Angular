import {Component, EventEmitter, output, Output} from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {

    clickButton = output<void>();

    handleClickButton() {
        this.clickButton.emit();
    }
}
