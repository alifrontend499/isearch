import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ItunesService } from './itunesServ/itunes.service';
import { Observable, pipe } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  providers: [ItunesService]
})
export class SearchComponent implements OnInit {
  results: Object[];
  searchField: FormControl;
  constructor(private itunesService: ItunesService) { }

  ngOnInit() {
    // FOCUS INPUT WHEN FIRST LOAD
    (function () {
      let inp: any = document.querySelector('#searchInput');
      inp.focus();
    }());
  }

  // ON FOCUS DISPLAY CROSS
  isText = false;
  searchFocus(elem) {
    if (elem.target.value !== "") {
      this.isText = true;
    } else {
      this.isText = false;
    }

    // console.log(elem.target.value);
    // elem.target.value.pipe(debounceTime(400)).subscribe(res => {
    //   console.log(res);
    // });

    // this.itunesService.getData(elem.target.value).subscribe((res: any) => {
    //   this.results = res.json().results;
    //   console.log(res.json().results);
    //   console.log(this.results);
    // })
  }
  // EMPTY THE SEARCH INPUT
  emptysearch(elem) {
    let inp: any = document.querySelector('#searchInput');
    inp.value = '';
    this.isText = false;
  }

}
