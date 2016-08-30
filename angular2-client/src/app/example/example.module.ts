import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { Angular2TokenService } from 'angular2-token';

import {
    OutputComponent,
    ExampleComponent,
    RegisterComponent,
    SignInComponent,
    SignInOAuthComponent,
    SignOutComponent,
    ChangePasswordComponent,
    AccessResourceComponent,
    ValidateTokenComponent
} from './';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpModule
    ],
    declarations: [
        ExampleComponent,

        OutputComponent,

        RegisterComponent,
        SignInComponent,
        SignInOAuthComponent,
        ChangePasswordComponent,
        SignOutComponent,
        AccessResourceComponent,
        ValidateTokenComponent
    ],
    providers: [
        Angular2TokenService
    ],
    exports: [
        ExampleComponent
    ]
})
export class ExampleModule { }
