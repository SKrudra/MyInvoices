import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomersComponent } from './customers/customers.component';
import { HoursControlComponent } from './hours-control/hours-control.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { PhoneDirective } from './validators/phone.directive';
import { HoursDirective } from './validators/hours.directive';

@NgModule({
  declarations: [
    AppComponent,
    CustomerFormComponent,
    CustomerComponent,
    CustomersComponent,
    HoursControlComponent,
    InvoicesComponent,
    InvoiceComponent,
    PhoneDirective,
    HoursDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
