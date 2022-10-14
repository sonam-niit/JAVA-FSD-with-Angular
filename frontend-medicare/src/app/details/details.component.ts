import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from '../customer.service';
import { Customer } from '../customerModel';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  customer:Customer;
  constructor(private route:ActivatedRoute, private service:CustomerService) { }

  ngOnInit(): void {
    const id= this.route.snapshot.paramMap.get('id');
    this.service.getById(Number(id)).subscribe(x=>this.customer=x)
  }

}
