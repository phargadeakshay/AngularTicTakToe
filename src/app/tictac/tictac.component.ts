import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tictac',
  templateUrl: './tictac.component.html',
  styleUrls: ['./tictac.component.css'],
})
export class TictacComponent implements OnInit {
  player1: any = '✖';
  player2: any = '⚪';
  currentTurn: any = null;
  winner: boolean = false;
  symbols: string[] = Array(9).fill(null);

  constructor() {}
  indx: number = 0;
  putmark(index: number) {
    if (
      this.symbols[index] != this.player1 &&
      this.symbols[index] != this.player2
    ) {
      if (!this.winner) {
        if (this.currentTurn === this.player1) {
          this.currentTurn = this.player2;
        } else {
          this.currentTurn = this.player1;
        }
        this.symbols = [
          ...this.symbols.slice(0, index),
          this.currentTurn,
          ...this.symbols.slice(index + 1),
        ];
        console.log(this.symbols);
        this.indx = index;

        this.ngOnChanges(this.symbols);
      }
    } else {
      return;
    }
  }

  ngDoCheck() {}

  ngOnChanges(symbols: any) {
    console.log('hello chenges');
    const lines = [
      [0, 1, 2], // top row
      [3, 4, 5], // middle row
      [6, 7, 8], // bottom row
      [0, 3, 6], // left column
      [1, 4, 7], // middle column
      [2, 5, 8], // right column
      [0, 4, 8], // left diagonal
      [2, 4, 6], // right diagonal
    ];

    for (let i = 0; i < lines.length; i++) {
      const index1 = lines[i][0];
      const index2 = lines[i][1];
      const index3 = lines[i][2];
      if (this.hasSameSymbols(index1, index2, index3)) {
        console.log('winner');
        this.winner = true;
        break;
      }
    }
  }
  hasSameSymbols = (index1: any, index2: any, index3: any) => {
    return (
      this.symbols[index1] &&
      this.symbols[index2] &&
      this.symbols[index3] &&
      this.symbols[index1] === this.symbols[index2] &&
      this.symbols[index2] === this.symbols[index3]
    );
  };
  reset() {
    this.currentTurn = null;
    this.symbols = Array(9).fill(null);
    this.winner = false;
  }
  ngOnInit(): void {}
}
