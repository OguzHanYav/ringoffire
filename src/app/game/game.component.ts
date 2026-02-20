import { Component } from '@angular/core';
import { CommonModule } from "@angular/common";
import { Game } from '../../models/game';
import { PlayerComponent } from '../player/player.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogAddPlayerComponent } from '../dialog-add-player/dialog-add-player.component';
import { FormsModule } from '@angular/forms';
import { GameInfoComponent } from '../game-info/game-info.component';
import { Firestore } from '@angular/fire/firestore';
import { collection, collectionData, addDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { doc, docData, updateDoc } from '@angular/fire/firestore';
import { AddPlayerMobileComponent } from "../add-player-mobile/add-player-mobile.component";
import { EditPlayerComponent } from '../edit-player/edit-player.component';



@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule, PlayerComponent, MatButtonModule, MatIconModule, MatDialogModule, FormsModule, GameInfoComponent, AddPlayerMobileComponent],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})

export class GameComponent {

  game!: Game;
  gamesRef;
  gameId!: string;
  gameOver = false;
  currentCard: string = '';
  pickCardAnimation = false;
  private previousMoveId = 0;

  constructor(private route: ActivatedRoute, private firestore: Firestore, public dialog: MatDialog) {
    this.gamesRef = collection(this.firestore, 'games');
  }

  editPlayer(playerId: number) {
    console.log('Edit Player', playerId);
    const dialogRef = this.dialog.open(EditPlayerComponent);
    dialogRef.afterClosed().subscribe((change: string) => {
      if (change) {
        if (change == 'DELETE') {
          this.game.players.splice(playerId, 1);
          this.game.player_images.splice(playerId, 1);
        } else {
          this.game.player_images[playerId] = change;
        }
        this.saveGame();
      }
    });
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAddPlayerComponent);

    dialogRef.afterClosed().subscribe((name: string) => {
      if (name && name.length > 0) {
        this.game.players.push(name);
        this.game.player_images.push('man.png');
        this.saveGame();
      }
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap) => {
      const id = paramMap.get('id');

      if (id) {
        this.gameId = id;

        const gameDocRef = doc(this.firestore, 'games', id);

        docData(gameDocRef).subscribe((gameData: any) => {
          const newGame = new Game(gameData);

          if (this.previousMoveId !== newGame.lastMoveId) {
            this.triggerAnimation(newGame.lastPlayedCard);
            this.previousMoveId = newGame.lastMoveId;
          }
          this.game = newGame;
        });
      }
    });
  }

  newGame() {
    this.game = new Game();
  }

  takeCard() {
    if (this.game.stack.length == 0) {
      this.gameOver = true;
    } else if (!this.pickCardAnimation && this.game.stack.length > 0) {

      const card = this.game.stack.pop()!;

      this.game.lastPlayedCard = card;
      this.game.lastMoveId++;
      this.game.currentPlayer++;
      this.game.currentPlayer =
        this.game.currentPlayer % this.game.players.length;
      this.saveGame();
    }
  }

  async saveGame() {
    if (!this.gameId) return;
    const gameDocRef = doc(this.firestore, 'games', this.gameId);
    await updateDoc(gameDocRef, this.game.toJSON());
    console.log('Game gespeichert');
  }
  triggerAnimation(card: string) {
    if (!card) return;

    this.currentCard = card;
    this.pickCardAnimation = true;

    setTimeout(() => {
      this.game.playedCards.push(card);
      this.pickCardAnimation = false;
    }, 1000);
  }
}





