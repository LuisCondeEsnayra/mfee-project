import { LocationsService } from './../../services/locations.service';
import { HttpClientModule } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { Location } from '../../models/location';

@Component({
  selector: 'mfee-project-location-dashboard',
  templateUrl: './location-dashboard.component.html',
  styleUrls: ['./location-dashboard.component.css'],
  standalone: true,
  imports: [CommonModule, NavbarComponent, HttpClientModule],
  providers: [LocationsService]
})
export class LocationDashboardComponent implements OnInit {
  categories: string[] = [];
  locations: Location[] = [];
  filteredLocations: Location[] = [];
  isLoading: boolean = true;
  locationService: LocationsService = inject(LocationsService);

  ngOnInit() {
    this.getLocations();
  }

  getLocations() {
    this.locationService.getLocations().subscribe((response) => {
      this.locations = response;
      this.filteredLocations = response;
      this.getCategories(this.locations);
    });
  }
  getCategories(locations: Location[]) {
    this.categories = Array.from(new Set(locations.map((l) => l.category)));
    this.isLoading = false;
  }

  resetFilter() {
    this.filteredLocations = this.locations;
  }

  filterCategory(category: string) {
    this.filteredLocations = this.locations.filter((x) => x.category == category);
  }
}
