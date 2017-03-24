import { PostComponent } from './post/post.component';
import { AppComponent } from './app.component';
import { ModuleWithProviders } from '@angular/core';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';



const appRoutes: Routes=[
    
    { path: 'home' , component: HomeComponent},
     { path: 'post' , component: PostComponent},
  

];

@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]

})

export  class  AppRoutingModule{




}