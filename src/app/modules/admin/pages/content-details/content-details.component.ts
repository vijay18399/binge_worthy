import { Component } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../../../core/services/api.service';
import { content } from '../../../../core/data/content';

@Component({
  selector: 'app-content-details',
  templateUrl: './content-details.component.html',
  styleUrl: './content-details.component.scss'
})
export class ContentDetailsComponent {
  contentId: string = "";
  content: any;
  activeSeason:any;
  constructor(private apiService: ApiService,private route:ActivatedRoute) { }
  ngOnInit(): void {
      this.contentId = this.route.snapshot.params['contentId'];
      // this.getMovieDetails()
      this.content = content;
  }
  getMovieDetails(): void {
    this.apiService.getById(this.contentId).subscribe((data:any) => {
      this.content = data.data() as any; // Extract the data property from the DocumentSnapshot
      console.log(this.content);
    });
  }

}
