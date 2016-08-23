import { Component, OnInit } from '@angular/core';

import { Angular2TokenService } from 'angular2-token';

@Component({
    selector: 'sign-out',
    templateUrl: 'sign-out.component.html'
})
export class SignOutComponent {

    private _output: any;

    constructor(private _tokenService: Angular2TokenService) { }

    // Submit Data to Backend
    onSubmit() {

        this._output = null;

        this._tokenService.signOut().subscribe(
            res => this._output     = res,
            error => this._output   = error
        );
    }
}
