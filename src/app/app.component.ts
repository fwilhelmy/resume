import { Component, OnInit } from '@angular/core';
import { HomeworkService } from './shared/service/data-service/homework.service';
import { Homework } from './shared/models/homework';
import { SessionService } from './shared/service/session.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private sessionService: SessionService) { }

  ngOnInit() {
    console.log(this.sessionService.isAuthentified());
  }

  public loginTeacher() {
    this.sessionService.login('teacher+1@gmail.com', '1234');

  }

  public loginStudent() {
    this.sessionService.login('student+1@gmail.com', '1234');

  }

  public logout() {
    this.sessionService.logout();
  }
}
