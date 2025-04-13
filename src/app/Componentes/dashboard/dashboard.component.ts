import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service'; 

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  gridData: any[] = [];
  loading = true;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    // this.loadData();
  }

  loadData(): void {
    this.loading = true;
    this.apiService.getGridData().subscribe({
      next: (data) => {
        this.gridData = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error fetching data:', err);
        this.loading = false;
      }
    });
  }

  addItem(item: any): void {
    this.gridData.push(item);
  }

  updateItem(index: number, updatedItem: any): void {
    this.gridData[index] = updatedItem;
  }

  deleteItem(index: number): void {
    if (confirm('Are you sure you want to delete this item?')) {
      this.gridData.splice(index, 1);
    }
  }
  editItem(index:number) {
    
  }
}