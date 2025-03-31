import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {

    @Output('click') click = new EventEmitter();

    handleClickButton() {
        this.click.emit();
    }
}
