import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../people.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  chosenUser: object = {};
  errorMessage: String = '';

  constructor(
    private ps: PeopleService
  ) { }

  ngOnInit() {
    this.getChosenUser();
  }

  public getChosenUser() {
    const chosenUserFromService = this.ps.chosendUser;
    if (!chosenUserFromService) {
      this.chosenUser = {};
      this.errorMessage = 'Opps, something went wrong with the user';
    } else if (chosenUserFromService) {
      this.chosenUser = chosenUserFromService;
      console.log(this.chosenUser);
    }
  }

}
