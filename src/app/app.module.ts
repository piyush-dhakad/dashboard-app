import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DashboardComponent } from './Componentes/dashboard/dashboard.component';
import { ApiService } from './services/api.service';
import { HttpClientModule } from '@angular/common/http';
import { VendorBreakdownComponent } from './Componentes/vendor-breakdown/vendor-breakdown.component';
import { VendorsMonitoredComponent } from './Componentes/vendors-monitored/vendors-monitored.component';
import { HeaderComponent } from './Componentes/header/header.component';
import { SideBarComponent } from './Componentes/side-bar/side-bar.component';
import { UserListComponent } from './Componentes/user-list/user-list.component';
import { FormsModule } from '@angular/forms';
import { ChartModule } from 'angular-highcharts';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    VendorBreakdownComponent,
    VendorsMonitoredComponent,
    HeaderComponent,
    SideBarComponent,
    UserListComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ChartModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
