import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor (private dataService: DataService) {}
  title = 'AngularShikinIE';
  public data!: string;

  getData() {
    this.dataService.getData().subscribe({
      next: (response) => {
        this.data = response;
        console.log(response);
      }
    })
  }
}
