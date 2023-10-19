import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css'],
})
export class PostDetailsComponent implements OnInit {
  constructor(private dataService: DataService, private route: ActivatedRoute) { }

  post = this.dataService.getPost(this.route.snapshot.params.id);
  
  ngOnInit() {}

  saveChanges()
  {
    this.dataService.updatePost(this.post);
  }
}
