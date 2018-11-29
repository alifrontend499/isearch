import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ItunesService } from './itunesServ/itunes.service';
import { IsLoginService } from '../artist/isLoginServ/is-login.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchField: FormControl = new FormControl();
  isSearch: boolean = false;
  loading: boolean = false;
  noResult: boolean = false;
  results: Object[];
  constructor(private itunesService: ItunesService, private route: ActivatedRoute, private router: Router, private isLoginServ: IsLoginService) {
    this.route.params.subscribe(params => {
      if (params['name'] && params['name'] !== 'null') {
        this.isSearch = true;
        this.loading = true;
        this.itunesService.getData(params['name']).subscribe(res => {
          this.results = res;
          this.loading = false;
          if (this.results.length == 0) {
            this.noResult = true;
          } else {
            this.noResult = false;
          }
        })
      }
    });
  }

  ngOnInit() {
    // FOCUS INPUT WHEN FIRST LOAD
    (function () {
      let inp: any = document.querySelector('#searchInput');
      inp.focus();
    }());
  }
  // BUTTON CLICK
  doSearch(term: string) {
    let inp: any = document.querySelector('#searchInput');
    if (inp.value !== "") {
      this.isSearch = true;
      this.isLoginServ.isLoginUser = true;
      this.router.navigate(['search', { name: term }]);
    }
  }
}
