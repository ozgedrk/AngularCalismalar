import { Component, OnInit, Input } from '@angular/core';
import { Customer } from './customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customers: Customer[] = []
  selectedCustomer: Customer | undefined;
  @Input() city: string | undefined 

  selectCustomer(customer: Customer) {
    alert(customer.firstName)
    this.selectedCustomer = customer;


  }
  constructor() {

  }

  ngOnInit(): void {

    this.customers = [
      { id: 1, firstName: "ozge", lastName: "dirik", age: 23 },
      //  { id: 4, firstName: "buse", lastName: "dirik", age: 56 }
    ]
  }
}
