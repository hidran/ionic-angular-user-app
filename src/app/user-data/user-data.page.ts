import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {User, UsersService} from '../services/users.service';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.page.html',
  styleUrls: ['./user-data.page.scss'],
})
export class UserDataPage implements OnInit {
  public userId = '';
  public user: User;

  constructor(private route: ActivatedRoute,
              private usersService: UsersService) {
  }

  async ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.user = await this.usersService.getUserById(id);
    console.log(this.user);
  }


}
