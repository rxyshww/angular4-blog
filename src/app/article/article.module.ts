import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

import { articleComponent } from './article.component';
import { ArticleWriteComponent } from './article-write/article-write.component';
import { articleRoutes } from './article.routes';

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(articleRoutes)
    ],
    exports: [],
    declarations: [
        articleComponent,
        ArticleWriteComponent
    ],
    providers: []
})
export class ArticleModule { }
