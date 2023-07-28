import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.css']
})
export class DetailPageComponent implements OnInit {
  selectedListing: any | null = null; // To store the selected listing data

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const listingId = params.get('id');
      const stateData = this.route.snapshot.paramMap.get('state');
      // Check if the stateData is present and then access the listing
      if (stateData) {
        this.selectedListing = JSON.parse(stateData)?.listing || null;
      }
    });
  }
}
