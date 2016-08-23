import { Component, OnInit } from '@angular/core';

import { Angular2TokenService } from 'angular2-token';

@Component({
    selector: 'access-resource',
    templateUrl: 'access-resource.component.html'
})
export class AccessResourceComponent {

    private _output: any;

    constructor(private _tokenService: Angular2TokenService) { }

    // Submit Data to Backend
    onSubmit() {

        this._output = null;

        this._tokenService.get('private_resource').subscribe(
            res => this._output     = res,
            error => this._output   = error
        );
    }
}
