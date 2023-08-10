package com.code.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.code.Entity.Data;
import com.code.Repository.DataRepository;

@Service
public class DataService {
	@Autowired
	private DataRepository repository;
	
	public List<Data> getData(){
		return repository.findAll();
	}
	

//--------------------------------  Intensity Methods  -------------------------------------------------------------------------------------------
	
	public HashMap<Integer, Integer> getIntensityBySector(String sector){
		List<Data> list = repository.findTopicBySector(sector);
		HashMap<Integer, Integer> map = new HashMap<>();
		
		for(Data i : list) {
			int intensity = i.getIntensity();
			map.put(intensity, map.getOrDefault(intensity, 0)+1);
		}
        return map;
	}
	public HashMap<Integer, Integer> getAllIntensity() {
		List<Data> list = repository.findAllIntensity();
		HashMap<Integer, Integer> map = new HashMap<>();
		
		for(Data i : list) {
			int end_year = i.getEnd_year();
			int intensity = i.getIntensity();
			map.put(end_year, map.getOrDefault(end_year, intensity)+intensity);
		}
        return map;
    }
	
	
//--------------------------------  Country Methods  -------------------------------------------------------------------------------------------
	
	public HashMap<String, Integer> getCountriesByRegion(String region){
		List<Data> list = repository.findCountryByRegion(region);
		HashMap<String, Integer> map = new HashMap<>();
		
		for(Data i : list) {
			String country = i.getCountry();
			if(!country.isEmpty()) {
				map.put(country, map.getOrDefault(country, 0)+1);
			}
		}
        return map;
	}
	public HashMap<String, Integer> getAllCountries(){
		List<Data> list = repository.findAllCountry();
		HashMap<String, Integer> map = new HashMap<>();
		
		for(Data i : list) {
			String country = i.getCountry();
			if(!country.isEmpty()) {
				map.put(country, map.getOrDefault(country, 0)+1);
			}
		}
        return map;
	}
	
	
//--------------------------------  Topics Methods -------------------------------------------------------------------------------------------
	
	public HashMap<String, Integer> getTopicBySector(String sector){
		List<Data> list = repository.findTopicBySector(sector);
		HashMap<String, Integer> map = new HashMap<>();
		
		for(Data i : list) {
			String topic = i.getTopic();
			if(!topic.isEmpty()) {
				map.put(topic, map.getOrDefault(topic, 0)+1);
			}
		}
        return map;
	}
	public HashMap<String, Integer> getAllTopics(){
		List<Data> list = repository.findAllTopic();
		HashMap<String, Integer> map = new HashMap<>();
		
		for(Data i : list) {
			String topic = i.getTopic();
			if(!topic.isEmpty()) {
				map.put(topic, map.getOrDefault(topic, 0)+1);
			}
		}
        return map;
	}
	
	
//--------------------------------  Likelihood & Relevance Methods  -------------------------------------------------------------------------------------------	
	
	public List<List<Integer>> getLikelihoodAndRelevanceByRegion(String region){
		List<Data> list = repository.findLikelihoodAndRelevanceByRegion(region);
		List<List<Integer>> ans = new ArrayList<>();
		List<Integer> likelihood = new ArrayList<>();
		List<Integer> relevance = new ArrayList<>();
		for(Data i : list) {
			likelihood.add(i.getLikelihood());
			relevance.add(i.getRelevance());
		}
		ans.add(likelihood);
		ans.add(relevance);
        return ans;
	}
	public List<List<Integer>> getAllLikelihoodAndrelevance(){
		List<Data> list = repository.findLikelihoodAndRelevance();
		List<List<Integer>> ans = new ArrayList<>();
		List<Integer> likelihood = new ArrayList<>();
		List<Integer> relevance = new ArrayList<>();
		for(Data i : list) {
			likelihood.add(i.getLikelihood());
			relevance.add(i.getRelevance());
		}
		ans.add(likelihood);
		ans.add(relevance);
        return ans;
	}
}
