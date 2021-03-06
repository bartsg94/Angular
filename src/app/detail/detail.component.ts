import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: "app-detail",
  templateUrl: "./detail.component.html",
  styleUrls: ["./detail.component.css"]
})
export class DetailComponent implements OnInit {
  public departmentID;
  public write;
  constructor(private Route: ActivatedRoute) {}

  ngOnInit() {
    let i = parseInt(this.Route.snapshot.paramMap.get("id"));
    this.departmentID = i;
  }
}
