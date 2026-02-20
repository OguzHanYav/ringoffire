import { Component } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Game } from '../../models/game';
import { collection, addDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-start-screen',
  standalone: true,
  imports: [],
  templateUrl: './start-screen.component.html',
  styleUrl: './start-screen.component.scss'
})
export class StartScreenComponent {
  gamesRef;
  constructor(private firestore: Firestore, private router: Router) {
    this.gamesRef = collection(this.firestore, 'games');
  }

  async newGame() {
    const game = new Game();
    const docRef = await addDoc(this.gamesRef, game.toJSON());
    this.router.navigateByUrl('/game/' + docRef.id);
  }
}
