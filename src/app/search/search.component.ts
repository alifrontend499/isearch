import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ItunesService } from './itunesServ/itunes.service';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  results: Object[];
  searchField: FormControl = new FormControl();
  loading: boolean = false;
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

    // LOADING ICONS AND EMPTY THE RESULT FIELD
    this.loading = true;
    this.results = [];
    // FETCHING DATA
    // this.searchField.valueChanges.pipe(debounceTime(400)).pipe(distinctUntilChanged()).subscribe(vals => {
    //   this.loading = false;
    //   this.results = vals;
    // });
    this.itunesService.getData(elem.target.value).subscribe(data => {
      this.loading = false;
      this.results = data;
    });
  }
  // EMPTY THE SEARCH INPUT
  emptysearch(elem) {
    let inp: any = document.querySelector('#searchInput');
    inp.value = '';
    this.isText = false;
  }
}
