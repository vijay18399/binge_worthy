import { Component, OnInit, Input } from '@angular/core';
import { trigger, keyframes, animate, transition, style } from "@angular/animations";
interface User {
  id: number;
  picture: string;
  age: number;
  name: string;
  gender: string;
}



import { Subject } from 'rxjs';
const swiperight = [
  style({ opacity: 1 }),
  style({ transform: 'translate3d(200%, 0, 0) rotate3d(0, 0, 1, 120deg)', opacity: 0 }),
]
const swipeleft = [
  style({ opacity: 1 }),
  style({ transform: 'translate3d(-200%, 0, 0) rotate3d(0, 0, 1, -120deg)', opacity: 0 }),
]
const swipeup = [
  style({ opacity: 1 }),
  style({ transform: 'translate3d(0, -200%, 0) rotate3d(0, 0, 1, 120deg)', opacity: 0 }),
];
const fillBackground = [
  style({ background: 'linear-gradient(to top right, #00FF00, #00AA00)' }),
  animate('1s', keyframes([
    style({ background: 'linear-gradient(to top right, #00FF00, #00AA00)' }),
    style({ background: 'linear-gradient(to top right, #00FF00, #00AA00)' }),
  ])),
  style({ background: 'linear-gradient(to top right, #00FF00, #00AA00)' }),
];
@Component({
  selector: 'app-tinder-card',
  templateUrl: './tinder-card.component.html',
  styleUrls: ['./tinder-card.component.scss'],
  animations: [
    trigger('cardAnimator', [
      transition('* => swiperight', animate(750, keyframes(swiperight))),
      transition('* => swipeleft', animate(750, keyframes(swipeleft))),
      transition('* => swipeup', animate(750, keyframes(swipeup)))
    ])
  ]

})
export class TinderCardComponent {

  getCurrentCardUrl() {
    return `url('${this.users[this.index].posterUrl}')`;
  }
  public users: any[] = [
    {
      posterUrl: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMDU2ZWJlMjktMTRhMy00ZTA5LWEzNDgtYmNmZTEwZTViZWJkXkEyXkFqcGdeQXVyNDQ2OTk4MzI@..jpg',
      name: 'The Shawshank Redemption',
      genre: 'Drama'
    },
    {
      posterUrl: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMzk2OTg4MTk1NF5BMl5BanBnXkFtZTcwNjExNTgzNA@@..jpg',
      name: 'Inception',
      genre: 'Sci-Fi'
    },
    {
      posterUrl: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjAwODYzNDY4Ml5BMl5BanBnXkFtZTcwODkwNTgzNA@@..jpg',
      name: 'The Dark Knight',
      genre: 'Action'
    },
    {
      posterUrl: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTM3NzA1MjM2N15BMl5BanBnXkFtZTcwMzY3MTMzNA@@..jpg',
      name: 'Pulp Fiction',
      genre: 'Crime'
    },
    {
      posterUrl: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTI3MzMwMzIxMF5BMl5BanBnXkFtZTYwNTM0Nzc5..jpg',
      name: 'Forrest Gump',
      genre: 'Drama'
    },
    // Add more movie objects as needed
  ];

  public index = 0;
  @Input()
  parentSubject!: Subject<any>;
  animationState!: string;
  constructor() { }

  ngOnInit() {
    this.parentSubject.subscribe(event => {
      this.startAnimation(event)
    });
  }

  startAnimation(state:any) {
    if (!this.animationState) {
      this.animationState = state;
    }
  }

  resetAnimationState(state:any) {
    if(state.totalTime){
      this.animationState = '';
      this.index++;
    }
  }


  ngOnDestroy() {
    this.parentSubject.unsubscribe();
  }
}
