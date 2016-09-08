import { Injectable }     from '@angular/core';
import { CanActivate }    from '@angular/router';
import { Angular2TokenService } from 'angular2-token';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private _tokenService: Angular2TokenService) { }

    canActivate() {
        console.log(this._tokenService.currentUserData);
        return false;
    }
}