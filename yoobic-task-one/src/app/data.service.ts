import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  gifUrl = 'https://www.reddit.com/r/gifs/new/.json?limit=10';

  constructor(
    private http: Http
  ) { }

  public getGifsData() {
    return this.http.get(this.gifUrl).pipe(map((response: any) => response.json()));
  }
}
