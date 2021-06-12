import { Component } from '@angular/core';
import { PortafolioService } from '../service/portafolio.service';



@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent{

  get projects(){
    return this.portafolioService.projects
  }
  constructor(private portafolioService: PortafolioService){}
}