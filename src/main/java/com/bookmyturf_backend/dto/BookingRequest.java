package com.bookmyturf_backend.dto;

import java.time.LocalDate;
import java.time.LocalTime;

public class BookingRequest {

    private Long turfId;
    private LocalDate bookingDate;
    private LocalTime startTime;
    private LocalTime endTime;

    // ✅ GETTERS
    public Long getTurfId() {
        return turfId;
    }

    public LocalDate getBookingDate() {
        return bookingDate;
    }

    public LocalTime getStartTime() {
        return startTime;
    }

    public LocalTime getEndTime() {
        return endTime;
    }
}
