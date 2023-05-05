import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TicTacToeComponent } from './tictactoe.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [TicTacToeComponent],
  exports: [TicTacToeComponent]
})
export class TicTacToeComponentModule {}
