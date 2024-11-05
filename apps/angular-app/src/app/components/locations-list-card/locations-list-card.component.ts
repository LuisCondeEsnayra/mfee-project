import { HttpClientModule } from '@angular/common/http';
import { LocationsService } from './../../services/locations.service';
import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { Location } from '../../models/location';
@Component({
  selector: 'mfee-project-locations-list-card',
  templateUrl: './locations-list-card.component.html',
  styleUrls: ['./locations-list-card.component.css'],
  standalone: true,
  imports: [CommonModule, NavbarComponent, HttpClientModule],
  providers: [LocationsService]
})
export class LocationsListCardComponent implements OnInit {
  locations: Location[] = [];
  isLoading: boolean = true;

  locationService: LocationsService = inject(LocationsService);


  ngOnInit() {
    this.getLocations();
  }

  getLocations() {
    this.locationService.getLocations().subscribe( (response) => {
        this.locations = response;
        this.isLoading = false;
        console.log(response);
      }
    );
  }
}
