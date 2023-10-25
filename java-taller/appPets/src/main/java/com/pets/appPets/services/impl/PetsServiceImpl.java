package com.pets.appPets.services.impl;

import com.pets.appPets.dao.IPetsDAO;
import com.pets.appPets.dtos.PetsDTO;
import com.pets.appPets.models.Pets;
import com.pets.appPets.services.PetsService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;

@Service
public class PetsServiceImpl implements PetsService {

    @Autowired
    private IPetsDAO iPetsDAO;

    @Autowired
    ModelMapper modelMapper;

    @Override
    public List<PetsDTO> findAll() {
        return Collections.singletonList(modelMapper.map(iPetsDAO.findAll(), PetsDTO.class));
    }

    @Override
    public PetsDTO findOne(String name) {
        return modelMapper.map(iPetsDAO.findOneName(name), PetsDTO.class);
    }

    @Override
    public PetsDTO save(PetsDTO petsDTO) {
        return modelMapper.map(iPetsDAO.save(modelMapper.map(petsDTO, Pets.class)), PetsDTO.class);
    }
}
