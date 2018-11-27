import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ItunesService } from './search/itunesServ/itunes.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

// ROUTING LINKS
const routes: Routes = [
  { path: 'search', component: SearchComponent },
  // { path: 'search/:term', component: SearchComponent },
  { path: '', redirectTo: "search", pathMatch: 'full' },
  { path: '**', component: PagenotfoundComponent, pathMatch: 'full' }
]

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    ItunesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
