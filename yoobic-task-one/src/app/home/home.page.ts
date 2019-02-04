import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../people.service';
import { LoadingController } from '@ionic/angular';

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
    public loadingController: LoadingController
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


}
