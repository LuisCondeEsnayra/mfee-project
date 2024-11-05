import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LocationsListCardComponent } from './components/locations-list-card/locations-list-card.component';

@Component({
  standalone: true,
  imports: [RouterModule  , LocationsListCardComponent],
  selector: 'mfee-project-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {}
