import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ItunesService } from './search/itunesServ/itunes.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ArtistComponent } from './artist/artist.component';
import { ArtistSongsComponent } from './artist/artist-songs/artist-songs.component';
import { ArtistAlbumsComponent } from './artist/artist-albums/artist-albums.component';

// ROUTING LINKS
const routes: Routes = [
  { path: 'search', component: SearchComponent },
  // { path: 'artist', component: ArtistComponent },
  {
    path: 'artist/:artistId',
    component: ArtistComponent,
    children: [
      { path: '', redirectTo: 'tracks', pathMatch: 'prefix' },
      { path: 'tracks', component: ArtistSongsComponent },
      { path: 'albums', component: ArtistAlbumsComponent },
    ]
  },
  { path: '', redirectTo: "search", pathMatch: 'full' },
  { path: '**', component: PagenotfoundComponent, pathMatch: 'full' }
]

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    PagenotfoundComponent,
    ArtistComponent,
    ArtistSongsComponent,
    ArtistAlbumsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    JsonpModule
  ],
  providers: [
    ItunesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
