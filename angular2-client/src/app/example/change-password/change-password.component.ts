import { Component, OnInit } from '@angular/core';

import { Angular2TokenService } from 'angular2-token';

import { AuthData } from '../';

@Component({
    selector: 'change-password',
    templateUrl: 'change-password.component.html'
})
export class ChangePasswordComponent {

    private _authData: AuthData = <AuthData>{};
    private _output: any;

    constructor(private _tokenService: Angular2TokenService) { }

    // Submit Data to Backend
    onSubmit() {

        this._output = null;

        this._tokenService.updatePassword(
            this._authData.password,
            this._authData.passwordConfirmation,
            this._authData.currentPassword
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
