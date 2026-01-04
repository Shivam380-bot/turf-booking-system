package com.bookmyturf_backend.service;

import com.bookmyturf_backend.dto.BookingRequest;
import com.bookmyturf_backend.entity.Booking;
import com.bookmyturf_backend.entity.Turf;
import com.bookmyturf_backend.entity.User;
import com.bookmyturf_backend.repository.BookingRepository;
import com.bookmyturf_backend.repository.TurfRepository;
import com.bookmyturf_backend.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.time.Duration;

@Service
public class BookingService {

    private final BookingRepository bookingRepository;
    private final TurfRepository turfRepository;
    private final UserRepository userRepository;

    public BookingService(
            BookingRepository bookingRepository,
            TurfRepository turfRepository,
            UserRepository userRepository) {

        this.bookingRepository = bookingRepository;
        this.turfRepository = turfRepository;
        this.userRepository = userRepository;
    }

    public Booking bookTurf(BookingRequest request, String email) {

        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));

        Turf turf = turfRepository.findById(request.getTurfId())

                .orElseThrow(() -> new RuntimeException("Turf not found"));

        // ❌ check overlap
        boolean isBooked = bookingRepository
        .existsByTurfIdAndBookingDateAndStartTimeLessThanAndEndTimeGreaterThan(
                turf.getId(),
                request.getBookingDate(),
                request.getEndTime(),
                request.getStartTime()
        );


        if (isBooked) {
            throw new RuntimeException("Turf already booked for this slot");
        }

        long hours = Duration.between(
        request.getStartTime(),
        request.getEndTime()
).toHours();

        double price = hours * turf.getPricePerHour();

       Booking booking = new Booking();
booking.setBookingDate(request.getBookingDate());
booking.setStartTime(request.getStartTime());
booking.setEndTime(request.getEndTime());
booking.setTotalPrice(price);
booking.setUser(user);
booking.setTurf(turf);



        return bookingRepository.save(booking);
    }

}
