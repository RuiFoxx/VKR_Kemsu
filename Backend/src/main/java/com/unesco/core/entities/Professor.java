package com.unesco.core.entities;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "professors")
public class Professor {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @Column(name = "FIO")
    private String fio;

    @ManyToOne
    @JoinColumn(name = "professor_id", referencedColumnName = "id")
    private Pair pair;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getFio() {
        return fio;
    }

    public void setFio(String fio) {
        this.fio = fio;
    }
}
