import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Post } from '../post';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  constructor(private dataService: DataService) { }

    posts: Post[];

    visibleCard: boolean = false;

  ngOnInit() {
    this.posts = this.dataService.getPosts();
  }


}
