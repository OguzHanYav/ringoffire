import { Component } from '@angular/core';
import { CommonModule, NgForOf, NgStyle } from "@angular/common";

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [NgForOf, NgStyle,CommonModule],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})

export class GameComponent {

}





