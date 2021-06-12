import { Component} from '@angular/core';
import { PortafolioService } from '../service/portafolio.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  get menuList(){
    return this.portafoliService.menuList
  }
  constructor(private portafoliService: PortafolioService){}
}
