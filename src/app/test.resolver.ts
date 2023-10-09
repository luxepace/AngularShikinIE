import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, Subscription, of } from 'rxjs';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})

export class testResolver implements Resolve<Subscription> {
  public result!: string
  constructor (private dataService: DataService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Subscription {
  return this.dataService.button7().subscribe({
    next: (response) => {
      this.result=response;
    }
  })
  }
};
