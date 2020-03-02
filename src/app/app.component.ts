import { Component, OnInit } from '@angular/core';
import { SessionService } from './shared/service/session.service';
import data from './data.json';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    public resume = data;
    public language = "FR";

    constructor() {
    }

    ngOnInit() {
        console.log(this.resume);
    }

    scroll(el: HTMLElement) {
        el.scrollIntoView({behavior: 'smooth'});
    }
}
