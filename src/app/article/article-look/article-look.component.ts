import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { ArticleService } from '../services/article.service';
import { article } from '../model';

@Component({
  selector: 'article-look',
  templateUrl: './article-look.component.html',
  styleUrls: ['./article-look.component.scss']
})
export class ArticleLookComponent implements OnInit {
  articleData:article;
  constructor(
    private activatedRoute: ActivatedRoute,
    private articleService: ArticleService
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      params => {
        this.articleService.getArticleDetail(params["id"]).subscribe(
          res => {
            this.articleData = res;
            console.log(res)
          },
          err => { console.log(err) }
        )
      }
    )
  }
}
