import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-products-header',
  templateUrl: `./products-header.component.html`,

})
export class ProductsHeaderComponent {
  @Output() columnsCountChange = new EventEmitter<number>();
  @Output() itemsCountChange = new EventEmitter<number>();
  @Output() sortChange = new EventEmitter<string>();
  sort = 'desc'
  itemShowCount = 12;


  onSortUpdate(newsort: string) {
    this.sort = newsort;
    this.sortChange.emit(newsort);
  }

  onItemsUpdate(count: number): void {
    this.itemShowCount = count;
    this.itemsCountChange.emit(count);
  }

  onColumnsUpdate(colsNum: number): void {
    this.columnsCountChange.emit(colsNum);
  }
}
