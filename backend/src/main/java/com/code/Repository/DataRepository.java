package com.code.Repository;

import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import com.code.Entity.Data;

@Repository
public interface DataRepository extends MongoRepository<Data, ObjectId> {
	
//--------------------------------  Intensity Methods  -------------------------------------------------------------------------------------------
	@Query(value = "{}", fields = "{ 'intensity' : 1,', '_id' : 0 }")
    List<Data> findAllIntensity();
	List<Data> findIntensityByRegion(String Sector);
	
	
//--------------------------------  Country Methods  -------------------------------------------------------------------------------------------
	@Query(value = "{}", fields = "{ 'country' : 1, '_id' : 0 }")
	List<Data> findAllCountry();
	List<Data> findCountryByRegion(String region);
	

//--------------------------------  Topics Methods  -------------------------------------------------------------------------------------------
	@Query(value = "{}", fields = "{ 'topic' : 1, '_id' : 0 }")
	List<Data> findAllTopic();
	List<Data> findTopicBySector(String sector);
	
//--------------------------------  Likelihood & Relevance Methods  -------------------------------------------------------------------------------------------	
	@Query(value = "{ }", fields = "{ 'likelihood': 1, 'relevance': 1 }")
    List<Data> findLikelihoodAndRelevance();	
	List<Data> findLikelihoodAndRelevanceByRegion(String region);
}

