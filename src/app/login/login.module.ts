import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { LoginRoutes } from './login.routes';

import { LoginComponent } from './login.component';

import { LoginServices } from './services/login.services';

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(LoginRoutes)
    ],
    exports: [],
    declarations: [
        LoginComponent
    ],
    providers: [
        LoginServices
    ]
})
export class LoginModule { }