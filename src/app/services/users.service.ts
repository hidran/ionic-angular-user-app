import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {map, tap} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {User, Users} from '../interfaces/user-interfaces';
import {Storage} from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  apiURL = 'https://randomuser.me/api/?seed=usersapp&results=100&inc=email,gender,name,nat,picture,dob,phone,login&noinfo';

  constructor(private http: HttpClient, private storage: Storage) {
    this.storage.create();
  }

  getUsers(): Observable<User[]> {
    return this.http.get<Users>(this.apiURL).pipe(
      map(res => res.results),
      tap(users => this.storage.set('users', users))
    );
  }

  async getUserById(id: string): Promise<User> {
    const users = await this.getUsers().toPromise();
    return users.filter(user => user.login.uuid === id)[0];
  }
}

