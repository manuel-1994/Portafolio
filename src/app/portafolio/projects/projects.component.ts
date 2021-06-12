import { Component } from '@angular/core';
import { Project } from './interface/projects.interface';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent{

projects: Project[]=[
  {
    subtitle: 'proyecto',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium ipsam totam blanditiis cum exercitationem recusandae et eligendi assumenda doloribus obcaecati excepturi sapiente explicabo nobis commodi, qui architecto atque voluptate expedita.',
    development: 'desarrollado en...',
    img: 'assets/fotoWelcome.jpg'
}
]
}