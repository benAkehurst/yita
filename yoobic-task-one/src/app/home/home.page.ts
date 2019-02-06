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
  listOfGifs: any = [];
  dataLoading: Boolean = true;
  linkToShapesImage: String = '../assets/shapes.svg';

  constructor(
    private ps: PeopleService,
    private dataService: DataService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getUsersList();
    this.getGifData();
  }

  public getUsersList() {
    this.ps.getUsersList().subscribe(result => {
      console.log(result);
      this.listOfUsers = result.results;
      this.dataLoading = false;
    });
  }

  public getGifData() {
    this.dataService.getGifsData().subscribe(result => {
      result.data.children.forEach(element => {
        const newGif = {
          title: element.data.title,
          source: element.data.url
        };
        this.listOfGifs.push(newGif);
      });
    });
  }

  public selectPerson(person: any) {
    this.ps.chosendUser = person;
    this.router.navigateByUrl('detail');
  }


}
