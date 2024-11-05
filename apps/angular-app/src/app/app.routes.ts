import { Route } from '@angular/router';
import { LocationsListCardComponent } from './components/locations-list-card/locations-list-card.component';
import { LocationDashboardComponent } from './components/location-dashboard/location-dashboard.component';

export const appRoutes: Route[] = [
  { path: 'locations', component: LocationDashboardComponent },
  { path: 'locations-table', component: LocationsListCardComponent },
  { path: 'login', component: LocationDashboardComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];
