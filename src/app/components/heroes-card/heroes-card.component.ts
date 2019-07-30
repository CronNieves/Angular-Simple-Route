import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-heroes-card',
  templateUrl: './heroes-card.component.html',
  styleUrls: ['./heroes-card.component.css']
})
export class HeroesCardComponent implements OnInit {

  @Input()
  heroe: any = {};

  @Input()
  index: number;

  constructor() { }

  ngOnInit() {
  }


}
