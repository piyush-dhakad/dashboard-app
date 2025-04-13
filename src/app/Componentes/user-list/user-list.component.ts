import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { User, TableColumn, createDefaultUser } from '../../models/dataModel';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  loading: boolean = false;
  columnsList: TableColumn[] = [];
  currentPage = 1;
  totalPages = 10;
  
  showEditPopup: boolean = false;
  showDeletePopup: boolean = false;
  showAddPopup: boolean = false;
  newUser: User = createDefaultUser();
  currentUser: User | null = createDefaultUser();
  // currentUser: User | null = null;
  currentIndex: number | null = null;
  allCheck: boolean = false;
  

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.loading = true;
    this.apiService.getGridData().subscribe({
      next: (data) => {
        this.columnsList = data.grid_columns;
        this.users = data.grid_data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error fetching data:', err);
        this.loading = false;
      }
    });
  }

  openAddPopup(): void {
    this.newUser = {
      name: { first_name: '', last_name: '', handle: '' },
      status: '',
      role: '',
      license_used: 0,
      teams: [],
      id:'',
      email:''
    };
    this.showAddPopup = true;
  }

  addUser(): void {
    const newId = this.generateId();
    const completeUser: User = {
      ...this.newUser as User,
      id: newId
    };
    this.users.push(completeUser);
    this.showAddPopup = false;
    this.showNotification('User added successfully!');
  }

  openEditPopup(user: User, index: number): void {
    this.currentUser = { ...user };
    this.currentIndex = index;
    this.showEditPopup = true;
  }

  updateUser(): void {
    if (this.currentIndex !== null && this.currentUser) {
      this.users[this.currentIndex] = { ...this.currentUser };
      this.showEditPopup = false;
      this.showNotification('User updated successfully!');
    }
  }

  openDeletePopup(user: User, index: number): void {
    this.currentUser = user;
    this.currentIndex = index;
    this.showDeletePopup = true;
  }

  confirmDelete(): void {
    if (this.currentIndex !== null) {
      this.users.splice(this.currentIndex, 1);
      this.showDeletePopup = false;
      this.showNotification('User deleted successfully!');
    }
  }

  private generateId(): string {
    return Math.random().toString(36).substring(2) + Date.now().toString(36);
  }

  private showNotification(message: string): void {
    alert(message);
  }
  cancelOperation(): void {
    this.showAddPopup = false;
    this.showEditPopup = false;
    this.showDeletePopup = false;
    this.currentUser = null;
    this.currentIndex = null;
  }

  onCheckBoxClick() {
    this.allCheck = !this.allCheck;

  }
  singleCheck() {
    this.allCheck = false;
  }
}