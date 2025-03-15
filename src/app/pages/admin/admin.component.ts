import { Component } from '@angular/core';
import { UserComponent } from "./user/user.component";

@Component({
  selector: 'app-admin',
  imports: [UserComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {

}
