import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../customer.service';
import { Customer } from '../customerModel';
import {FormGroup,Validators,FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-editcustomer',
  templateUrl: './editcustomer.component.html',
  styleUrls: ['./editcustomer.component.css']
})
export class EditcustomerComponent implements OnInit {
  
  submitted: boolean = false;
  id:string|null;
  registerForm: FormGroup;
  constructor(private builder: FormBuilder, private service: CustomerService,
    private router: Router,private route:ActivatedRoute) { }

  customer:Customer;
  ngOnInit(): void {

    this.id= this.route.snapshot.paramMap.get('id');
    this.service.getById(Number(this.id)).subscribe(x=>this.customer=x)

    this.registerForm = this.builder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required]
    })
  }

  get form() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid)
      return
    else {
      this.service.updateCustomer(this.customer,Number(this.id)).subscribe(x => console.log(x));
      alert("Profile Updated Successfully successfully");
      this.router.navigate(['list'])
    }
  }
}
