
import {NgModule} from '@angular/core';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {NopagefoundComponent} from './nopagefound/nopagefound.component';
import {BreadcrumbsComponent} from './breadcrumbs/breadcrumbs.component';



@NgModule({

    declarations:[
        HeaderComponent,
        FooterComponent,
        NopagefoundComponent,
        BreadcrumbsComponent
        

    ],

    imports:[],

    exports:[HeaderComponent,
        FooterComponent,
        NopagefoundComponent,
        BreadcrumbsComponent,
        ],
})


export class SharedModule{}