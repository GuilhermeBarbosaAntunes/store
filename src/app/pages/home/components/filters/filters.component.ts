import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: `./filters.component.html`,
  styles: [
  ]
})
export class FiltersComponent {
  @Output() showCategory = new EventEmitter<String>()

  categories = ['shoes', 'sports']


  onShowCategory(category: string) {
    this.showCategory.emit(category)
  }
}
