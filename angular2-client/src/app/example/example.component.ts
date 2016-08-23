import { Component, OnInit } from '@angular/core';

import { Angular2TokenService } from 'angular2-token';

@Component({
    selector: 'example',
    templateUrl: 'example.component.html',
    styleUrls: ['example.component.scss']
})
export class ExampleComponent {

    private _showImprint: boolean = false;

    constructor(private _tokenService: Angular2TokenService) {
        this._tokenService.init();
    }

}