import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  randomUserMeUrl = 'https://randomuser.me/api/?results=10';
  chosendUser: object = {};

  constructor(
    private http: Http
  ) { }

  public getUsersList() {
    return this.http.get(this.randomUserMeUrl).pipe(map((response: any) => response.json()));
  }
}
