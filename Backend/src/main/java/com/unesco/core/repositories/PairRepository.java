package com.unesco.core.repositories;

import com.unesco.core.entities.Pair;
import org.springframework.data.repository.CrudRepository;

public interface PairRepository extends CrudRepository<Pair, Integer> {
    Pair findById(int id);
}
