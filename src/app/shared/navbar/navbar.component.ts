import { Component} from '@angular/core';
import { SharedService } from '../service/shared.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  get menuList(){
    return this.sharedService.menuList
  }
  constructor(private sharedService: SharedService){}
}
