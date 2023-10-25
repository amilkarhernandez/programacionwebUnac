package com.pets.appPets.dtos;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class PetsDTO {

    private Long id;
    private String name;
    private String typePet;
    private String raza;
    private Date birthday;
    private String color;
    private Integer peso;
    private Integer talla;
    private String gender;
}
