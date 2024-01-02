import {Component, ElementRef, Output, ViewChild, OnChanges} from '@angular/core';

import { EventEmitter } from '@angular/core';
import { MovieService } from '../movie.service';
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [
    NgForOf, NgIf
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  @Output() inputDataChange: EventEmitter<string> = new EventEmitter<string>();
  @Output() activeCard: EventEmitter<boolean> = new EventEmitter<boolean>();
  @ViewChild('input') input: ElementRef | undefined;

  results: any[] = [];

  async search() {
    let search = await new MovieService().fetchMovieList({
      s: this.input?.nativeElement?.value
    });

    if (search?.Search) {
      this.results = search?.Search;
    }

  }

  async getDetails(object: any) {
    let search = await new MovieService().fetchMovieList({
      i: object?.imdbID
    });
    this.results = [];
    this.inputDataChange.emit(search);
    this.activeCard.emit(true);
  }

  reset() {
    this.results = [];
    (this.input?.nativeElement as HTMLInputElement).value = '';
    this.activeCard.emit(false);
  }

}
