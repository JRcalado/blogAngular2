import { HomeService } from './home.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeMenuComponent } from './home-menu/home-menu.component';


@NgModule({
    imports:[
        CommonModule,
    // CursosRoutingModule
        //RouterModule
    ],
    exports:[],
    declarations:[
       // CursosComponent,
       // CursoDetalheComponent,
       // CursoNaoEncontradoComponent
       HomeMenuComponent
    ],
    providers:[HomeService]
})


export class HomeModule{

}