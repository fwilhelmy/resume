import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { SessionService } from '../service/session.service';

@Injectable({
  providedIn: 'root',
})
export class StudentGuard implements CanActivate {
    constructor(private sessionService: SessionService) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.sessionService.isStudent();
  }
}