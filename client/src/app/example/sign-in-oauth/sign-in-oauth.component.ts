import { Component, OnInit } from '@angular/core';

import { Angular2TokenService } from 'angular2-token';

@Component({
    selector: 'sign-in-oauth',
    templateUrl: 'sign-in-oauth.component.html'
})
export class SignInOAuthComponent {

    output: any;

    constructor(private _tokenService: Angular2TokenService) { }

    // Submit Data to Backend
    onSubmit() {

        this.output = null;

        this._tokenService.signInOAuth('github');
    }
}
