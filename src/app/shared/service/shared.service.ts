import { Injectable } from '@angular/core';
import { Menu} from '../interface/shared.interface';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

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

  get menuList(): Menu[]{
    return [...this._menuList]
  }
}
