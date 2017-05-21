import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ArticleService } from '../article/services/article.service';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit{
  listData;
    articleListTitle;

  constructor(
    private articleService: ArticleService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
      this.activatedRoute.params.subscribe(
          params => {
              if (params.tabName) {
                  this.articleListTitle = params.tabName
              } else {
                  this.articleListTitle = "文章列表";
              }
              this.getArticleList(params._id);
          }
      )

  }

  getArticleList(tabId) {
      tabId = tabId || "";
    this.articleService.getArticle(tabId).subscribe(
      res => {
        this.listData = res;
      },
      err => {console.log(err)}
    )
  }
}
