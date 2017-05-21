import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServices } from './services/login.services';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {
    isShowLogin:boolean = true;
    loginData:any = {};
    loginError: string;
    registerData: any = {};
    registerError: string;

    constructor(
        private router: Router,
        private loginServices: LoginServices
    ) {}

    submitLogin() {
        this.loginServices.toLogin(this.loginData).subscribe(
            res => {
                console.log(res);
                if (res.code === 1) {
                    this.router.navigate(["/blog"]);
                } else {
                    this.loginError = res.error;
                }
            },
            error => {console.log(error)}
        )
    }

    submitRegister() {
        this.loginServices.toRegister(this.registerData).subscribe(
            res => {
                console.log(res);
                if (res.code === 1) {
                    this.router.navigate(["/blog"]);
                } else {
                    this.registerError = res.error;
                }
            },
            error => {console.log(error)}
        )
    }
}