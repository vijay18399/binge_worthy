import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SearchBridgeService } from '../../../../core/services/search-bridge.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isSearchRouteActive: boolean = false;
  searchText:string = '';
  constructor(private router: Router,private searchBridgeService: SearchBridgeService) {}

  ngOnInit(): void {
    this.router.events.subscribe((event:any) => {
      if(event.routerEvent){
        if(event.routerEvent.url && event.routerEvent.url.includes('search')){
          this.isSearchRouteActive = true;
        }else{
          this.isSearchRouteActive = false;
        }
      }
    });

  }
  onSearchInputClick() {
    this.searchBridgeService.notifySearchInputClicked(this.searchText);
  }

  onSearchInputEnter() {
    this.searchBridgeService.notifyEnterKeyPressed(this.searchText);
  }
}
