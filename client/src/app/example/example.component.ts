import { Component, OnInit } from '@angular/core';

import { Angular2TokenService } from 'angular2-token';

@Component({
    selector: 'example',
    templateUrl: 'example.component.html',
    styleUrls: ['example.component.scss']
})
export class ExampleComponent {

    constructor(public tokenService: Angular2TokenService) {
        this.tokenService.init();
    }

}