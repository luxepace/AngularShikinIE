import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-item-details",
  templateUrl: "./item-details.component.html"
})
export class ItemDetailsComponent implements OnInit {
  constructor(public activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    console.log(this.activatedRoute.snapshot.params);
    console.log(this.activatedRoute.snapshot.queryParams);
  }
}
