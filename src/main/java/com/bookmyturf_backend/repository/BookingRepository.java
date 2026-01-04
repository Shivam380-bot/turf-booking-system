package com.bookmyturf_backend.repository;

import com.bookmyturf_backend.entity.Booking;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

public interface BookingRepository extends JpaRepository<Booking, Long> {

    List<Booking> findByTurfIdAndBookingDate(Long turfId, LocalDate bookingDate);

    boolean existsByTurfIdAndBookingDateAndStartTimeLessThanAndEndTimeGreaterThan(
            Long turfId,
            LocalDate bookingDate,
            LocalTime endTime,
            LocalTime startTime
    );
}
