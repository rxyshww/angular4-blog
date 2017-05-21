import { Component, OnInit} from '@angular/core';

import { ArticleService } from '../article/services/article.service';
import { newArticle, recommendArticle } from './model';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  newArticle:newArticle = new newArticle();
  recommendArticle:recommendArticle[];

  constructor(
     private articleService: ArticleService
  ) {}
  ngOnInit() {
    this.articleService.getIndex().subscribe(
      res => {
        this.newArticle = res.newArticle;
        this.recommendArticle = res.recommendArticle;
      },
      err => {console.log(err)}
    )
  }
}