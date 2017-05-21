import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NgUploaderModule } from 'ngx-uploader';

import { HeaderComponent } from '../header/header.component';
import { MenuComponent } from '../menu/menu.component';

import { ArticleService } from '../article/services/article.service';
import { TabService } from '../menu/services/tab.service';

@NgModule({
  imports:[
    FormsModule,
    CommonModule,
    RouterModule,
    NgUploaderModule
  ],
  declarations:[
    HeaderComponent,
    MenuComponent
  ],
  exports:[
    FormsModule,
    CommonModule,
    RouterModule,
    NgUploaderModule,
    HeaderComponent,
    MenuComponent
  ],
  providers: [
    ArticleService,
    TabService
  ]
})

export class SharedModule {

}
