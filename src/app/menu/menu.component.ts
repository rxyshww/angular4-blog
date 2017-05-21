import { Component, OnInit } from '@angular/core';

import { TabService } from '../menu/services/tab.service';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

    tabs;

    constructor(
        private tabService: TabService
    ) {}

    ngOnInit() {
        this.getTabData()
    }

    getTabData() {
        const tabData = JSON.parse(sessionStorage.getItem('tabData'));
        if (tabData) {
            this.tabs = tabData;
            return
        }
        this.tabService.getTab().subscribe(
            res => this.tabs = res,
            err => {console.log(err)}
        )
    }
}
