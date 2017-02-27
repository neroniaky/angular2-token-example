import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Angular2TokenService } from 'angular2-token';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    constructor(private _tokenService: Angular2TokenService) {
        this._tokenService.init();
    }
}
