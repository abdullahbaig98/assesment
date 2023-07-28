import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
const Listings: any = [
  // Your property listings data here
];

@Injectable({
  providedIn: 'root'
})
export class MockApiService {

  constructor() { }
  getPropertyListings(): Observable<any[]> {
    // Simulate an API call delay using `of` operator
    return of(Listings);
  }

  getListingDetails(id: number): Observable<any> {
    // Simulate an API call delay using `of` operator
    const listing = Listings.find((item :any) => item.id === id);
    return of(listing);
  }
}
