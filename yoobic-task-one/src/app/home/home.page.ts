import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../people.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  listOfUsers: any = [];

  constructor(
    private ps: PeopleService
  ) { }

  ngOnInit() {
    this.getUsersList();
  }

  public getUsersList() {
    this.ps.getUsersList().subscribe(result => {
      console.log(result);
    });
  }


}
