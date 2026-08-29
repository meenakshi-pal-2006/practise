package com.example.auth.controller;

import com.example.auth.entity.User;
import com.example.auth.service.AuthService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "*")
public class AuthController {

    private final AuthService authService;

    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody User user) {

        String result = authService.register(user);

        if (result.equals("Email already registered")) {
            return ResponseEntity
                    .badRequest()
                    .body(Map.of("message", result));
        }

        return ResponseEntity.ok(
                Map.of("message", result)
        );
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(
            @RequestBody Map<String, String> loginData) {

        String email = loginData.get("email");
        String password = loginData.get("password");

        String result = authService.login(email, password);

        if (result.equals("Login successful")) {
            return ResponseEntity.ok(
                    Map.of("message", result)
            );
        }

        return ResponseEntity
                .badRequest()
                .body(Map.of("message", result));
    }
}