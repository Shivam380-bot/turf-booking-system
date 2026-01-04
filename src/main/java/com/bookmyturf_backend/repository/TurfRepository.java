package com.bookmyturf_backend.repository;

import com.bookmyturf_backend.entity.Turf;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TurfRepository extends JpaRepository<Turf, Long> {

    // 🔹 Get all available turfs
    List<Turf> findByAvailableTrue();

    // 🔹 Filter by city
    List<Turf> findByCityIgnoreCase(String city);

    // 🔹 City + availability
    List<Turf> findByCityIgnoreCaseAndAvailableTrue(String city);

    // 🔹 Search by name (optional – future feature)
    List<Turf> findByNameContainingIgnoreCase(String keyword);
}
