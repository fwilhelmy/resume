import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Homework } from '../models/homework';
import { sgaurl, cryptokey } from '../../../config';
import { CookieService } from './cookie.service';
import * as crypto from 'crypto-js';
import { Router } from '@angular/router';

//const CryptoJS = require('crypto-js');

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  public token: string;

  constructor(private http: HttpClient, private cookieServices: CookieService, private router: Router) {
    this.token = cookieServices.getCookie('token');
  }

  login(email: string, password: string) {
    // Encode for url the strings
    const parsedEmail = encodeURIComponent(email);
    const parsedPassword = encodeURIComponent(password);

    const cipherpswd: string = crypto.AES.encrypt(parsedPassword, cryptokey).toString();

    this.http.get<any>(sgaurl + '/auth/login', {params: {parsedEmail, cipherpswd}})
    .subscribe(res => {
      this.token = res.token;
      this.cookieServices.setCookie('token', res.token, 3);

      if (this.isTeacher()) {
        this.router.navigateByUrl('/teacher');
      } else if (this.isStudent()) {
        this.router.navigateByUrl('/student');
      }
    });
  }

  logout() {
    this.token = null;
    this.cookieServices.deleteCookie('token');
    this.router.navigateByUrl('/');
  }

  isAuthentified(): boolean {
    //TODO
    return this.token ?  true : false;
  }

  isStudent(): boolean {
    //TODO
    return true;
  }

  isTeacher(): boolean {
    //TODO
    return true;
  }

  isMobile(): boolean { return (navigator.userAgent.indexOf('IEMobile') !== -1); }
}
