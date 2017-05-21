import { Component, OnInit, NgZone, Inject, EventEmitter } from '@angular/core';
import { NgUploaderOptions, UploadedFile, UploadRejected } from 'ngx-uploader';
import { ArticleService } from '../services/article.service';
import { TabService } from '../../menu/services/tab.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Location } from '@angular/common';

import { environment } from '../../../environments/environment';

import { article } from '../model';

@Component({
    selector: 'article-write',
    templateUrl: './article-write.component.html',
    styleUrls: ['./article-write.component.scss']
})
export class ArticleWriteComponent implements OnInit{
    articleData:article = new article();
    articleTabs;
    tabId;

    //上传图片设置
    options: NgUploaderOptions;
    response: any;
    sizeLimit: number = 1000000; // 1MB
    previewData: any;
    errorMessage: string;
    inputUploadEvents: EventEmitter<string>;
    imgUrl: string;


    constructor(
        private location: Location,
        private articleService: ArticleService,
        private activatedRoute: ActivatedRoute,
        private tabService: TabService,
        @Inject(NgZone) private zone: NgZone
    ) {
        this.options = new NgUploaderOptions({
            //上传图片设置
            url: `${environment.hostUrl}imgData/postImg`,
            filterExtensions: true,
            allowedExtensions: ['jpg', 'png', 'doc', 'docx'],
            maxSize: 2097152,
            data: { userId: 12 },
            autoUpload: false,
            fieldName: 'file',
            fieldReset: true,
            maxUploads: 2,
            method: 'POST',
            previewUrl: true,
            withCredentials: false
        });

        this.inputUploadEvents = new EventEmitter<string>();

    }

    ngOnInit() {
        this.activatedRoute.params.subscribe(
            params => {
                const id = params["id"];
                if (id) {
                    this.articleService.editArticleDetail(id).subscribe(
                        res => {
                            this.articleData = res;
                        },
                        error => {console.log(error)}
                    )
                }
            }
        )

        this.tabService.getTab().subscribe(
            res => this.articleTabs = res,
            error => { console.log(error) }
        )
    }


    addArticle() {
        if (typeof this.response !== 'undefined') {
            this.articleData.imgUrl = this.response.imgUrl;
            this.articleData.tabsId = this.tabId;
        }
        this.articleService.addArticle(this.articleData).subscribe(
            res => {
                this.goBack();
            },
            error => {console.log(error)}
        )
    }

    goBack() {
        this.location.back();
    }

    //图片事件处理
    startUpload() {
        this.inputUploadEvents.emit('startUpload');
    }

    beforeUpload(uploadingFile: UploadedFile): void {
        if (uploadingFile.size > this.sizeLimit) {
            uploadingFile.setAbort();
            this.errorMessage = 'File is too large!';
        }
    }

    handleUpload(data: any) {
        setTimeout(() => {
            this.zone.run(() => {
                this.response = data;
                if (data && data.response) {
                    this.response = JSON.parse(data.response);
                    console.log(this.response);
                }
            });
        });
    }

    handlePreviewData(data: any) {
        this.previewData = data;
        this.startUpload();
    }
}
