package com.rickhanberryfinal.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import javax.validation.constraints.*;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;
import java.util.Objects;

import com.rickhanberryfinal.entities.enumeration.Category;

/**
 * Entity file for Favorite Food
 */
@Entity
@Table(name = "favorite_food")
public class FavoriteFood implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @NotNull
    @Column(name = "favorite_food", nullable = false)
    private String favoriteFood;
    
    @Enumerated(EnumType.STRING)
    @Column(name = "category")
    private Category category;
    
    @ManyToOne
    @JoinColumn(name = "food_vendor_id")
    private FoodVendor foodVendor;

    @OneToMany(mappedBy = "favoriteFood")
    @JsonIgnore
    private Set<Animal> animals = new HashSet<>();

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFavoriteFood() {
        return favoriteFood;
    }
    
    public void setFavoriteFood(String favoriteFood) {
        this.favoriteFood = favoriteFood;
    }

    public Category getCategory() {
        return category;
    }
    
    public void setCategory(Category category) {
        this.category = category;
    }

    public FoodVendor getFoodVendor() {
        return foodVendor;
    }

    public void setFoodVendor(FoodVendor foodVendor) {
        this.foodVendor = foodVendor;
    }

    public Set<Animal> getAnimals() {
        return animals;
    }

    public void setAnimals(Set<Animal> animals) {
        this.animals = animals;
    }


}
