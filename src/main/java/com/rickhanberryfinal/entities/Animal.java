package com.rickhanberryfinal.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import javax.validation.constraints.*;
import java.io.Serializable;
import java.util.Objects;

/**
 * Entity file for animals
 */
@Entity
@Table(name = "animal")
public class Animal implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @NotNull
    @Column(name = "common_name", nullable = false)
    private String commonName;
    
    @NotNull
    @Column(name = "scientific_name", nullable = false)
    private String scientificName;
    
    @NotNull
    @Column(name = "information", nullable = false)
    private String information;
    
    @ManyToOne
    @JoinColumn(name = "favorite_food_id")
    private FavoriteFood favoriteFood;

    @OneToOne(mappedBy = "animal")
    @JsonIgnore
    private Enclosure enclosure;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCommonName() {
        return commonName;
    }
    
    public void setCommonName(String commonName) {
        this.commonName = commonName;
    }

    public String getScientificName() {
        return scientificName;
    }
    
    public void setScientificName(String scientificName) {
        this.scientificName = scientificName;
    }

    public String getInformation() {
        return information;
    }
    
    public void setInformation(String information) {
        this.information = information;
    }

    public FavoriteFood getFavoriteFood() {
        return favoriteFood;
    }

    public void setFavoriteFood(FavoriteFood favoriteFood) {
        this.favoriteFood = favoriteFood;
    }

    public Enclosure getEnclosure() {
        return enclosure;
    }

    public void setEnclosure(Enclosure enclosure) {
        this.enclosure = enclosure;
    }


}
