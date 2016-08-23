import { RouterModule, Routes } from '@angular/router';

import { ExampleComponent } from './'

const routerConfig: Routes = [
    { path: '', component: ExampleComponent }
];

export const routes = RouterModule.forRoot(routerConfig, { useHash: true });
