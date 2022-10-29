import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {map, tap} from 'rxjs/operators';
import {User, Users} from '../interfaces/user-interfaces';
import {Storage} from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  apiURL = 'https://randomuser.me/api/?seed=usersapp&results=100&inc=email,gender,name,nat,picture,dob,phone,login&noinfo';

  constructor(private http: HttpClient, private storage: Storage) {

  }

  async getUsers() {
    await this.storage.create();
    const users = await this.storage.get('users');

    if (users) {
      return users;
    }

    return this.http.get<Users>(this.apiURL).pipe(
      map(res => res.results),
      tap(resUsers => {

        this.storage.set('users', resUsers);
      })
    ).toPromise();
  }

  async getUserById(id: string): Promise<User> {

    const usercached = await this.storage.get('user-' + id);
    if (usercached) {
      return usercached;
    }
    const users = await this.getUsers();
    const userData = users.filter(user => user.login.uuid === id)[0];
    if (userData) {
      await this.storage.set('user-' + id, userData);
    }
    return userData || [];
  }

}

