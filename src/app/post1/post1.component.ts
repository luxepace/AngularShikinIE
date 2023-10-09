import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { testResolver } from '../test.resolver';

@Component({
  selector: 'app-post1',
  templateUrl: './post1.component.html',
  styleUrls: ['./post1.component.css']
})
export class Post1Component implements OnInit {

  constructor( public testResolver: testResolver) { }

  ngOnInit() {
    
  }


}
