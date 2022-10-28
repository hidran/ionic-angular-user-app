import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {
  public users = [
    {
      gender: 'female',
      name: {
        title: 'Ms',
        first: 'Angela',
        last: 'Dominguez'
      },
      dob: {
        date: '1986-01-08T05:55:38.925Z',
        age: 34
      },
      phone: '982-337-119',
      id: {
        name: 'DNI',
        value: '69257572-B'
      },
      picture: {
        large: 'https://randomuser.me/api/portraits/women/62.jpg',
        medium: 'https://randomuser.me/api/portraits/med/women/62.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/women/62.jpg'
      },
      nat: 'ES'
    },
    {
      gender: 'female',
      name: {
        title: 'Miss',
        first: 'Louane',
        last: 'Barbier'
      },
      dob: {
        date: '1966-01-07T23:39:39.144Z',
        age: 54
      },
      phone: '03-28-68-78-17',
      id: {
        name: 'INSEE',
        value: '2NNaN62070529 22'
      },
      picture: {
        large: 'https://randomuser.me/api/portraits/women/77.jpg',
        medium: 'https://randomuser.me/api/portraits/med/women/77.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/women/77.jpg'
      },
      nat: 'FR'
    },
    {
      gender: 'female',
      name: {
        title: 'Ms',
        first: 'Mackenzie',
        last: 'Evans'
      },
      dob: {
        date: '1987-04-04T02:23:22.370Z',
        age: 33
      },
      phone: '(921)-014-9482',
      id: {
        name: '',
        value: null
      },
      picture: {
        large: 'https://randomuser.me/api/portraits/women/67.jpg',
        medium: 'https://randomuser.me/api/portraits/med/women/67.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/women/67.jpg'
      },
      nat: 'NZ'
    },
    {
      gender: 'male',
      name: {
        title: 'Mr',
        first: 'Adam',
        last: 'Andersen'
      },
      dob: {
        date: '1988-09-13T10:24:23.116Z',
        age: 32
      },
      phone: '338-616-7231',
      id: {
        name: '',
        value: null
      },
      picture: {
        large: 'https://randomuser.me/api/portraits/men/91.jpg',
        medium: 'https://randomuser.me/api/portraits/med/men/91.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/men/91.jpg'
      },
      nat: 'CA'
    },
    {
      gender: 'male',
      name: {
        title: 'Mr',
        first: 'Klaus-Peter',
        last: 'Reith'
      },
      dob: {
        date: '1979-09-18T02:01:00.417Z',
        age: 41
      },
      phone: '0828-3809639',
      id: {
        name: '',
        value: null
      },
      picture: {
        large: 'https://randomuser.me/api/portraits/men/20.jpg',
        medium: 'https://randomuser.me/api/portraits/med/men/20.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/men/20.jpg'
      },
      nat: 'DE'
    },
    {
      gender: 'female',
      name: {
        title: 'Miss',
        first: 'Alcione',
        last: 'Rocha'
      },
      dob: {
        date: '1992-05-30T15:12:18.555Z',
        age: 28
      },
      phone: '(73) 3836-2579',
      id: {
        name: '',
        value: null
      },
      picture: {
        large: 'https://randomuser.me/api/portraits/women/28.jpg',
        medium: 'https://randomuser.me/api/portraits/med/women/28.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/women/28.jpg'
      },
      nat: 'BR'
    },
    {
      gender: 'male',
      name: {
        title: 'Monsieur',
        first: 'Tony',
        last: 'Lucas'
      },
      dob: {
        date: '1946-11-13T15:20:26.775Z',
        age: 74
      },
      phone: '077 902 85 69',
      id: {
        name: 'AVS',
        value: '756.7222.2193.55'
      },
      picture: {
        large: 'https://randomuser.me/api/portraits/men/31.jpg',
        medium: 'https://randomuser.me/api/portraits/med/men/31.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/men/31.jpg'
      },
      nat: 'CH'
    },
    {
      gender: 'male',
      name: {
        title: 'Mr',
        first: 'Ruben',
        last: 'Walker'
      },
      dob: {
        date: '1969-10-01T10:11:47.452Z',
        age: 51
      },
      phone: '(020)-775-3287',
      id: {
        name: 'SSN',
        value: '117-93-7259'
      },
      picture: {
        large: 'https://randomuser.me/api/portraits/men/38.jpg',
        medium: 'https://randomuser.me/api/portraits/med/men/38.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/men/38.jpg'
      },
      nat: 'US'
    },
    {
      gender: 'male',
      name: {
        title: 'Mr',
        first: 'Lucas',
        last: 'Anderson'
      },
      dob: {
        date: '1945-11-30T21:01:05.608Z',
        age: 75
      },
      phone: '(425)-949-5751',
      id: {
        name: '',
        value: null
      },
      picture: {
        large: 'https://randomuser.me/api/portraits/men/31.jpg',
        medium: 'https://randomuser.me/api/portraits/med/men/31.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/men/31.jpg'
      },
      nat: 'NZ'
    },
    {
      gender: 'female',
      name: {
        title: 'Mrs',
        first: 'Bessie',
        last: 'Vargas'
      },
      dob: {
        date: '1964-02-17T11:25:16.726Z',
        age: 56
      },
      phone: '09-3731-6617',
      id: {
        name: 'TFN',
        value: '384771809'
      },
      picture: {
        large: 'https://randomuser.me/api/portraits/women/38.jpg',
        medium: 'https://randomuser.me/api/portraits/med/women/38.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/women/38.jpg'
      },
      nat: 'AU'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
