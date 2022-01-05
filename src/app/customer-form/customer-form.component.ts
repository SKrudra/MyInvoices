import { CustomersService } from './../services/customers.service';
import { Component, OnInit } from '@angular/core';
import { TdDialogService } from '@covalent/core/dialogs';
import { TdLoadingService } from '@covalent/core/loading';
import { Customer } from '../services/customer';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.scss']
})
export class CustomerFormComponent implements OnInit {

  customer!: Customer;

  constructor(private loadingService: TdLoadingService,
    private dialogService: TdDialogService,
    private customerService: CustomersService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.loadingService.register('customer');
  }

}
