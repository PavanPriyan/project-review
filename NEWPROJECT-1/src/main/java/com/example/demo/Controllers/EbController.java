package com.example.demo.Controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Models.Eb;
import com.example.demo.Repositories.EbRepo;
import com.example.demo.Service.EbService;

@RestController
@CrossOrigin
public class EbController {
	@Autowired
    EbRepo serviceRepository;
	@Autowired
	EbService service;
	
	@GetMapping("/")
	List<Eb> getList()
	{
		return serviceRepository.findAll();
		
	}
	
	@GetMapping("{id}")
	public Optional<Eb>getbyid(@PathVariable int id)
	{
		return service.getEb(id);
	}
	
	@PostMapping("/post")
	public Eb create(@RequestBody Eb boo)
	{
		return serviceRepository.save(boo);
	}
	
	@PutMapping("/put")

	public String update(@RequestBody Eb boo)
	{
		return service.updateDetails(boo);
	}
	
	@DeleteMapping("/del")

	public String delete(@RequestParam int id)
	{
	   return service.deleteDetails(id);
	}

}