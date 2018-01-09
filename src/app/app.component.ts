import {Component, OnInit} from '@angular/core';
import {HeroService } from './hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private NewService: HeroService) {}
  title = 'Tour of Heroes';


  ngOnInit() {
    console.log(this.NewService.getHeroes());
  }
}


