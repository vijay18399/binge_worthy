import { Component } from '@angular/core';
import { ApiService } from '../../../../core/services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent {
  contentId: string = "";
  content: any;
  activeSeason:any;
  constructor(private apiService: ApiService,private route:ActivatedRoute) { }
  ngOnInit(): void {
      this.contentId = this.route.snapshot.params['contentId'];
      this.getContentDetails()
  }

  getContentDetails(): void {
    this.apiService.getById(this.contentId).subscribe((data:any) => {
      this.content = data.data() as any; // Extract the data property from the DocumentSnapshot
      console.log(this.content);
    });
  }
}
