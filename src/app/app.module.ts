import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ItunesService } from './search/itunesServ/itunes.service';
import { IsLoggedinService } from './authGuard/is-loggedin.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ArtistComponent } from './artist/artist.component';
import { ArtistSongsComponent } from './artist/artist-songs/artist-songs.component';
import { ArtistAlbumsComponent } from './artist/artist-albums/artist-albums.component';
import { LoginComponent } from './login/login.component';

import { AuthGuard } from './authGuard/auth.guard';
// ROUTING LINKS
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'search', component: SearchComponent, canActivate: [AuthGuard] },
  {
    path: 'artist/:artistId',
    component: ArtistComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'tracks', pathMatch: 'prefix' },
      { path: 'tracks', component: ArtistSongsComponent },
      { path: 'albums', component: ArtistAlbumsComponent },
    ]
  },
  { path: '', redirectTo: "login", pathMatch: 'full' },
  { path: '**', component: PagenotfoundComponent, pathMatch: 'full' }
]

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    PagenotfoundComponent,
    ArtistComponent,
    ArtistSongsComponent,
    ArtistAlbumsComponent,
    LoginComponent
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
    ItunesService,
    AuthGuard,
    IsLoggedinService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
