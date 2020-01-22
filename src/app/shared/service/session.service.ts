import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CookieService } from './cookie.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  public token: string;

  constructor(private http: HttpClient, private cookieServices: CookieService, private router: Router) {
    this.token = cookieServices.getCookie('token');
  }

  isMobile(): boolean { return (navigator.userAgent.indexOf('IEMobile') !== -1); }
}
