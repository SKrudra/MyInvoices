import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NgForm, NgControl } from '@angular/forms';

import { TdDialogService } from '@covalent/core/dialogs';
import { TdLoadingService } from '@covalent/core/loading';

import { Customer } from '../services/customer';
import { CustomersService } from './../services/customers.service';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.scss']
})
export class CustomerFormComponent implements OnInit {

  customer!: Customer;
  ngForm!: NgForm;

  constructor(private loadingService: TdLoadingService,
    private dialogService: TdDialogService,
    private customersService: CustomersService,
    private router: Router, private route: ActivatedRoute) { }

    ngOnInit() {
      this.loadingService.register('customer');
      this.route.params.subscribe((params: Params) => {
        const customerId = params['customerId'] 
        if (customerId) {
          this.customersService.get<Customer>(customerId).subscribe(customer => {
            this.customer = customer;
            this.loadingService.resolve('customer');
          });
        } else {
          this.customer = new Customer();
          this.loadingService.resolve('customer');
        }
      });
    }
  
    save() {
      if (this.customer.id) {
        this.customersService.update<Customer>(this.customer.id, this.customer).subscribe(response => {
          this.viewCustomer(response.id);
        });
      } else {
        this.customersService.create<Customer>(this.customer).subscribe(response => {
          this.viewCustomer(response.id);
        });
      }
    }
  
    delete() {
      this.dialogService.openConfirm({
        message: 'Are you sure you want to delete this customer?',
        title: 'Confirm',
        acceptButton: 'Delete'
      }).afterClosed().subscribe((accept: boolean) => {
        if (accept) {
          this.loadingService.register('customer');
          this.customersService.delete(this.customer.id).subscribe(response => {
            this.loadingService.resolve('customer');
            this.customer.id = 0;
            this.cancel();
          });
        }
      });
    }
  
    cancel() {
      if (this.customer.id) {
        this.router.navigate(['/customers', this.customer.id]);
      } else {
        this.router.navigateByUrl('/customers');
      }
    }
  
    private viewCustomer(id: number | undefined) {
      this.router.navigate(['/customers', id]);
    }

}
