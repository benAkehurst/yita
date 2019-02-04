import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  public peopleList = new Subject<any>();

  starwarsUrl = 'https://swapi.co/api/people';

  constructor(
    private http: Http
  ) { }

  public getUsersList() {
    return this.http.get(this.starwarsUrl).pipe(map((response: any) => response.json()));
  }
}
