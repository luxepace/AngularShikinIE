import { Injectable } from '@angular/core';
import { Observable, interval, map, scan } from 'rxjs';

@Injectable()
export class CounterService {
  constructor() {}
  normalNumbers!: Observable<number>;
  randomNumbers!: Observable<string>;
  
  setNormal() {
    return this.normalNumbers = 
    interval(2000).pipe(scan((acc,_)=>acc+1,0));
    };
  setRandom() {
    
    return this.randomNumbers = 
    interval(2000).pipe(map(rand => `Random number: ${Math.round(Math.random()*100)}`));
    };
    

  
}
