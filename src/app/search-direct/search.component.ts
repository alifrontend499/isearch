import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
// import { SearchItem } from './searchItem/SearchItem';
import { ItunesService } from './itunesServ/itunes.service';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  // results: Observable<SearchItem[]>;
  results: Object[];
  searchField: FormControl = new FormControl();
  loading: boolean = false;
  isInputText: boolean = false;
  isSearch: boolean = false;
  constructor(private itunesService: ItunesService, private route: ActivatedRoute, private router: Router) {
    // NEW
    // this.route.params.subscribe(params => {
    //   if (params['name']) {
    //     console.log(params);
    //   }
    // });
    // this.route.params.subscribe(params => {
    //   if (params['name'] && params['name'] !== 'null') {
    //     console.log(params);
    //   }
    // });
  }

  ngOnInit() {
    // FOCUS INPUT WHEN FIRST LOAD
    (function () {
      let inp: any = document.querySelector('#searchInput');
      inp.focus();
    }());

    // FETCHINGDATA
    this.searchField.valueChanges
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        tap(() => {
          this.loading = true;
        }),
        switchMap(searchTerm => {
          return this.itunesService.getData(searchTerm)
        })).subscribe(data => {
          this.loading = false;
          this.results = data;
        });

  }
  // ON FOCUS DISPLAY CROSS
  searchFocus(elem) {
    if (elem.target.value !== "") {
      this.isInputText = true;
      this.isSearch = true;
    } else {
      this.isInputText = false;
    }
  }
  // EMPTY THE SEARCH INPUT
  emptysearch(elem) {
    let inp: any = document.querySelector('#searchInput');
    inp.value = '';
    this.isInputText = false;
  }
  // NEW
  // doSearch(term: string) {
  //   this.router.navigate(['search', { name: term }]);
  // }
}
