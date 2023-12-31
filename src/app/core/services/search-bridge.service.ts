import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchBridgeService {
  private searchInputClickedSource = new Subject<string>();
  private enterKeyPressedSource = new Subject<string>();

  searchInputClicked$ = this.searchInputClickedSource.asObservable();
  enterKeyPressed$ = this.enterKeyPressedSource.asObservable();

  notifySearchInputClicked(searchText:string) {
    this.searchInputClickedSource.next(searchText);
  }

  notifyEnterKeyPressed(searchText:string) {
    this.enterKeyPressedSource.next(searchText);
  }
}
