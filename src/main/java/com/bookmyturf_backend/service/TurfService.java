package com.bookmyturf_backend.service;

import com.bookmyturf_backend.entity.Turf;
import com.bookmyturf_backend.repository.TurfRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TurfService {

    private final TurfRepository turfRepository;

    public TurfService(TurfRepository turfRepository) {
        this.turfRepository = turfRepository;
    }

    // 🔹 Get all turfs (admin / testing)
    public List<Turf> getAllTurfs() {
        return turfRepository.findAll();
    }

    // 🔹 Get all AVAILABLE turfs (frontend main use)
    public List<Turf> getAvailableTurfs() {
        return turfRepository.findByAvailableTrue();
    }

    // 🔹 Get turf by ID
    public Turf getTurfById(Long id) {
        return turfRepository.findById(id)
                .orElseThrow(() ->
                        new RuntimeException("Turf with id " + id + " not found")
                );
    }

    // 🔹 Get turfs by city
    public List<Turf> getTurfsByCity(String city) {
        return turfRepository.findByCityIgnoreCase(city);
    }

    // 🔹 Get available turfs by city
    public List<Turf> getAvailableTurfsByCity(String city) {
        return turfRepository.findByCityIgnoreCaseAndAvailableTrue(city);
    }

    // 🔹 Search turf by name (future feature)
    public List<Turf> searchTurfs(String keyword) {
        return turfRepository.findByNameContainingIgnoreCase(keyword);
    }
}
