export class Game {
  public players: string[] = [];
  public player_images:string[]=[];
  public stack: string[] = [];
  public playedCards: string[] = [];
  public currentPlayer = 0;
  public lastPlayedCard: string = '';
  public lastMoveId: number = 0;

  constructor(obj?: any) {
    if (obj) {
      this.players = obj.players || [];
      this.player_images = obj.player_images || [];
      this.stack = obj.stack || [];
      this.playedCards = obj.playedCards || [];
      this.currentPlayer = obj.currentPlayer || 0;
      this.lastPlayedCard = obj.lastPlayedCard || '';
      this.lastMoveId = obj.lastMoveId || 0;
    } else {
      this.initGame();
    }
  }

  initGame() {
    for (let i = 0; i < 14; i++) {
      this.stack.push('ace_' + i);
      this.stack.push('clubs_' + i);
      this.stack.push('diamonds_' + i);
      this.stack.push('hearts_' + i);
    }
    this.shuffle(this.stack);
  }
  private shuffle<T>(array: T[]): void {
    let currentIndex = array.length;

    while (currentIndex !== 0) {
      const randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex]
      ];
    }
  }

  toJSON() {
    return {
      players: this.players,
      player_images: this.player_images,
      stack: this.stack,
      playedCards: this.playedCards,
      currentPlayer: this.currentPlayer,
      lastPlayedCard: this.lastPlayedCard,
      lastMoveId: this.lastMoveId
    };
  }
}
