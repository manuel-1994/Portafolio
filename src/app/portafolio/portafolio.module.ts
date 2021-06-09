import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortafolioServices } from './services/portafolio.services';
import { MainPageComponent } from './main-page/main-page.component';



@NgModule({
  declarations: [
    MainPageComponent
  ],
  exports:[MainPageComponent],
  imports: [
    CommonModule
  ],
  providers:[
    PortafolioServices
  ]
})
export class PortafolioModule { }
