import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LayoutComponent } from "./components/layout/layout.component";
import { ContentListComponent } from "./pages/content-list/content-list.component";
import { ContentFormComponent } from "./pages/content-form/content-form.component";
import { ContentDetailsComponent } from "./pages/content-details/content-details.component";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";


const contentRoutes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      {
        path: "",
        component: DashboardComponent
      },
      {
        path: "content-list",
        component: ContentListComponent
      },
      {
        path: "create-content",
        component: ContentFormComponent
      },
      {
        path: "edit-content/:contentId",
        component: ContentFormComponent,
      },
      {
        path: "content-details/:contentId",
        component: ContentDetailsComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(contentRoutes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
