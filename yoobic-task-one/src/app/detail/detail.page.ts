import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../people.service';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  chosenUser: any;
  errorOccured: Boolean = false;
  errorMessage: String = '';
  gifsArr: any = [];
  randomGif: any;
  randomGifExists: Boolean = false;
  showGifIframe: Boolean = false;

  constructor(
    private ps: PeopleService,
    private dataService: DataService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.getChosenUser();
  }

  public getChosenUser() {
    const chosenUserFromService = this.ps.chosendUser;
    console.log(chosenUserFromService);
    if (!chosenUserFromService) {
      this.returnToHome();
    } else if (chosenUserFromService) {
      this.chosenUser = chosenUserFromService;
      this.loadData();
    }
  }

  public loadData() {
    if (!this.chosenUser) {
      this.errorOccured = true;
      this.errorMessage = 'Oops, something went wrong. Going Home!';
      this.returnToHome();
    } else {
      console.log(this.chosenUser);
      this.fetchRandomGif();
    }
  }

  public fetchRandomGif() {
    this.dataService.getGifsData().subscribe(result => {
      this.gifsArr = result.data.children;
      this.fetchSingleGif();
    });
  }

  public fetchSingleGif() {
    const rand = this.gifsArr[Math.floor(Math.random() * this.gifsArr.length)];
    this.randomGif = rand.data;
    this.randomGifExists = true;
  }

  public seeGif() {
    this.showGifIframe = true;
  }

  public returnToHome() {
    this.router.navigateByUrl('home');
  }

}
