import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  public peopleList = new Subject<any>();

  baseStarwarsUrl = 'https://swapi.co/api/';

  constructor(
    private http: Http
  ) { }

  public getUsersList() {
    return this.http.get(this.baseStarwarsUrl + 'people').pipe(map((response: any) => response.json()));
  }

  public getSingleUser(personId) {
    return this.http.get(this.baseStarwarsUrl + 'people/' + personId).pipe(map((response: any) => response.json()));
  }
}
