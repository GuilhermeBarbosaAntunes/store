import { Component } from '@angular/core';

const ROWS_HEIGHT: { [id: number]: number } = { 1: 400, 3: 335, 4: 350 }

@Component({
  selector: 'app-home',
  templateUrl: `./home.component.html`
})
export class HomeComponent {
  cols = 3;
  rowHeight = ROWS_HEIGHT[this.cols];
  category: String | undefined;


  onColumnsCountChange(colsNum: number): void {
    this.cols = colsNum;
    this.rowHeight = ROWS_HEIGHT[this.cols]
  }

  onShowCategory(newcategory: String): void {
    this.category = newcategory
  }
}
