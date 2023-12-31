import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Content } from '../../../../core/interface/content';
import { ApiService } from '../../../../core/services/api.service';
import { content } from '../../../../core/data/content';

@Component({
  selector: 'app-content-form',
  templateUrl: './content-form.component.html',
  styleUrl: './content-form.component.scss'
})
export class ContentFormComponent {
  selectedTab: 'contentInfo' | 'seasonInfo' | 'castInfo' | 'addionalInfo' = 'contentInfo';
  loading:boolean = false;
  content: any = {
    poster: '',
    title: '',
    type:'series',
    genres: [],
    plot: '',
    tags: [],
    releaseDate: null,
    seasonCount:0,
    actors: [],
    seasons: [],
    director:'',
    lastUpdate: new Date(),
    isPublished:false
  };

  activeSeason =0;
  contentId: any;

  constructor(public apiService:ApiService,public router: Router,private route:ActivatedRoute){
    // this.content = content[3]
    // console.log( this.content)
  }
  ngOnInit(): void {
    this.contentId = this.route.snapshot.params['contentId'];
    if(this.contentId) {this.getMovieDetails()};
  }
  getMovieDetails(): void {
    this.apiService.getById(this.contentId).subscribe((data:any) => {
      this.content = data.data() as any; // Extract the data property from the DocumentSnapshot
    });
  }
  addActor() {
    this.content.actors.push({ profile: '', name: '' });
  }

  deleteActor(index: number) {
    this.content.actors.splice(index, 1);
  }
  deleteSeason(index: number) {
    this.content.seasons.splice(index, 1);
  }

  deleteEpisode(seasonIndex: number, episodeIndex: number) {
    this.content.seasons[seasonIndex].episodes.splice(episodeIndex, 1);
  }
  updateSeasonCount(seasonCount: number){
    if(seasonCount> this.content.seasonCount){
      this.content.seasons.push({
        number: seasonCount,
        description: '',
        poster: '',
        episodes: [],
        episodeCount:0
      });
    }else{
      this.content.seasons.pop()
    }
    this.content.seasonCount = seasonCount;
  }
  updateEpisodeCount(episodeCount: number){
    if(episodeCount>  this.content.seasons[this.activeSeason].episodeCount){
      //incremented
      this.content.seasons[this.activeSeason].episodes.push({
        number: episodeCount,
        title: '',
        poster: '',
        description: ''
      });
    }else{
      this.content.seasons[this.activeSeason].episodes.pop()
    }
    this.content.seasons[this.activeSeason].episodeCount = episodeCount;
  }
  updateGenres(genres:string[]){
    this.content.genres=genres;
 }
 updateTags(tags:string[]){
   this.content.tags=tags;
}
updateActors(actors:string[]){
  this.content.actors = actors;
}
  onSubmit() {
    this.loading = true;
    if(this.contentId){
      this.apiService.update(this.contentId,this.content).then((data:any)=>{
        this.loading = false;
        console.log(data)
        // this.router.navigate(['content']);
    }).catch((error:any)=>{
        this.loading = false;
        console.log(error)
    })
    }else{
      this.apiService.create(this.content).then((data:any)=>{
        this.loading = false;
        console.log(data)
        // this.router.navigate(['content']);
    }).catch((error:any)=>{
        this.loading = false;
        console.log(error)
    })
    }


  }
}
