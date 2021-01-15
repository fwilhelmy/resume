import {Component, OnInit, ViewChild} from '@angular/core';
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
    
    displayedColumns: string[] = ['name', 'level'];
    dataSource: MatTableDataSource<any>;
    
    @ViewChild(MatSort, {static: true}) sort: MatSort;
    
    ngOnInit() {
        this.dataSource = new MatTableDataSource(this.resume.knowledge);
        this.dataSource.sort = this.sort;
        console.log(this.sort);
        console.log(this.dataSource);
        this.dataSource.filterPredicate = (data: any, filter: string) => {
            return this.lang(data.name).toLowerCase().indexOf(filter) !== -1;
        };
        this.dataSource.sortingDataAccessor = (data: any, sortHeaderId: string) => {
            switch (sortHeaderId) {
                case 'name': {
                    return this.lang(data.name);
                }
                
                case 'level': {
                    return data.level;
                }
            }
        }; 
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
        const scrollBtn = document.getElementById('scroll-btn');
        
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollBtn.style.display = 'block';
        } else {
            scrollBtn.style.display = 'none';
        }
    }
    
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
    }
}
