import {Component, inject} from '@angular/core';
import { UserService } from '../../../api/user.api.service';
import { User } from '../../../model/user';
import {ButtonComponent} from '../../../component/ui/button/button.component';

@Component({
  selector: 'app-user',
    imports: [
        ButtonComponent
    ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {

    userList: User[] = [];
    private userService = inject(UserService);

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

    handleClickDisplayDetail() {
        console.log('Click DisplayDetail');
    }
}
