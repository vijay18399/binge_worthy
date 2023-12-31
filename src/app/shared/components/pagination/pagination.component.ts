import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent {
  @Input() totalItems: number = 0;
  @Input() pageSize: number = 1;
  @Input() currentPage: number = 1;

  @Output() pageChange = new EventEmitter<number>();

  get totalPages(): number {
    return Math.ceil(this.totalItems / this.pageSize);
  }
  get pageList(): any[] {
    return Array(this.totalPages)
      .fill(0)
      .map((_, i) => i + 1);
  }
  gotToPage(page: number) {
    console.log(page,"wwd")
    if (page >= 1 && page <= this.totalPages) {
      console.log(page,"d")
      this.pageChange.emit(page);
      this.currentPage = page;
    }
  }
  changePage(event: any): void {
    console.log(event.target.value)
    this.gotToPage(Number(event.target.value));
  }
}
