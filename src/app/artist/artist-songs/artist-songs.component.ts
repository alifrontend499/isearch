import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artist-songs',
  templateUrl: './artist-songs.component.html',
  styleUrls: ['./artist-songs.component.scss']
})
export class ArtistSongsComponent implements OnInit {

  constructor(private activeRoute: ActivatedRoute) {
    activeRoute.parent.params.subscribe(res => {
    });
  }

  ngOnInit() {
  }

}
