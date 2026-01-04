package com.bookmyturf_backend.controller;


import com.bookmyturf_backend.dto.AuthResponse;
import com.bookmyturf_backend.dto.LoginRequest;
import com.bookmyturf_backend.dto.SignupRequest;
import com.bookmyturf_backend.service.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
@CrossOrigin("*")
public class AuthController {

    private final AuthService authService;

    @PostMapping("/register")
    public String register(@RequestBody SignupRequest request) {
        return authService.registerUser(request);
    }

   @PostMapping("/login")
public AuthResponse login(@RequestBody LoginRequest request) {
    return authService.loginUser(request);
}



}
