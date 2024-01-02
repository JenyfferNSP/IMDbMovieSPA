import { Component, Input } from '@angular/core';
import { SearchComponent } from '../search/search.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [ SearchComponent, NgIf],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() movieDetails: any;
  @Input() activeCard: any;

}
