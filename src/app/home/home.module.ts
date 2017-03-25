import { HomeService } from './home.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeMenuComponent } from './home-menu/home-menu.component';
import { HomeCategoriaComponent } from './home-categoria/home-categoria.component';


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
       HomeComponent,
       HomeMenuComponent,
       HomeCategoriaComponent
    ],
    providers:[HomeService]
})


export class HomeModule{

}