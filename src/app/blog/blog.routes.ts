import { BlogComponent } from './blog.component';
import { ArticleLookComponent } from '../article/article-look/article-look.component';

export const blogRoutes=[
  {
    path: '',
    component: BlogComponent,
    children: [
    {
      path:'',
      loadChildren:'../index/index.module#IndexModule'
    }, {
      path:'list',
      loadChildren:'../list/list.module#ListModule'
    }, {
      path:'list/article/:id',
      component: ArticleLookComponent
    }]
  }
];
