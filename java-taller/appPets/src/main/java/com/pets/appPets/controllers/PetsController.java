package com.pets.appPets.controllers;

import com.pets.appPets.dtos.PetsDTO;
import com.pets.appPets.services.PetsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value="api")
public class PetsController {

    @Autowired
    private PetsService petsService;

    @GetMapping(value="pets")
    public List<PetsDTO> getPets() {
        return petsService.findAll();
    }

}
