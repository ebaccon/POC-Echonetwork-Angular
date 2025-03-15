import { Component } from '@angular/core';
import { UserService } from '../../../api/user.api.service';
import { User } from '../../../models/user';

@Component({
  selector: 'app-user',
  imports: [],
  providers: [UserService],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {

  userList: User[] = [];

  constructor(private userService: UserService) {}

  ngOnInit() {
    // Users
    this.userFindAll();
  }

  userFindAll() {
    this.userService.findAll().subscribe({
      next: (values) => {
        console.log('userFindAll values: ', values);
        this.userList = values;
      }, 
      error: (error) => {
        console.error('UserComponent userFindAll :', error);
      }
    });
  }

}
