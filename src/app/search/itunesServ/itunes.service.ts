import { Injectable } from '@angular/core';
import { SearchItem } from '../searchItem/SearchItem';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ItunesService {

  constructor(private http: Http) { }
  itunesAPI = "https://itunes.apple.com/search";

  // GETTING DATA
  // getData(searchData, limit = 20): Observable<SearchItem[]> {
  getData(searchData, limit = 20): Observable<SearchItem[]> {
    let apiUrl = `${this.itunesAPI}?term=${searchData}&media=music&limit=${limit}`;
    return this.http.get(apiUrl).pipe(map(res => {
      return res.json().results.map(item => {
        return new SearchItem(
          item.trackName,
          item.artistName,
          item.collectionViewUrl,
          item.collectionName,
          item.artworkUrl60
        )
      })
    }))
  }

  getArtist(userId) {
    let apiUrl = `${this.itunesAPI}?lookup?id=${userId}`;
  }

}
