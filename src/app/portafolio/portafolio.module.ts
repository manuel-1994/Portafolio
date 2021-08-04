import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { TechnologyComponent } from './pages/technology/technology.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';




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
