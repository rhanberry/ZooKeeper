package com.rickhanberryfinal.repository;

import com.rickhanberryfinal.entities.FavoriteFood;

import org.springframework.data.jpa.repository.*;

/**
 * Repository for Fave Foods
 */
public interface FavoriteFoodRepository extends JpaRepository<FavoriteFood,Long> {

}
