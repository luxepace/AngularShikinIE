import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { CounterService } from './counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public numberArray: number[] = [];
  public randomArray: string[] = [];
  public normalSubs$!: Subscription;
  public randomSubs$!: Subscription;
  normalBool: boolean = true;
  randomBool: boolean = true;

  constructor(public counterService: CounterService) {}

  ngOnInit(){
    this.normal();
    this.random();
   }

  normal()
  {
    if (this.normalBool){
      this.getNormal();
    }
    else { this.unSubscribeNormal()}
  }
 
  random()
  {
    if (this.randomBool){
      this.getRandom();
    }
    else { this.unSubscribeRandom()}
  }

  getNormal(){
    this.normalSubs$ = this.counterService.setNormal().subscribe((number) =>{this.numberArray.push(number)});
    this.normalBool = false;
  }

  unSubscribeNormal()
  {
    this.normalSubs$.unsubscribe();
    this.normalBool = true;
  }

  getRandom(){
    this.randomSubs$ = this.counterService.setRandom().subscribe((randomnumber) =>{this.randomArray.push(randomnumber)});
    this.randomBool = false;
  }

  unSubscribeRandom()
  {
    this.randomSubs$.unsubscribe();
    this.randomBool = true;
  }
}
