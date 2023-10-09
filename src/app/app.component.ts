import { Component } from '@angular/core';
import { DataService } from './data.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularShikinIE';
  
  constructor (private dataService:DataService) {
  
}


  getButton1(){
    this.dataService.button1().subscribe({
      next: (response) => {
        console.log(response);
      }
    })
  }

  getButton2(){
    this.dataService.button2().subscribe({
      next: (response) => {
        console.log(response);
      }
    })
  }

  getButton3(){
    this.dataService.button3().subscribe({
      next: (response) => {
        console.log(response);
      }
    })
  }

  getButton4(){
    this.dataService.button4().subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (err: HttpErrorResponse) => {
        if (err.status === 404) {
          console.log('Ошибка 404')
        }
      }
    })
  }

  getButton5(){
    this.dataService.button5().subscribe({
      next: (response) => {
        console.log(response);
      }
    })
  }

  getButton6(){
    this.dataService.button6().subscribe({
      next: (response) => {
        console.log(response);
      }
    })
  }
  

}
