import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path: "",
    loadChildren: () => import("./modules/home/home.module").then((module) => module.HomeModule)
  },
  {
    path: "admin",
    loadChildren: () => import("./modules/admin/admin.module").then((module) => module.AdminModule)
  },
  {
    path: "auth",
    loadChildren: () => import("./modules/auth/auth.module").then((module) => module.AuthModule)
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
