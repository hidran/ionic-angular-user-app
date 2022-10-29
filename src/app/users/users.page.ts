import {Component, OnInit} from '@angular/core';
import {User} from '../interfaces/user-interfaces';
import {UsersService} from '../services/users.service';

import {Observable} from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {
  public users$: Observable<User[]>;

  constructor(private usersService: UsersService) {
  }

  ngOnInit() {
    this.users$ = this.usersService.getUsers();
  }

}
