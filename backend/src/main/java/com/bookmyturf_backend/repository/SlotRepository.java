package com.bookmyturf_backend.repository;


import com.bookmyturf_backend.entity.Slot;
import com.bookmyturf_backend.entity.Turf;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface SlotRepository extends JpaRepository<Slot, Long> {

    List<Slot> findByTurfAndAvailableTrue(Turf turf);
}

