import { Component, OnInit } from '@angular/core';

import { Angular2TokenService } from 'angular2-token';

import { AuthData } from '../';

@Component({
    selector: 'sign-in',
    templateUrl: 'sign-in.component.html'
})
export class SignInComponent {

    private _authData: AuthData = <AuthData>{};
    private _output: any;

    constructor(private _tokenService: Angular2TokenService) { }

    // Submit Data to Backend
    onSubmit() {

        this._output = null;

        this._tokenService.signIn(
            this._authData.email,
            this._authData.password
        ).subscribe(
            res => {
                this._authData  = <AuthData>{};
                this._output    = res;
            }, error => {
                this._authData  = <AuthData>{};
                this._output    = error;
            }
        );
    }
}
