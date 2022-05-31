import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { TestComponent } from "./test/test.component";
import { AppRoutingModule, routingComponents } from "./app-routing.module";
import { FormDrivenComponent } from "./form-driven/form-driven.component";
import { User } from "./user";

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    routingComponents,
    FormDrivenComponent
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule, User],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
