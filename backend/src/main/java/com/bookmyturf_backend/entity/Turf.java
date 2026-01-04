package com.bookmyturf_backend.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "turfs")
public class Turf {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    // City / Area (Palasia, Vijay Nagar, etc.)
    @Column(nullable = false)
    private String city;

    // Full address
    @Column(length = 500)
    private String address;

    // Turf description
    @Column(length = 1000)
    private String description;

    // Timings (Morning / Evening text)
    private String timings;

    // Price per hour
    private Double pricePerHour;

    // Image URL (used by frontend)
    private String imageUrl;

    // Availability status
    private boolean available;

    // 🔹 Constructors
    public Turf() {}

    public Turf(String name, String city, String address,
                String description, String timings,
                Double pricePerHour, String imageUrl,
                boolean available) {

        this.name = name;
        this.city = city;
        this.address = address;
        this.description = description;
        this.timings = timings;
        this.pricePerHour = pricePerHour;
        this.imageUrl = imageUrl;
        this.available = available;
    }

    // 🔹 Getters & Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getTimings() {
        return timings;
    }

    public void setTimings(String timings) {
        this.timings = timings;
    }

    public Double getPricePerHour() {
        return pricePerHour;
    }

    public void setPricePerHour(Double pricePerHour) {
        this.pricePerHour = pricePerHour;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public boolean isAvailable() {
        return available;
    }

    public void setAvailable(boolean available) {
        this.available = available;
    }
}
