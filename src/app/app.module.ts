import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeMenuComponent } from './home/home-menu/home-menu.component';
import { AppRoutingModule }  from './app.routing.module';
import { PostComponent } from './post/post.component';
import { PostMenuComponent } from './post/post-menu/post-menu.component';
import { MaterializeModule } from 'angular2-materialize';
import {MaterializeDirective} from "angular2-materialize";
import { HomeModule } from './home/home.module';



@NgModule({
  declarations: [
    AppComponent,
    //HomeMenuComponent,
    PostComponent,
    PostMenuComponent,
    MaterializeDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports:[MaterializeDirective]
})
export class AppModule { }
