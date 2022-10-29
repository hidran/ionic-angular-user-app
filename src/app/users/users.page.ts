import {Component, OnInit} from '@angular/core';
import {MovieService, User} from '../services/movie.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {
  public users$: Observable<User[]>;

  constructor(private movieService: MovieService) {
  }

  ngOnInit() {
    this.users$ = this.movieService.getUsers();
  }

}
