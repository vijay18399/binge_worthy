import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { ContentComponent } from './pages/content/content.component';
import { ExploreComponent } from './pages/explore/explore.component';
import { SearchComponent } from './pages/search/search.component';
import { LayoutComponent } from './components/layout/layout.component';
import { HeaderComponent } from './components/header/header.component';
import { ImageSliderComponent } from './components/image-slider/image-slider.component';
import { TinderCardComponent } from './components/tinder-card/tinder-card.component';
import { LoaderComponent } from './components/loader/loader.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [HomeComponent,ContentComponent,ExploreComponent, SearchComponent,LayoutComponent,HeaderComponent,ImageSliderComponent,TinderCardComponent,LoaderComponent],

  imports: [
    CommonModule,HomeRoutingModule,FormsModule,SharedModule
  ]
})
export class HomeModule { }
