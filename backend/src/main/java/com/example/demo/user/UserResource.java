package com.example.demo.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.jwt.UserDetailsJpaRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class UserResource {
	
	BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
	
	@Autowired
	private UserDetailsJpaRepository userRepository;
	
	@PostMapping(path = "/jpa/users")
	public ResponseEntity<User> createUser(@RequestBody User user) {
		 user.setPassword(encoder.encode(user.getPassword()));
		 user.setEnabled(true);
		 user.setRole("user");
		User createdUser = userRepository.save(user);
		return new ResponseEntity<User>(createdUser, HttpStatus.OK);
	}
}
