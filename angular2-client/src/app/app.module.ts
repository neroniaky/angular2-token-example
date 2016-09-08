import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { Angular2TokenService } from 'angular2-token';

import {
    AppComponent,
    ExampleModule,
    RestrictedModule,
    routes
} from './';

@NgModule({
    imports: [
        routes,
        BrowserModule,
        HttpModule,
        ExampleModule,
        RestrictedModule
    ],
    providers: [
        Angular2TokenService
    ],
    declarations: [ AppComponent ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
