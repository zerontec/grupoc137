import {NgModule} from '@angular/core';
import {PagesComponent} from './pages.component';
import { SharedModule } from '../shared/shared.module'; 
import { HomeComponent } from './home/home.component';
import { PAGES_ROUTES } from './pages.route';
import {SliderComponent} from '../componentes/slider/slider.component';




@NgModule({

declarations: [
    PagesComponent,
    HomeComponent,
    SliderComponent


],

exports: [PagesComponent,
          HomeComponent       ],

imports: [ SharedModule,
            PAGES_ROUTES],




})

export class PagesModule {}