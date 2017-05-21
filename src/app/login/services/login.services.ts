import { Injectable } from '@angular/core';

import { Http, Response, Headers, RequestOptions,URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { environment } from '../../../environments/environment';

@Injectable()
export class LoginServices {
    baseUrl = environment.hostUrl;
    loginUrl = `${this.baseUrl}userData/login`;
    registerUrl = `${this.baseUrl}userData/register`;

    constructor(
        private http: Http
    ) {}

    toLogin(loginData):Observable<any> {
        return this.http.post(this.loginUrl, loginData)
            .map((res: Response) => res.json())
    }

    toRegister(registerData): Observable<any> {
        return this.http.post(this.registerUrl, registerData)
        .map((res: Response) => res.json())
    }
}
