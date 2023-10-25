package com.pets.appPets.services;

import com.pets.appPets.dtos.PetsDTO;

import java.util.List;

public interface PetsService {
    List<PetsDTO> findAll();
    PetsDTO findOne(String name);
    PetsDTO save(PetsDTO petsDTO);
}
