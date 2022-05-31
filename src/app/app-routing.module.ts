import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DepartmentComponent } from "./department/department.component";
import { DetailComponent } from "./detail/detail.component";
import { EmployeeComponent } from "./employee/employee.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

const routes: Routes = [
  { path: "departments", component: DepartmentComponent },
  { path: "departments/:id", component: DetailComponent },
  { path: "employees", component: EmployeeComponent },
  { path: "**", component: PageNotFoundComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingComponents = [
  DepartmentComponent,
  EmployeeComponent,
  DetailComponent,
  PageNotFoundComponent
];
