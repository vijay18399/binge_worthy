import { Component, Input } from '@angular/core';
import { Content } from '../../../core/interface/content';

@Component({
  selector: 'content-info',
  templateUrl: './content-info.component.html',
  styleUrl: './content-info.component.scss'
})
export class ContentInfoComponent {
  @Input() content! : Content;
  activeSeason: any;
    // Function to toggle the visibility of season details
    toggleSeason(i: any): void {
      this.activeSeason = this.content.seasons[i];
    }
    // if (this.movie.seasons.length) {
    //   this.activeSeason = this.movie.seasons[0]
    // }
}
