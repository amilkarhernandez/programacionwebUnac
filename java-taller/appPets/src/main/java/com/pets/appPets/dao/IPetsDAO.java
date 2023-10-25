package com.pets.appPets.dao;

import com.pets.appPets.models.Pets;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface IPetsDAO extends JpaRepository<Pets, Long> {

    @Query("SELECT p FROM Pets p WHERE p.name = ?1")
    Pets findOneName(String name);

    @Query(value = "select * from pets where name = ?1", nativeQuery = true)
    Object[] findOneNameNative(String name);
}
