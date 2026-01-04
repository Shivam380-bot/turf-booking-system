package com.bookmyturf_backend.controller;

import com.bookmyturf_backend.entity.Turf;
import com.bookmyturf_backend.service.TurfService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/turfs")
@CrossOrigin(origins = "http://localhost:5173") // 🔥 FRONTEND URL
public class TurfController {

    private final TurfService turfService;

    public TurfController(TurfService turfService) {
        this.turfService = turfService;
    }

    // ✅ GET ALL TURFS (admin / testing)
    @GetMapping
    public List<Turf> getAllTurfs() {
        return turfService.getAllTurfs();
    }

    // ✅ GET ONLY AVAILABLE TURFS (frontend main page)
    @GetMapping("/available")
    public List<Turf> getAvailableTurfs() {
        return turfService.getAvailableTurfs();
    }

    // ✅ GET TURF BY ID
    @GetMapping("/{id}")
    public Turf getTurfById(@PathVariable Long id) {
        return turfService.getTurfById(id);
    }

    // ✅ GET TURFS BY CITY
    @GetMapping("/city/{city}")
    public List<Turf> getTurfsByCity(@PathVariable String city) {
        return turfService.getTurfsByCity(city);
    }

    // ✅ GET AVAILABLE TURFS BY CITY
    @GetMapping("/available/city/{city}")
    public List<Turf> getAvailableTurfsByCity(@PathVariable String city) {
        return turfService.getAvailableTurfsByCity(city);
    }

    // ✅ SEARCH TURF BY NAME
    @GetMapping("/search")
    public List<Turf> searchTurfs(@RequestParam String q) {
        return turfService.searchTurfs(q);
    }
}
