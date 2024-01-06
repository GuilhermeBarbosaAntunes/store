import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-products-header',
  templateUrl: `./products-header.component.html`,

})
export class ProductsHeaderComponent {
  @Output() columnsCountChange = new EventEmitter<number>();
  sort = 'desc'
  itemShowCount = 12;


  onSortUpdate(newsort: string) {
    this.sort = newsort;
  }

  onItemsUpdate(count: number): void {
    this.itemShowCount = count;
  }

  onColumnsUpdate(colsNum: number): void {
    this.columnsCountChange.emit(colsNum);
  }
}
