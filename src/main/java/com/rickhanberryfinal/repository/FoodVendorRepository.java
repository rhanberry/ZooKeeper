package com.rickhanberryfinal.repository;

import com.rickhanberryfinal.entities.FoodVendor;

import org.springframework.data.jpa.repository.*;

/**
 * Vendor repository
 */
public interface FoodVendorRepository extends JpaRepository<FoodVendor,Long> {

}
