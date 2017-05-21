import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

import { ListComponent } from './list.component';
import { ItemComponent } from './item/item.component';

import { listRoutes } from './list.routes';

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(listRoutes)
    ],
    exports: [],
    declarations: [
        ListComponent,
        ItemComponent
    ],
    providers: []
})
export class ListModule { }