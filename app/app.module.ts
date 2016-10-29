import { NgModule }      from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, ActivatedRoute }   from '@angular/router';

import { AppComponent }  from './app.component';

import { Home }  from './views/home/index';
import { OtherProjects }  from './views/otherProjects/index';
import { OneFilm }  from './views/oneFilm/index';

import { Menu } from './components/menu/index';
import { Film } from './components/film/index';
import { FilmList } from './components/film/components/filmList/index';
import { AddFilm } from './components/film/components/addFilm/index';

import { Routes } from './router';


 
@NgModule({
  imports:      [ BrowserModule, MaterialModule, FormsModule, RouterModule.forRoot(Routes)],
  declarations: [ AppComponent, Menu, Home, OneFilm, OtherProjects, Film, AddFilm, FilmList ],
  bootstrap:    [ AppComponent ]
})
 
export class AppModule { }