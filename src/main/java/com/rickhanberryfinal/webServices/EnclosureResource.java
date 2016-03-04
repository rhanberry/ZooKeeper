package com.rickhanberryfinal.webServices;

import com.rickhanberryfinal.entities.Enclosure;
import com.rickhanberryfinal.repository.EnclosureRepository;
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
 * REST controller for managing Enclosure.
 */
@RestController
@RequestMapping("/api")
public class EnclosureResource {


    @Autowired
    private EnclosureRepository enclosureRepository;
    

    @RequestMapping(value = "/enclosures", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
    public Enclosure createEnclosure(@Valid @RequestBody Enclosure enclosure)  {
        return enclosureRepository.saveAndFlush(enclosure);
    }


    @RequestMapping(value = "/enclosures", method = RequestMethod.PUT, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Enclosure> updateEnclosure(@Valid @RequestBody Enclosure enclosure)  {
        Enclosure result = enclosureRepository.save(enclosure);
        return ResponseEntity.ok().body(result);
    }


    @RequestMapping(value = "/enclosures", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Enclosure> getAllEnclosures() {
        return enclosureRepository.findAll();
            }


    @RequestMapping(value = "/enclosures/{id}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public Enclosure getEnclosure(@PathVariable Long id) {
        return enclosureRepository.findOne(id);

    }

    /**
     * delete an enclosure
     */
    @RequestMapping(value = "/enclosures/{id}", method = RequestMethod.DELETE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Void> deleteEnclosure(@PathVariable Long id) {
        enclosureRepository.delete(id);
        return ResponseEntity.ok().build();
    }
}
