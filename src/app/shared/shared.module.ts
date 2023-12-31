import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentInfoComponent } from './components/content-info/content-info.component';
import { PaginationComponent } from './components/pagination/pagination.component';

@NgModule({
  declarations: [ContentInfoComponent,PaginationComponent],
  exports: [ContentInfoComponent,PaginationComponent],
  imports: [CommonModule],
})
export class SharedModule { }
