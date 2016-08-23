import { Component, OnInit } from '@angular/core';

import { Angular2TokenService } from 'angular2-token';

import { AuthData } from '../';

@Component({
    selector: 'register',
    templateUrl: 'register.component.html',
    styleUrls: ['register.component.scss']
})
export class RegisterComponent {

    private _authData: AuthData = <AuthData>{};
    private _output: any;

    constructor(private _tokenService: Angular2TokenService) { }

    // Submit Data to Backend
    onSubmit() {

        this._output = null;

        this._tokenService.registerAccount(
            this._authData.email,
            this._authData.password,
            this._authData.passwordConfirmation
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
