import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  searchChanged: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  onSearchChanged(value: string): void {
    this.searchChanged.emit(value);
  }
}
