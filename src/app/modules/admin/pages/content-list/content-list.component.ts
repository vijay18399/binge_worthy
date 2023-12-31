import { Component, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { Content } from '../../../../core/interface/content';
import { ApiService } from '../../../../core/services/api.service';
import { content } from '../../../../core/data/content';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrl: './content-list.component.scss'
})
export class ContentListComponent {
  contents!: Content[] | any[];
  currentIndex = -1;
  title = '';
  searchTerm:string='';
  pageSize: number = 5; // Number of items per page
  currentPage: number = 1; // Current page
  constructor(private apiService: ApiService) { }
  applySearch(){

  }
  ngOnInit(): void {
    this.contents = content;
    // this.retrieveContentList();
  }

  refreshList(): void {
    this.retrieveContentList();
  }

  retrieveContentList(): void {
    this.apiService.getAll().snapshotChanges().pipe(
      map((changes:any) =>
        changes.map((c:any) =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe((data:any) => {
      console.log(data)
      this.contents = data;
    });
  }

  onPageChange(page: number): void {
    this.currentPage = page;
  }

  get paginatedContents(): any[] {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    return this.contents.slice(startIndex, endIndex);
  }

}
