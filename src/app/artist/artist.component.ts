import { Component, OnInit } from '@angular/core';
import { IsLoginService } from './isLoginServ/is-login.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent implements OnInit {

  constructor(private isLoginService: IsLoginService) { }

  ngOnInit() {
    this.isLoginService.isLoginUser = true;
  }

}
