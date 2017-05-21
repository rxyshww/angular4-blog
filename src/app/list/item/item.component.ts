import { Component, Input } from '@angular/core';

@Component({
    selector: 'list-item',
    templateUrl: './item.component.html',
    styleUrls: ['./item.component.scss']
})
export class ItemComponent {
  @Input()
  itemData;
}