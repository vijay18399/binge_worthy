import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { SearchComponent } from "./pages/search/search.component";
import { ExploreComponent } from "./pages/explore/explore.component";
import { ContentComponent } from "./pages/content/content.component";
import { LayoutComponent } from "./components/layout/layout.component";



const contentRoutes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      {
        path: "",
        component: HomeComponent
      },
      {
        path: "search",
        component: SearchComponent
      },
      {
        path: "explore",
        component: ExploreComponent
      },
      {
        path: "content/:contentId",
        component: ContentComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(contentRoutes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
