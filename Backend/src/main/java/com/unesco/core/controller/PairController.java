package com.unesco.core.controller;

import com.unesco.core.entities.Pair;
import com.unesco.core.repositories.PairRepository;
import com.unesco.core.repositories.ProfessorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

@RestController
@RequestMapping("/api/demo")
public class PairController {
    @Autowired
    public PairRepository pairRepository;

    @RequestMapping("/pairs")
    public List<Pair> getPairs() {
        Iterable<Pair> pairs = pairRepository.findAll();
        return StreamSupport.stream(pairs.spliterator(), false).collect(Collectors.toList());
    }

    @RequestMapping("/pairs/{id}")
    public Pair getPair(@PathVariable("id") int id) {
        return pairRepository.findById(id);
    }
}
