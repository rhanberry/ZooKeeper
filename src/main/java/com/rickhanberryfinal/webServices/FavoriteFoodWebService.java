package com.rickhanberryfinal.webServices;

import com.rickhanberryfinal.entities.FavoriteFood;
import com.rickhanberryfinal.repository.FavoriteFoodRepository;
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
 * REST controller for managing FavoriteFood.
 */
@RestController
@RequestMapping("/api")
public class FavoriteFoodWebService {

    @Autowired
    private FavoriteFoodRepository favoriteFoodRepository;
    

    @RequestMapping(value = "/favoriteFoods", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
    public FavoriteFood createFavoriteFood(@Valid @RequestBody FavoriteFood favoriteFood){
        return favoriteFoodRepository.saveAndFlush(favoriteFood);
    }


    @RequestMapping(value = "/favoriteFoods", method = RequestMethod.PUT, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<FavoriteFood> updateFavoriteFood(@Valid @RequestBody FavoriteFood favoriteFood)  {
        FavoriteFood result = favoriteFoodRepository.save(favoriteFood);
        return ResponseEntity.ok().body(result);
    }

    @RequestMapping(value = "/favoriteFoods", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public List<FavoriteFood> getAllFavoriteFoods() {
        return favoriteFoodRepository.findAll();
            }


    @RequestMapping(value = "/favoriteFoods/{id}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public FavoriteFood getFavoriteFood(@PathVariable Long id) {
       return favoriteFoodRepository.findOne(id);
    }


    @RequestMapping(value = "/favoriteFoods/{id}", method = RequestMethod.DELETE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Void> deleteFavoriteFood(@PathVariable Long id) {
        favoriteFoodRepository.delete(id);
        return ResponseEntity.ok().build();
    }
}
