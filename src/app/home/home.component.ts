import { HomeService } from './home.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Rx';
import { ActivatedRoute } from '@angular/router';


  


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})




export class HomeComponent implements OnInit {


/*private homePosts: any[] = [{id:1, nome: 'Aluno 01' , email: 'aluno01@mail.com'},
  {id:2, nome: 'Aluno 02' , email: 'aluno02@mail.com'},
  {id:3, nome: 'Aluno 03' , email: 'aluno03@mail.com'}];
*/

private homePosts: any[] = [];


  constructor(
    private homeService: HomeService
    ) { }

  ngOnInit() {

    this.homePosts= this.homeService.getHomePosts();

  }

}
