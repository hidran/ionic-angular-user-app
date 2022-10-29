import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

export interface Name {
  title: string;
  first: string;
  last: string;
}

export interface Login {
  uuid: string;
  username: string;
  password: string;
  salt: string;
  md5: string;
  sha1: string;
  sha256: string;
}

export interface Dob {
  date: Date;
  age: number;
}

export interface Picture {
  large: string;
  medium: string;
  thumbnail: string;
}

export interface User {
  gender: string;
  name: Name;
  email: string;
  login: Login;
  dob: Dob;
  phone: string;
  picture: Picture;
  nat: string;
}

export interface Users {
  results: User[];
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  apiURL = 'https://randomuser.me/api/?seed=usersapp&results=100&inc=email,gender,name,nat,picture,dob,phone,login&noinfo';

  constructor(private http: HttpClient) {

  }

  getUsers(): Observable<User[]> {
    return this.http.get<Users>(this.apiURL).pipe(
      map(res => res.results)
    );
  }

  async getUserById(id: string): Promise<User> {
    const users = await this.getUsers().toPromise();
    return users.filter(user => user.login.uuid === id)[0];
  }
}

