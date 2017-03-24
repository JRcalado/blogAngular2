import { Injectable } from '@angular/core';

import { Home } from './home';

@Injectable()
export class HomeService {


private homePost: Home[] = [
    {
    id:1, 
    titulo: 'Certificação php' , 
    categoria: 'BackEnd',
    autor: 'Ricardo Clado',
    descricao: 'Tutorial completo sobre certificação php',
    tags: ['PHP','BACKAND','CERTIFICAÇÃO'],
    post: "dfgsfszfgwsdgsdfgsdfgsdfgsdfgsdfgsdfgsdfgsdfgsdfgsdfgsdfgsdfg",
    data: '2016-22-45',
    img_capa:'http://lorempixel.com/400/200/',
    img:'',

  },
     {
    id:2, 
    titulo: 'Angular2' , 
    categoria: 'FrontEnd',
    autor: 'Ricardo Clado',
    descricao: 'Tutorial completo sobre Angular',
    tags: ['ANGULAR','FRONTEND'],
    post: 'dfgsfszfgwsdgsdfgsdfgsdfgsdfgsdfgsdfgsdfgsdfgsdfgsdfgsdfgsdfg',
    data: '2016-22-45',
    img_capa:'http://lorempixel.com/400/200/sports/',
    img:'',
 },
  { id:3, 
    titulo: 'Mysql' , 
    categoria: 'Banco de Dados',
    autor: 'Ricardo Clado',
    descricao: 'Tutorial completo sobre Mysql',
    tags: ['PHP','BACKAND','CERTIFICAÇÃO'],
    post: "dfgsfszfgwsdgsdfgsdfgsdfgsdfgsdfgsdfgsdfgsdfgsdfgsdfgsdfgsdfg",
    data: '2016-22-45',
    img_capa:'http://lorempixel.com/400/200/',
    img:'',

  }
  
  


];




  getHomePosts(){

    return this.homePost;

  }


  getHomePost(id: number){
    for (let i=0; i<this.homePost.length; i++){
      let homePost = this.homePost[i];
      if(homePost.id == id){
        return homePost;
      }

    }

  }

  constructor() { }

}
