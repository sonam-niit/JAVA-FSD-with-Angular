package com.simplilearn.medicare.service;

import java.util.List;

import com.simplilearn.medicare.entity.Customer;

public interface CustomerService {

	public Customer saveCustomer(Customer c); //create
	public List<Customer> getAllCustomers(); //getAll
	public Customer updateCustomer(Customer c,int id); //update
	public boolean deleteCustomer(int id); //delete
	public Customer getCustById(int id); //find customer by id
}
