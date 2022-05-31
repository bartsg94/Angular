import { Component, OnInit } from "@angular/core";
import { User } from "./user";
@Component({
  selector: "app-form-driven",
  templateUrl: "./form-driven.component.html",
  styleUrls: ["./form-driven.component.css"]
})
export class FormDrivenComponent {
  public topics = ["Angular", "React", "Vue"];
  userModel = new User(
    "Bartolomeo",
    "bartsg@hotmail.it",
    "3890969594",
    "Angular",
    "morning",
    true
  );
}
