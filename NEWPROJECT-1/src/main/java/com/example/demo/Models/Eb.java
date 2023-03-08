package com.example.demo.Models;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Eb {
	
	@Id
	private int Id;
	private String Name;
	private String Address;
	private int Units;
	private int Bill;
	public Eb(int id, String name, String address, int units, int bill, String dueDate) {
		super();
		Id = id;
		Name = name;
		Address = address;
		Units = units;
		Bill = bill;
		DueDate = dueDate;
	}
	public int getId() {
		return Id;
	}
	public void setId(int id) {
		Id = id;
	}
	public String getName() {
		return Name;
	}
	public void setName(String name) {
		Name = name;
	}
	public String getAddress() {
		return Address;
	}
	public void setAddress(String address) {
		Address = address;
	}
	public int getUnits() {
		return Units;
	}
	public void setUnits(int units) {
		Units = units;
	}
	public int getBill() {
		return Bill;
	}
	public void setBill(int bill) {
		Bill = bill;
	}
	public String getDueDate() {
		return DueDate;
	}
	public void setDueDate(String dueDate) {
		DueDate = dueDate;
	}
	public Eb() {
		super();
		// TODO Auto-generated constructor stub
	}
	private String DueDate;
	

}
