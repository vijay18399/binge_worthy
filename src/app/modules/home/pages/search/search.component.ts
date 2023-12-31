import { Component } from '@angular/core';
import { Subscription, map } from 'rxjs';
import { SearchBridgeService } from '../../../../core/services/search-bridge.service';
import { ApiService } from '../../../../core/services/api.service';
import { Content } from '../../../../core/interface/content';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  private subscriptions: Subscription[] = [];
  loading = false;
  searchText : string = '';
  searchResults: any[] =[];
  constructor(private searchBridgeService: SearchBridgeService,private apiService:ApiService) {
    this.subscriptions.push(
      this.searchBridgeService.searchInputClicked$.subscribe((searchText) => {
        this.handleSearchInputClick(searchText);
      }),
      this.searchBridgeService.enterKeyPressed$.subscribe((searchText) => {
        this.handleEnterKeyPressed(searchText);
      })
    );
  }

  handleSearchInputClick(searchText:string) {
    console.log('Search input clicked in search component');
    // Perform actions related to search input click
  }

  handleEnterKeyPressed(searchText:string) {
    console.log('Enter key pressed in search component');
    this.loading = true
    this.apiService.searchByTitle(searchText).subscribe(results => {
      console.log(results)
      this.searchText = searchText;
      this.searchResults = results;
      this.loading = false;
    });
  }

  ngOnDestroy() {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
