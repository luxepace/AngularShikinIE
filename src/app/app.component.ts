import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor( private title: Title, private meta: Meta) {
    this.title.setTitle('Desk Page'),
    this.meta.addTag({ property: 'og:desc', content: 'root_desc' })
  }
}
