import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  dogUrl = 'https://dog.ceo/api/breeds/image/random';

  constructor(
    private http: Http
  ) { }

  public getDogsData() {
    return this.http.get(this.dogUrl).pipe(map((response: any) => response.json()));
  }
}
