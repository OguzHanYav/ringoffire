import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { MatCardModule } from '@angular/material/card'

@Component({
  selector: 'app-game-info',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './game-info.component.html',
  styleUrl: './game-info.component.scss'
})
export class GameInfoComponent {
  cardAction = [
    { title: 'Waterfall', description: 'Everyone has to start drinking at the same time.' },
    { title: 'You', description: 'Everyone has to start drinking at the same time.' },
    { title: 'Me', description: 'Everyone has to start drinking at the same time.' },
    { title: 'Category', description: 'Everyone has to start drinking at the same time.' },
    { title: 'Bust a jive', description: 'Everyone has to start drinking at the same time.' },
    { title: 'Chicks', description: 'Everyone has to start drinking at the same time.' },
    { title: 'Heaven', description: 'Everyone has to start drinking at the same time.' },
    { title: 'Mate', description: 'Everyone has to start drinking at the same time.' },
    { title: 'Thumbmaster', description: 'Everyone has to start drinking at the same time.' },
    { title: 'Men', description: 'Everyone has to start drinking at the same time.' },
    { title: 'Quizmaster', description: 'Everyone has to start drinking at the same time.' },
    { title: 'Never have i ever..', description: 'Everyone has to start drinking at the same time.' },
    { title: 'Rule', description: 'Everyone has to start drinking at the same time.' },
  ];
  title = '';
  description = '';
  @Input() card: string = '';
  constructor() {

  }
  ngOnInit(): void {

  }
  ngOnChanges(): void {
    if (this.card) {

      console.log('Current card is:', this.card);
      let cardNumber = +this.card.split('_')[1];
      this.title = this.cardAction[cardNumber - 1].title;
      this.description = this.cardAction[cardNumber - 1].description;
    }
  }

}
