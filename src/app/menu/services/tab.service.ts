/**
 * Created by black.ren on 2017/4/28.
 */

import { Injectable } from '@angular/core';

import { Http, Response, Headers, RequestOptions,URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { environment } from '../../../environments/environment';

@Injectable()
export class TabService {
  baseUrl = environment.hostUrl;
  getTabUrl = `${this.baseUrl}tabData/getTab`;

  constructor(
    private http: Http
  ) {}

  getTab():Observable<any> {
    return this.http.get(this.getTabUrl)
      .map((res: Response) => {
        sessionStorage.setItem('tabData', JSON.stringify(res.json()));
        return res.json()
      })
  }
}
