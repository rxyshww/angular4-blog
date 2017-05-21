import { articleComponent } from './article.component';
import { ArticleWriteComponent } from './article-write/article-write.component';

export const articleRoutes = [
    {
      path: '',
      component: articleComponent,
      children: [
        {
          path:'',
          component: ArticleWriteComponent
        },{
          path:':id',
          component: ArticleWriteComponent
        }
      ]
    }
];
