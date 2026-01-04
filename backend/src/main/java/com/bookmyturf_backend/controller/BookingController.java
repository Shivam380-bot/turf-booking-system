package com.bookmyturf_backend.controller;

import com.bookmyturf_backend.dto.BookingRequest;
import com.bookmyturf_backend.entity.Booking;
import com.bookmyturf_backend.service.BookingService;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;

@RestController
@RequestMapping("/api/bookings")
@CrossOrigin
public class BookingController {

    private final BookingService bookingService;

    public BookingController(BookingService bookingService) {
        this.bookingService = bookingService;
    }

    // 🔐 BOOK TURF (JWT REQUIRED)
    @PostMapping
    public Booking bookTurf(
            @RequestBody BookingRequest request,
            Principal principal
    ) {
        String email = principal.getName(); // JWT se email
        return bookingService.bookTurf(request, email);
    }
}
