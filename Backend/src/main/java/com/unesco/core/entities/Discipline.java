package com.unesco.core.entities;

import javax.persistence.*;

@Entity
@Table(name = "disciplines")
public class Discipline {
    @Id
    @GeneratedValue
    private long id;

    @Column(name = "name")
    private String discipline;

    @ManyToOne
    @JoinColumn(name = "discipline_id", referencedColumnName = "id")
    private Pair pair;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getDiscipline() {
        return discipline;
    }

    public void setDiscipline(String discipline) {
        this.discipline = discipline;
    }
}
