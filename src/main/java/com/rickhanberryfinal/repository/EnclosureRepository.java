package com.rickhanberryfinal.repository;

import com.rickhanberryfinal.entities.Enclosure;

import org.springframework.data.jpa.repository.*;

/**
 * Repository for Cages
 */
public interface EnclosureRepository extends JpaRepository<Enclosure,Long> {

}
