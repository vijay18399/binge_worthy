import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  slides = [
    {
      url:'https://www.themoviedb.org/t/p/original/nEufeZlyAOLqO2brrs0yeF1lgXO.jpg',
      title : 'RRR',
    },
    {
      url:'https://i.imgur.com/Js7wGIt.jpeg',
      title : 'Bahubali',
    },
    {
      url:'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSDT8DLq-8swTp99tkIg7WkHlQEChWGAl71dJClxCLnR4y5-zwd',
      title : '24',
    },
    {
      url : "https://rukminim2.flixcart.com/image/850/1000/av-media/movies/g/x/d/robo-original-imadd5zx3tyf3ugq.jpeg",
      title:"Robo"
    }
  ]
}
