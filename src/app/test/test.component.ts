import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-test",
  template: `
    <p>esempio di two way data binding</p>
    <input [(ngModel)]="name" type="text" />
    {{ name }}
  `,
  styles: []
})
export class TestComponent implements OnInit {
  public name = "bartolo";
  constructor() {}
  ngOnInit(): void {}
}
