import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.css']
})
export class CardViewComponent implements OnInit {
  listings: any[] = []; // Initialize with your property listings data

  ngOnInit() {
    // You should fetch your property listings from the mock API service here
    // For demonstration purposes, I'm manually initializing the listings array
    this.listings = [
      {
        imageUrl: 'https://placehold.co/400',
        title: '1 Kanal House for sale',
        address: 'DHA Phase 6, Lahore',
        beds: 5,
        bath: 6,
        coveredAreaSQFT: 2350,
        propertyType: 'house',
        isCommercial: false,
        price: 65000000
      },
      // Add more property listings here
    ];
  }
}
