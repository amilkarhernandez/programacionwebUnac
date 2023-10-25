package com.pets.appPets.models;

import jakarta.persistence.*;
import lombok.*;

import java.io.Serializable;
import java.util.Date;

@Entity
@Table(name = "pets")
@Data
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class Pets implements Serializable {

    @Id
    @Column(name = "id", nullable = true)
    private Long id;

    @Column(name = "name")
    private String name;
    private String typePet;
    private String raza;

    @Temporal(TemporalType.DATE)
    private Date birthday;

    private String color;
    private Integer peso;
    private Integer talla;
    private String gender;

}
