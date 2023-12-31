import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentDetailsComponent } from './pages/content-details/content-details.component';
import { ContentFormComponent } from './pages/content-form/content-form.component';
import { ContentListComponent } from './pages/content-list/content-list.component';
import { HomeRoutingModule } from './admin-routing.module';
import { LayoutComponent } from './components/layout/layout.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { NumberInputComponent } from './components/number-input/number-input.component';
import { chipInputComponent } from './components/chip-input/chipInput';
import { PaginationComponent } from '../../shared/components/pagination/pagination.component';
@NgModule({
  declarations: [
    ContentDetailsComponent,
    ContentFormComponent,
    ContentListComponent,
    LayoutComponent,
    NumberInputComponent,
    chipInputComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    SharedModule
  ]
})
export class AdminModule { }
