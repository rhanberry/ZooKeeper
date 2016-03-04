package com.rickhanberryfinal.repository;

import com.rickhanberryfinal.entities.Animal;

import org.springframework.data.jpa.repository.*;


/**
 * Repository for Animals
 */
public interface AnimalRepository extends JpaRepository<Animal,Long> {

}
