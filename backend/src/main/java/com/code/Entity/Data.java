package com.code.Entity;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Data")
public class Data {
    @Id
    private ObjectId _id;
    private int start_year;
    private int end_year;
    private double citylng;
    private double citylat;
    private int intensity;
    private double impact;
    private int relevance;
    private int likelihood;
    private String topic;
    private String insight;
    private String swot;
    private String url;
    private String region;
    private String addTime;
	private String sector;
	private String publishTime;
    private String city;
    private String country;
    private String pestle;
    private String source;
    private String title;

    
    public Data() {
	}
    
    
    
    public Data(int intensity) {
		super();
		this.intensity = intensity;
	}



	public Data(int start_year, int end_year, double citylng, double citylat, int intensity, double impact,
			int relevance, int likelihood, String sector, String topic, String insight, String swot, String url,
			String region, String addTime, String publishTime, String city, String country, String pestle,
			String source, String title) {
		this.start_year = start_year;
		this.end_year = end_year;
		this.citylng = citylng;
		this.citylat = citylat;
		this.intensity = intensity;
		this.impact = impact;
		this.relevance = relevance;
		this.likelihood = likelihood;
		this.sector = sector;
		this.topic = topic;
		this.insight = insight;
		this.swot = swot;
		this.url = url;
		this.region = region;
		this.addTime = addTime;
		this.publishTime = publishTime;
		this.city = city;
		this.country = country;
		this.pestle = pestle;
		this.source = source;
		this.title = title;
	}
	
	public int getStart_year() {
		return start_year;
	}
	public void setStart_year(int start_year) {
		this.start_year = start_year;
	}
	public int getEnd_year() {
		return end_year;
	}
	public void setEnd_year(int end_year) {
		this.end_year = end_year;
	}
	public double getCitylng() {
		return citylng;
	}
	public void setCitylng(double citylng) {
		this.citylng = citylng;
	}
	public double getCitylat() {
		return citylat;
	}
	public void setCitylat(double citylat) {
		this.citylat = citylat;
	}
	public int getIntensity() {
		return intensity;
	}
	public void setIntensity(int intensity) {
		this.intensity = intensity;
	}
	public double getImpact() {
		return impact;
	}
	public void setImpact(double impact) {
		this.impact = impact;
	}
	public int getRelevance() {
		return relevance;
	}
	public void setRelevance(int relevance) {
		this.relevance = relevance;
	}
	public int getLikelihood() {
		return likelihood;
	}
	public void setLikelihood(int likelihood) {
		this.likelihood = likelihood;
	}
	public String getSector() {
		return sector;
	}
	public void setSector(String sector) {
		this.sector = sector;
	}
	public String getTopic() {
		return topic;
	}
	public void setTopic(String topic) {
		this.topic = topic;
	}
	public String getInsight() {
		return insight;
	}
	public void setInsight(String insight) {
		this.insight = insight;
	}
	public String getSwot() {
		return swot;
	}
	public void setSwot(String swot) {
		this.swot = swot;
	}
	public String getUrl() {
		return url;
	}
	public void setUrl(String url) {
		this.url = url;
	}
	public String getRegion() {
		return region;
	}
	public void setRegion(String region) {
		this.region = region;
	}
	public String getAddTime() {
		return addTime;
	}
	public void setAddTime(String addTime) {
		this.addTime = addTime;
	}
	public String getPublishTime() {
		return publishTime;
	}
	public void setPublishTime(String publishTime) {
		this.publishTime = publishTime;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getCountry() {
		return country;
	}
	public void setCountry(String country) {
		this.country = country;
	}
	public String getPestle() {
		return pestle;
	}
	public void setPestle(String pestle) {
		this.pestle = pestle;
	}
	public String getSource() {
		return source;
	}
	public void setSource(String source) {
		this.source = source;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	

    // Getters and setters (omitted for brevity)
}

