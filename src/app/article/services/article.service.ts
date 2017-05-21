/**
 * Created by black.ren on 2017/4/26.
 */
import { Injectable } from '@angular/core';

import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { environment } from '../../../environments/environment';

@Injectable()
export class ArticleService {
    // baseUrl = 'http://localhost:3000/';
    baseUrl = environment.hostUrl;
    addArticleUrl = `${this.baseUrl}articleData/addArticle`;
    getArticleUrl = `${this.baseUrl}articleData/getArticle`;
    getArticleDetailUrl = `${this.baseUrl}articleData/getArticleById`;
    getIndexUrl = `${this.baseUrl}indexData/getIndex`;

    constructor(
        private http: Http
    ) {}

    addArticle(articleData): Observable<any> {
        return this.http.post(this.addArticleUrl, articleData)
            .map((res: Response) => res.json())
    }

    getArticle(tabId:any): Observable<any> {
        return this.http.get(this.getArticleUrl + `?tabId=${tabId}`)
            .map((res: Response) => res.json())
    }

    getArticleDetail(id:any): Observable<any> {
        console.log(id)
        return this.http.get(this.getArticleDetailUrl + `?_id=${id}`)
            .map((res: Response) => res.json())
    }

    editArticleDetail(id:any): Observable<any> {
        return this.http.get(this.getArticleDetailUrl + `?_id=${id}&edit=1`)
            .map((res: Response) => res.json())
    }

    getIndex(): Observable<any> {
        return this.http.get(this.getIndexUrl)
            .map((res: Response) => res.json())
    }

}
