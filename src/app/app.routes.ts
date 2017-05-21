import { Routes } from '@angular/router';
import { ItemComponent } from './list/item/item.component';

export const appRoutes: Routes = [
  {
    path:'',
		redirectTo: 'blog',
		pathMatch: 'full'
  }, {
    path:'blog',
    loadChildren:'./blog/blog.module#BlogModule'
  }, {
    path:'article',
    loadChildren:'./article/article.module#ArticleModule'
  }, {
    path: 'loginCtrl',
    loadChildren:'./login/login.module#LoginModule'
  }
];