
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html'
})
export class UserDetailComponent implements OnInit {

  constructor(private router: Router) {

  }

  ngOnInit() { }
  goBack(evt) {
    //this.router.navigate(['users'])
    this.router.navigateByUrl('users');
  }



}
