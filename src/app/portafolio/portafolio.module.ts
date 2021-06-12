import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { TechnologyComponent } from './technology/technology.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';




@NgModule({
  declarations: [
    MainPageComponent,
    NavbarComponent,
    WelcomeComponent,
    TechnologyComponent,
    ProjectsComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent
  ],
  exports:[
    MainPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PortafolioModule { }
