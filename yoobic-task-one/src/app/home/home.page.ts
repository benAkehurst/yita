import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../people.service';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  listOfUsers: any = [];
  dataLoading: Boolean = true;

  constructor(
    private ps: PeopleService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getUsersList();
  }

  public getUsersList() {
    this.ps.getUsersList().subscribe(result => {
      result.results.forEach(e => {
        const newUser = {
          name: e.name.first + ' ' + e.name.last,
          picture: e.picture.medium,
          pictureSmall: e.picture.thumbnail,
          city: e.location.city,
          state: e.location.state,
        };
        this.listOfUsers.push(newUser);
        this.dataLoading = false;
      });
    });
  }

  public selectPerson(person: any) {
    this.ps.chosendUser = person;
    this.router.navigateByUrl('detail');
  }


}
