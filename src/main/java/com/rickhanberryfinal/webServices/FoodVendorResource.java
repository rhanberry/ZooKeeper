package com.rickhanberryfinal.webServices;

import com.rickhanberryfinal.entities.FoodVendor;
import com.rickhanberryfinal.repository.FoodVendorRepository;
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

/**
 * REST controller for managing FoodVendor.
 */
@RestController
@RequestMapping("/api")
public class FoodVendorResource {


    @Autowired
    private FoodVendorRepository foodVendorRepository;
    

    @RequestMapping(value = "/foodVendors", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
    public FoodVendor createFoodVendor(@Valid @RequestBody FoodVendor foodVendor){
        return foodVendorRepository.saveAndFlush(foodVendor);

    }


    @RequestMapping(value = "/foodVendors", method = RequestMethod.PUT, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<FoodVendor> updateFoodVendor(@Valid @RequestBody FoodVendor foodVendor) {
        FoodVendor result = foodVendorRepository.save(foodVendor);
        return ResponseEntity.ok().body(result);
    }


    @RequestMapping(value = "/foodVendors", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public List<FoodVendor> getAllFoodVendors() {
        return foodVendorRepository.findAll();
            }


    @RequestMapping(value = "/foodVendors/{id}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public FoodVendor getFoodVendor(@PathVariable Long id) {
       return foodVendorRepository.findOne(id);
    }


    @RequestMapping(value = "/foodVendors/{id}", method = RequestMethod.DELETE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Void> deleteFoodVendor(@PathVariable Long id) {
        foodVendorRepository.delete(id);
        return ResponseEntity.ok().build();
    }
}
