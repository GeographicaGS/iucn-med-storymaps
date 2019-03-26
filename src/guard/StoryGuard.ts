import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { DataService } from '../services/DataService';

@Injectable()
export class StoryGuard implements CanActivate {

  constructor(private dataService: DataService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.dataService.initData();
  }

}
