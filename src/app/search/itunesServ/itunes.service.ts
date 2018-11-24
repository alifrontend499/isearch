import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
class SearchItem {
  constructor(
    public name: string,
    public artist: string,
    public link: string,
    public album: string,
    public thumbnail: string) {
  }
}
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

}
