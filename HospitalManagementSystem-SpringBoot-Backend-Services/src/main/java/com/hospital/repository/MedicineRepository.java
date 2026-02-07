package com.hospital.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hospital.entity.Medicine;

@Repository
public interface MedicineRepository extends JpaRepository<Medicine, Integer>{

}
