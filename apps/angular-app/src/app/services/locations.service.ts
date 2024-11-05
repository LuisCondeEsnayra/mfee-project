import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Location } from '../models/location';



@Injectable({
  providedIn: 'root'
})
export class LocationsService {

  readonly url = "http://localhost:3000/locations";

constructor(private http: HttpClient) { }

getLocations(): Observable<Location[]> {
  return this.http.get<Location[]>(this.url);
}
}
