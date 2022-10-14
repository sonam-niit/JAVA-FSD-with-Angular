import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerService } from '../customer.service';
import { Customer } from '../customerModel';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  customer:Customer=new Customer();
  submitted:boolean=false;
  registerForm:FormGroup;
  constructor(private builder:FormBuilder, private service:CustomerService,
    private router:Router) { }

  ngOnInit(): void {
    this.registerForm= this.builder.group({
      name:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      address:['',Validators.required]
    })
  }

  get form(){
    return this.registerForm.controls;
  }

  onSubmit(){
    this.submitted=true;
    if(this.registerForm.invalid)
      return
    else{
      this.service.addCustomer(this.customer).subscribe(x=>console.log(x));
      alert("Customer added successfully");
      this.router.navigate(['list'])
    }
  }
}
