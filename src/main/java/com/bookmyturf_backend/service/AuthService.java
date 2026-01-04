package com.bookmyturf_backend.service;

import com.bookmyturf_backend.config.JwtUtil;
import com.bookmyturf_backend.dto.AuthResponse;
import com.bookmyturf_backend.dto.LoginRequest;
import com.bookmyturf_backend.dto.SignupRequest;
import com.bookmyturf_backend.entity.Role;
import com.bookmyturf_backend.entity.User;
import com.bookmyturf_backend.repository.RoleRepository;
import com.bookmyturf_backend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Collections;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final UserRepository userRepository;
    private final RoleRepository roleRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtUtil jwtUtil;   // ✅ YAHAN ADD KARNA HAI

    // REGISTER
    public String registerUser(SignupRequest request) {

        if (userRepository.existsByEmail(request.getEmail())) {
            return "Email already registered!";
        }

        Role userRole = roleRepository.findByName("ROLE_USER")
                .orElseThrow(() -> new RuntimeException("Role not found"));

        User user = new User();
        user.setName(request.getName());
        user.setEmail(request.getEmail());
        user.setPhone(request.getPhone());
        user.setPassword(passwordEncoder.encode(request.getPassword()));
        user.setRoles(Collections.singleton(userRole));

        userRepository.save(user);

        return "User registered successfully";
    }

    // LOGIN (JWT TOKEN)
   public AuthResponse loginUser(LoginRequest request) {

    User user = userRepository.findByEmail(request.getEmail())
            .orElseThrow(() -> new RuntimeException("Invalid email"));

    if (!passwordEncoder.matches(request.getPassword(), user.getPassword())) {
        throw new RuntimeException("Invalid password");
    }

    String token = jwtUtil.generateToken(user.getEmail());
    return new AuthResponse(token);
}


}
