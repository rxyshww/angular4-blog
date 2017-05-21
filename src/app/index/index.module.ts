import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

import { IndexComponent } from './index.component';

import { indexRoutes } from './index.routes';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(indexRoutes)
  ],
  exports: [],
  declarations: [
    IndexComponent
  ],
  providers: []
})
export class IndexModule { }