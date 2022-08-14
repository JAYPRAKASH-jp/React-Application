package com.healthclub.healthclub.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.healthclub.healthclub.models.ContactInfo;

@Repository
public interface ContactIndoRepo extends JpaRepository<ContactInfo, Integer>{
	@Query(value = "select id from contactinfo where phone=?1",nativeQuery = true)
	public List<Integer> getIdByPhone(String phone);
}
