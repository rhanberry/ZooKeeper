package com.rickhanberryfinal.webServices;

import com.rickhanberryfinal.entities.Animal;
import com.rickhanberryfinal.repository.AnimalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

/**
 * REST controller for managing Animal.
 */
@RestController
@RequestMapping("/api")
public class AnimalResource {


    @Autowired
    private AnimalRepository animalRepository;
    

    @RequestMapping(value = "/animals", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
    public Animal createAnimal(@Valid @RequestBody Animal animal)  {
        return animalRepository.saveAndFlush(animal);
    }


    @RequestMapping(value = "/animals", method = RequestMethod.PUT, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Animal> updateAnimal(@Valid @RequestBody Animal animal) {
        Animal result = animalRepository.save(animal);
        return ResponseEntity.ok().body(result);
    }


    @RequestMapping(value = "/animals", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Animal> getAllAnimals() {return animalRepository.findAll();}


    @RequestMapping(value = "/animals/{id}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public Animal getAnimal(@PathVariable Long id) {
        return animalRepository.findOne(id);
    }


    @RequestMapping(value = "/animals/{id}", method = RequestMethod.DELETE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Void> deleteAnimal(@PathVariable Long id) {
        animalRepository.delete(id);
        return ResponseEntity.ok().build();
    }
}
