import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ItunesService } from './itunesServ/itunes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchField: FormControl = new FormControl();
  constructor(private itunesService: ItunesService, private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe(params => {
      if (params['name'] && params['name'] !== 'null') {
        this.itunesService.getData(params['name']).subscribe(res => {
          console.log(res);
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
    this.router.navigate(['search', { name: term }]);
  }
}
