import {Component, OnInit, ViewChild} from '@angular/core';
import { SessionService } from './shared/service/session.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import data1 from './data.json';
import data2 from './resources.json';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
    public resume = data1;
    public resource = data2;
    public language = 'EN';

    displayedColumns: string[] = ['name', 'progress'];
    dataSource: MatTableDataSource<any>;
  
    @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
    @ViewChild(MatSort, {static: true}) sort: MatSort;

    constructor() {}

    ngOnInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.dataSource.data = this.resume.knowledge;
        window.onscroll = () => this.isTop();
    }

    lang(content) {
        if (content) {
            const langContent = this.language === 'FR' ? content.fr : content.en;
            if (langContent) {
                return langContent;
            } else {
                return content;
            }
        }
    }

    isTop() {
        let scrollBtn = document.getElementById('scroll-btn');

        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollBtn.style.display = 'block';
        } else {
            scrollBtn.style.display = 'none';
        }
    }

    // When the user clicks on the button, scroll to the top of the document
    toTop() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    scroll(el: HTMLElement) {
        el.scrollIntoView({behavior: 'smooth'});
    }

    applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    
        if (this.dataSource.paginator) {
          this.dataSource.paginator.firstPage();
        }
      }
}
