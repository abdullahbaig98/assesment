import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-data-table-view',
  templateUrl: './data-table-view.component.html',
  styleUrls: ['./data-table-view.component.css']
})
export class DataTableViewComponent implements OnInit {
  displayedColumns: string[] = ['imageUrl', 'title', 'address', 'beds', 'bath', 'coveredAreaSQFT', 'propertyType', 'isCommercial', 'price'];
  dataSource: MatTableDataSource<any> | any;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator | any;
  @ViewChild(MatSort, { static: true }) sort: MatSort |any;

  ngOnInit() {
    // You should fetch your property listings from the mock API service here
    // For demonstration purposes, I'm manually initializing the listings array
    const listings = [
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

    this.dataSource = new MatTableDataSource<any>(listings);
    
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    
  }
}
