import { RouterModule, Routes } from '@angular/router';

import { 
    ExampleComponent,
    RestrictedComponent
} from './';

import { Angular2TokenService } from 'angular2-token';

const routerConfig: Routes = [
    { path: '', component: ExampleComponent },
    { path: 'restricted', component: RestrictedComponent, canActivate: [Angular2TokenService] }
];

export const routes = RouterModule.forRoot(routerConfig, { useHash: true });
