package com.rickhanberryfinal.entities;


import javax.persistence.*;
import javax.validation.constraints.*;
import java.io.Serializable;
import java.util.Objects;

import com.rickhanberryfinal.entities.enumeration.Condition;

/**
 * Entity file for Enclosures
 * used ENUM for condition, because how many conditions can there be?
 */
@Entity
@Table(name = "enclosure")
public class Enclosure implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @NotNull
    @Column(name = "enclosure", nullable = false)
    private String enclosure;
    
    @NotNull
    @Column(name = "number_of_animals", nullable = false)
    private Integer numberOfAnimals;
    
    @NotNull
    @Pattern(regexp = "^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$")
    @Column(name = "feeding_time", nullable = false)
    private String feedingTime;
    
    @NotNull
    @Enumerated(EnumType.STRING)
    @Column(name = "condition", nullable = false)
    private Condition condition;
    
    @OneToOne
    private Animal animal;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getEnclosure() {
        return enclosure;
    }
    
    public void setEnclosure(String enclosure) {
        this.enclosure = enclosure;
    }

    public Integer getNumberOfAnimals() {
        return numberOfAnimals;
    }
    
    public void setNumberOfAnimals(Integer numberOfAnimals) {
        this.numberOfAnimals = numberOfAnimals;
    }

    public String getFeedingTime() {
        return feedingTime;
    }
    
    public void setFeedingTime(String feedingTime) {
        this.feedingTime = feedingTime;
    }

    public Condition getCondition() {
        return condition;
    }
    
    public void setCondition(Condition condition) {
        this.condition = condition;
    }

    public Animal getAnimal() {
        return animal;
    }

    public void setAnimal(Animal animal) {
        this.animal = animal;
    }


}
