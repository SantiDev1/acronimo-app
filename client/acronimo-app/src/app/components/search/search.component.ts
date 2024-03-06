import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  @Output() searchEvent = new EventEmitter<string>();

  searchTerm: string = '';

  constructor() { }

  handleSearch() {
    if (this.searchTerm.trim() !== '') {
      this.searchEvent.emit(this.searchTerm);
    }
  }

  onEnter(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.handleSearch();
    }
  }
}
