import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class CookieService {

  constructor() {}

  public getCookie(name: string) {
    const ca: Array<string> = document.cookie.split(';');
    const caLen: number = ca.length;
    const cookieName = `${name}=`;
    let c: string;

    for (let i: number = 0; i < caLen; i += 1) {
      c = ca[i].replace(/^\s+/g, '');
      if (c.indexOf(cookieName) == 0) {
        return c.substring(cookieName.length, c.length);
      }
    }
    return '';
  }

  public setCookie(name: string, value: any, expireDays?: number) {
    let newCookie = `${name}=${value};`;
    if (expireDays) {
      let day: Date = new Date();
      day.setTime(day.getTime() + expireDays * 24 * 60 * 60 * 1000);
      newCookie += `expires=${day.toUTCString()}`;
    }
    document.cookie = newCookie;
  }

  public deleteCookie(name) {
    this.setCookie(name, '', -1);
  }
}
