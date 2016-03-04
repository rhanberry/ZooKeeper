package com.rickhanberryfinal.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import javax.validation.constraints.*;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;
import java.util.Objects;

/**
 * Entity File for Vendor, not an enum, because there are far more vendors than there are
 * food categories
 */
@Entity
@Table(name = "food_vendor")
public class FoodVendor implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @NotNull
    @Column(name = "food_vendor", nullable = false)
    private String foodVendor;
    
    @OneToMany(mappedBy = "favoriteFood")
    @JsonIgnore
    private Set<FavoriteFood> favoriteFoods = new HashSet<>();

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFoodVendor() {
        return foodVendor;
    }
    
    public void setFoodVendor(String foodVendor) {
        this.foodVendor = foodVendor;
    }

    public Set<FavoriteFood> getFavoriteFoods() {
        return favoriteFoods;
    }

    public void setFavoriteFoods(Set<FavoriteFood> favoriteFoods) {
        this.favoriteFoods = favoriteFoods;
    }


}
