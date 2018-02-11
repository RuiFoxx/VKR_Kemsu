package com.unesco.core.controller;

import com.unesco.core.entities.Professor;
import com.unesco.core.entities.User;
import com.unesco.core.repositories.ProfessorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/demo")
public class TempRestController {
    @Autowired
    ProfessorRepository professorRepository;
    //Тестовый метод для отправки данных View
    @RequestMapping(value = "/temp")
    public User temp() {
        return new User("Test", "Test@Test.Test", "****");
    }

    @RequestMapping(value = "/test")
    public String test() {
        return "{\"users\":[{\"firstname\":\"Richard\", \"lastname\":\"Feynman\"}," +
                "{\"firstname\":\"Marie\",\"lastname\":\"Curie\"}]}";
    }


    //Тестовый метод для получения данных из View
    @RequestMapping(value = "/set")
    public User set(@RequestBody User user) {
        return new User(user.getUsername(), user.getEmail(), user.getPassword());
        //Нужно сделать шаблон, как у меня на работе.
        //Класс, с успешным или неуспешным исполнением, сообщением, и данными, если нужно
        //Но это потом
    }

    @RequestMapping("/professors")
    public Iterable<Professor> getProfessors() {
        return professorRepository.findAll();
    }
}