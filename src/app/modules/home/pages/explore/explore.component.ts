import { Component } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrl: './explore.component.scss'
})
export class ExploreComponent {
  parentSubject:Subject<string> = new Subject();

  constructor() {

  }

 cardAnimation(value:any) {
    this.parentSubject.next(value);
  }
}
