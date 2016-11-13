import { Component, OnInit } from '@angular/core';

import { Angular2TokenService, UpdatePasswordData } from 'angular2-token';

@Component({
    selector: 'change-password',
    templateUrl: 'change-password.component.html'
})
export class ChangePasswordComponent {

    private _updatePasswordData: UpdatePasswordData = <UpdatePasswordData>{};
    private _output: any;

    constructor(private _tokenService: Angular2TokenService) { }

    // Submit Data to Backend
    onSubmit() {

        this._output = null;

        this._tokenService.updatePassword(this._updatePasswordData).subscribe(
            res => {
                this._updatePasswordData    = <UpdatePasswordData>{};
                this._output                = res;
            }, error => {
                this._updatePasswordData    = <UpdatePasswordData>{};
                this._output                = error;
            }
        );
    }
}
