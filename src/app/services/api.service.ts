import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { ApiFactoryService } from './apiFactory.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
    private baseUrl = environment.apiUrl;
    getHeader() {
        return new HttpHeaders({});
    }

  constructor(private http: HttpClient, private endPoints: ApiFactoryService) { }

  getGridData(): Observable<any> {
    return this.http.get(this.baseUrl+ this.endPoints.DashboardGread);
  }
}