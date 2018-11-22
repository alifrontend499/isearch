import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItunesService {

  constructor(private http: Http) { }
  itunesAPI = "https://itunes.apple.czom/search";

  // GETTING DATA
  getData(searchData, limit = 20): Observable<Object> {
    return this.http.get(`${this.itunesAPI}?term=${searchData}&limit=${limit}`);
  }

}
