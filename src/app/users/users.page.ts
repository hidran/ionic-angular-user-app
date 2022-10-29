import {Component, OnInit} from '@angular/core';
import {User} from '../interfaces/user-interfaces';
import {UsersService} from '../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {
  public users$: Promise<User[]>;

  constructor(private usersService: UsersService) {
  }

  async ngOnInit() {
    this.users$ = this.usersService.getUsers();
  }

}
