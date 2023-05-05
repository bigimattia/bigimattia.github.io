import { Component } from '@angular/core';

enum Player {
  None = '',
  X = 'X',
  O = 'O'
}

@Component({
  selector: 'app-tic-tac-toe',
  templateUrl: './tictactoe.component.html',
  styleUrls: ['./tictactoe.component.scss']
})
export class TicTacToeComponent {

  cells: Player[] = Array(9).fill(Player.None);
  currentPlayer: Player = Player.X;
  winner: Player | null = null;

  makeMove(index: number): void {
    if (this.cells[index] !== Player.None || this.winner) {
      return;
    }
    this.cells[index] = this.currentPlayer;
    this.checkWinner();
    this.currentPlayer = this.currentPlayer === Player.X ? Player.O : Player.X;
  }

  checkWinner(): void {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (const combination of winningCombinations) {
      const [a, b, c] = combination;
      if (this.cells[a] !== Player.None &&
          this.cells[a] === this.cells[b] &&
          this.cells[a] === this.cells[c]) {
        this.winner = this.currentPlayer;
        return;
      }
    }
    if (this.cells.every(cell => cell !== Player.None)) {
      this.winner = Player.None;
    }
  }

}
