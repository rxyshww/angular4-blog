import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

import { BlogComponent } from './blog.component';
import { ArticleLookComponent } from '../article/article-look/article-look.component';

import { blogRoutes } from './blog.routes';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(blogRoutes)
  ],
  exports: [],
  declarations: [
    BlogComponent,
    ArticleLookComponent
  ],
  providers: []
})
export class BlogModule { }