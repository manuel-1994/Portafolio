import { Injectable } from '@angular/core';
import { Project, Technology, Contact } from '../interfaces/portafolio.interface';

@Injectable({
  providedIn: 'root'
})
export class PortafolioService {

 
  private _technologyList: Technology[]=[
    {
      name: 'HTML',
      img: 'assets/html5.svg'
    },
    {
      name: 'CSS',
      img: 'assets/css3.svg'
    },
    {
      name: 'JAVASCRIPT',
      img: 'assets/javascript.svg'
    },
    {
      name: 'REACT',
      img: 'assets/react.svg'
    },
    {
      name: 'GIT',
      img: 'assets/git.svg'
    },
    {
      name: 'GITHUB',
      img: 'assets/github.svg'
    },
    {
      name: 'FIREBASE',
      img: 'assets/firebase.svg'
    }
  ]
  
  private _projects: Project[]=[
    {
      subtitle: 'DebtsApp',
      description: 'Aplicación de deudas (Aun en desarrollo)',
      development: 'Desarrollado en html, css y javaScript (proximamente en react o Angular)',
      githubUrl: 'https://github.com/manuel-1994/DebtsApp-Js',
      demoUrl: 'https://github.com/manuel-1994/DebtsApp-Js',
      img: 'assets/debtsApp.png'
  }
  ]

  private _contact: Contact[]=[
    {
      socialName: 'Linkedin',
      url: 'https://www.linkedin.com/in/manuel-marin-70519116a'
    },
    {
      socialName: 'GitHub',
      url: 'https://github.com/manuel-1994'
    },

  ]

  get technologyList(): Technology[]{
    return [...this._technologyList]
  }

  get projects(): Project[]{
    return [...this._projects]
  }

  get contact(): Contact[]{
    return [...this._contact]
  }
  
}
