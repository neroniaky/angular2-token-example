import { Component, OnInit } from '@angular/core';
import { Angular2TokenService, RegisterData } from 'angular2-token';

@Component({
    selector: 'register',
    templateUrl: 'register.component.html',
    styleUrls: ['register.component.scss']
})
export class RegisterComponent {

    registerData: RegisterData = <RegisterData>{};
    output: any;

    constructor(private _tokenService: Angular2TokenService) { }

    // Submit Data to Backend
    onSubmit() {

        this.output = null;

        this._tokenService.registerAccount(this.registerData).subscribe(
            res => {
                this.registerData  = <RegisterData>{};
                this.output        = res;
            }, error => {
                this.registerData  = <RegisterData>{};
                this.output        = error;
            }
        );
    }
}
