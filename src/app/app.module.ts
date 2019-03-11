// ANGULAR MODULES
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpModule, JsonpModule } from '@angular/http';
import { HttpClientModule, HttpClientJsonpModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// FIREBASE
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';

// SERVICES
import { AuthService } from './firebase/auth.service';
import { FirestoreService } from './firebase/firestore.service';
import { ItunesService } from './search/itunesServ/itunes.service';
import { IsLoggedinService } from './authGuard/is-loggedin.service';

// HTTP INTERCEPTOR
import { AuthInterceptor } from './Auth/auth.interceptor';

// COMPONENTS
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ArtistComponent } from './artist/artist.component';
import { ArtistSongsComponent } from './artist/artist-songs/artist-songs.component';
import { ArtistAlbumsComponent } from './artist/artist-albums/artist-albums.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

// GUARDS
import { AuthGuard } from './authGuard/auth.guard';
import { CheckuserGuard } from './authGuard/checkuser.guard';

// ROUTING
import { AppRoutingModule } from './app-routing.module';

// ROUTING LINKS
const routes: Routes = [
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'search', component: SearchComponent, canActivate: [CheckuserGuard] },
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
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    JsonpModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [
    ItunesService,
    AuthGuard,
    IsLoggedinService,
    AuthService,
    FirestoreService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
