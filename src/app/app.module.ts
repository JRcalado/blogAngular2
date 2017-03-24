import { HomeService } from './home/home.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HomeMenuComponent } from './home/home-menu/home-menu.component';
import { AppRoutingModule }  from './app.routing.module';
import { PostComponent } from './post/post.component';
import { PostMenuComponent } from './post/post-menu/post-menu.component';
import { MaterializeModule } from 'angular2-materialize';
import {MaterializeDirective} from "angular2-materialize";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeMenuComponent,
    PostComponent,
    PostMenuComponent,
    MaterializeDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [HomeService],
  bootstrap: [AppComponent],
  exports:[MaterializeDirective]
})
export class AppModule { }
