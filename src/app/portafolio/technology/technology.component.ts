import { Component} from '@angular/core';
import { PortafolioService } from '../service/portafolio.service';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css']
})
export class TechnologyComponent {
  get technologyList(){
    return this.portafolioService.technologyList
  }
  constructor(private portafolioService: PortafolioService){}
}
