import { Injectable } from '@angular/core';
import { Menu, Project, Technology } from '../interface/portafolio.interface';

@Injectable({
  providedIn: 'root'
})
export class PortafolioService {

  private _menuList: Menu[] =[
    {
      name: 'Tecnologías',
      id: '#technology'
    },
    {
      name: 'Proyectos',
      id: '#projects'
    },
    {
      name: 'Sobre mi',
      id: '#about'
    },
    {
      name: 'Contactame',
      id: '#contact'
    },
  ]
 
  private _technologyList: Technology[]=[
    {
      name: 'HTML',
      img: '/assets/html5.svg'
    },
    {
      name: 'CSS',
      img: '/assets/css3.svg'
    },
    {
      name: 'JAVASCRIPT',
      img: '/assets/javascript.svg'
    },
    {
      name: 'ANGULAR',
      img: '/assets/angular.svg'
    },
    {
      name: 'VUE',
      img: '/assets/vuejs.svg'
    },
    {
      name: 'GIT',
      img: '/assets/git.svg'
    },
    {
      name: 'GITHUB',
      img: '/assets/github.svg'
    },
    {
      name: 'FIREBASE',
      img: '/assets/firebase.svg'
    }
  ]

  private _projects: Project[]=[
    {
      subtitle: 'proyecto',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium ipsam totam blanditiis cum exercitationem recusandae et eligendi assumenda doloribus obcaecati excepturi sapiente explicabo nobis commodi, qui architecto atque voluptate expedita.',
      development: 'desarrollado en...',
      img: 'assets/fotoWelcome.jpg'
  }
  ]


  get menuList(): Menu[]{
    return [...this._menuList]
  }

  get technologyList(): Technology[]{
    return [...this._technologyList]
  }

  get projects(): Project[]{
    return [...this._projects]
  }
  
}
