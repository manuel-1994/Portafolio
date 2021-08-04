import { Component} from '@angular/core';
import { PortafolioService } from '../../services/portafolio.service';

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
