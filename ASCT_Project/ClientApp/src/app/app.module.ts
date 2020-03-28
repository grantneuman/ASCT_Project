import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCardModule } from '@angular/material/card';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { TechnicianFormComponent } from './technician-form/technician-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { SystemNameComponent } from './system-name/system-name.component';
import { TailNumberComponent } from './tail-number/tail-number.component';
import { FleetSelectComponent } from './fleet-select/fleet-select.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TechnicianOutputTableComponent } from './technician-output-table/technician-output-table.component';
import { MatTableModule } from '@angular/material/table';
import { TableBasicExample} from './table-basic-example/table-basic-example.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    TechnicianFormComponent,
    SystemNameComponent,
    TailNumberComponent,
    FleetSelectComponent,
    TechnicianOutputTableComponent,
    TableBasicExample,
  ],
  imports: [
    MatTableModule,
    FlexLayoutModule,
  MatCardModule,
    MatInputModule,
    MatFormFieldModule,
  MatAutocompleteModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatButtonToggleModule,
  BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'technician-form', component: TechnicianFormComponent },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
    ]),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
