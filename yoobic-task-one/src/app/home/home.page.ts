import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../people.service';
import { Router } from '@angular/router';

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
      console.log(result);
      this.dataLoading = false;
    });
  }

  public selectPerson(person: any) {
    this.ps.getSingleUser(person).subscribe(result => {
      console.log(result);
      this.router.navigateByUrl('/detail/:_id');
    });
  }


}
