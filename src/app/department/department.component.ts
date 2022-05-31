import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
@Component({
  selector: "app-department",
  templateUrl: "./department.component.html",
  styleUrls: ["./department.component.css"]
})
export class DepartmentComponent implements OnInit {
  departments = [
    { id: 1, nome: "Dipartimento informatica" },
    { id: 2, nome: "Dipartimento fisica" },
    { id: 3, nome: "Dipartimento matematica" },
    { id: 4, nome: "Dipartimento lingue" },
    { id: 5, nome: "Dipartimento infermieristica" },
    { id: 6, nome: "Dipartimento lettere" }
  ];
  constructor(private Router: Router) {}

  ngOnInit() {}
  onSelect(department) {
    this.Router.navigate(["/departments", department.id]);
  }
}
