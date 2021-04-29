package com.example.demo.jwt;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserDetailsJpaRepository extends JpaRepository<User, Long> {
	User findByUsername(String username);
}
