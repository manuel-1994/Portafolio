import { Component} from '@angular/core';
import { PortafolioService } from '../service/portafolio.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  get contact(){
    return this.portafolioService.contact
  }
  constructor(private portafolioService: PortafolioService){}

}
