import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

// fire base
import {environment} from '../environments/environment';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';

//auth fire base
import {AngularFireAuthModule} from "@angular/fire/auth"

import { LoginComponent } from './comps/login/login.component';
import { ProdsComponent } from './firecomps/prods/prods.component';
import { AppAdminComponent } from './comps/app-admin/app-admin.component';
import { HeaderAdminComponent } from './comps/header-admin/header-admin.component';
import { SideNavAdminComponent } from './comps/side-nav-admin/side-nav-admin.component';
import { AddCustomerComponent } from './comps/add-customer/add-customer.component';
import { CustomerListComponent } from './comps/customer-list/customer-list.component';
import { CustomerInfoComponent } from './comps/customer-info/customer-info.component';
import { CustomerEditComponent } from './comps/customer-edit/customer-edit.component';
import { SignupComponent } from './comps/signup/signup.component';
import { ContactListComponent } from './comps/contact-list/contact-list.component';
import { LeadsComponent } from './comps/leads/leads.component';
import { ReportsComponent } from './comps/reports/reports.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProdsComponent,
    AppAdminComponent,
    HeaderAdminComponent,
    SideNavAdminComponent,
    AddCustomerComponent,
    CustomerListComponent,
    CustomerInfoComponent,
    CustomerEditComponent,
    SignupComponent,
    ContactListComponent,
    LeadsComponent,
    ReportsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase,"clientpanel"),
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }