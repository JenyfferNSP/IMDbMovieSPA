import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { CardComponent } from './card/card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, SearchComponent, CardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  movieDetails: any = null;
  active: boolean = true;

  clickSearch(valueFromHeaderComponent: any) {
    this.movieDetails = valueFromHeaderComponent;
  }

  clickReset() {
    this.active = false;
  }

}
