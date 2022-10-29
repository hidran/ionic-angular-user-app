import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.page.html',
  styleUrls: ['./user-data.page.scss'],
})
export class UserDataPage implements OnInit {
  public userId = '';

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    // this.userId =  this.route.snapshot.params['id']
    this.route.paramMap.subscribe(par => this.userId = par.get('id'));
    console.log('componet initialized ' + this.userId);
  }

}
