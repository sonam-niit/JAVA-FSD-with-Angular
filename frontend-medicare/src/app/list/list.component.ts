import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Customer } from '../customerModel';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  customers:Customer[];
  constructor(private service:CustomerService) { }

  ngOnInit(): void {
    this.service.getAllCustomers().subscribe(x=> this.customers=x)
  }

  delete(id:number){
    this.customers=this.customers.filter(c=>c.id!==id);
    this.service.deleteById(id).subscribe(x=>console.log(x))
  }
}
