import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { TechnologyComponent } from './technology/technology.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';




@NgModule({
  declarations: [
    MainPageComponent,
    WelcomeComponent,
    TechnologyComponent,
    ProjectsComponent,
    AboutComponent,
    ContactComponent,
  ],
  exports:[
    MainPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PortafolioModule { }
