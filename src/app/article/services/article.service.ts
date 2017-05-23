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
    editArticleDetailUrl = `${this.baseUrl}articleData/editArticle`;
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

    getArticleDetail(id:any, edit?): Observable<any> {

        return this.http.get(this.getArticleDetailUrl + `?_id=${id}${edit ? '&edit=' + edit : ''}`)
            .map((res: Response) => res.json())
    }

    editArticleDetail(body:any): Observable<any> {
        return this.http.post(this.editArticleDetailUrl, body)
            .map((res: Response) => res.json())
    }

    getIndex(): Observable<any> {
        return this.http.get(this.getIndexUrl)
            .map((res: Response) => res.json())
    }

}
