package com.example.demo.Service;


import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Models.Eb;
import com.example.demo.Repositories.EbRepo;



@Service
public class EbService {
	@Autowired
	EbRepo repository;
	public Optional<Eb>getEb(int id){
		return repository.findById(id);
	}
	public String updateDetails(Eb foo) {
		repository.save(foo);
		return "updated";
	}
	public String deleteDetails(int id)
	{
		repository.deleteById(id);
		return "Id deleted";
	}

}