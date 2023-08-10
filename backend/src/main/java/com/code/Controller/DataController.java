package com.code.Controller;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.code.Entity.Data;
import com.code.Service.DataService;

@RestController
@RequestMapping("/api/v1/main")
@CrossOrigin(origins = "*")
public class DataController {
	
	@Autowired
	private DataService service;
	
	@GetMapping
	public ResponseEntity<List<Data>> getAllData(){
		return new ResponseEntity<List<Data>>(service.getData(),HttpStatus.OK);
	}
	
	
//--------------------------------  Intensity Methods  -------------------------------------------------------------------------------------------
	
	@GetMapping("/getIntensities")
	public ResponseEntity<HashMap<Integer, Integer>> getIntensities() {
        HashMap<Integer, Integer> intensities;
       
        intensities = service.getAllIntensity();
        
        return ResponseEntity.ok(intensities);
    }
	
	@GetMapping("/getIntensities/{sector}")
	public ResponseEntity<HashMap<Integer, Integer>> getIntensities(@PathVariable String sector) {
        HashMap<Integer, Integer> intensities;
        
        intensities = service.getIntensityBySector(sector);
        
        return ResponseEntity.ok(intensities);
    }
	
	
//--------------------------------  Country Methods  -------------------------------------------------------------------------------------------
	
	@GetMapping("/getCountries")
	public ResponseEntity<HashMap<String, Integer>> getCountries() {
        HashMap<String, Integer> countries;
       
        countries = service.getAllCountries();
        
        return ResponseEntity.ok(countries);
    }
	
	@GetMapping("/getCountries/{region}")
	public ResponseEntity<HashMap<String, Integer>> getCountries(@PathVariable String region) {
        HashMap<String, Integer> countries;
        
        countries = service.getCountriesByRegion(region);
        
        return ResponseEntity.ok(countries);
    }
	
	
//--------------------------------  Topics Methods  -------------------------------------------------------------------------------------------
	
	@GetMapping("/getTopics")
	public ResponseEntity<HashMap<String, Integer>> getTopics() {
        HashMap<String, Integer> topics;
       
        topics = service.getAllTopics();
        
        return ResponseEntity.ok(topics);
    }
	
	@GetMapping("/getTopics/{sector}")
	public ResponseEntity<HashMap<String, Integer>> getTopics(@PathVariable String sector) {
        HashMap<String, Integer> topics;
        
        topics = service.getTopicBySector(sector);
        
        return ResponseEntity.ok(topics);
    }
	
	
//--------------------------------  Topics Methods  -------------------------------------------------------------------------------------------

	@GetMapping("/getLD")
	public ResponseEntity<List<List<Integer>>> getLikelihoodAndRelevance() {
		List<List<Integer>> val;
       
        val = service.getAllLikelihoodAndrelevance();
        
        return ResponseEntity.ok(val);
    }
	
	@GetMapping("/getLD/{region}")
	public ResponseEntity<List<List<Integer>>> getLikelihoodAndRelevance(@PathVariable String region) {
		List<List<Integer>> val;
        
        val = service.getLikelihoodAndRelevanceByRegion(region);
        
        return ResponseEntity.ok(val);
    }
}

