package com.unesco.core.entities;

import javax.persistence.*;

@Entity
@Table(name = "groups")
public class Group {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @Column(name = "group")
    private String group;

    @ManyToOne
    @JoinColumn(name = "group_id", referencedColumnName = "id")
    private Pair pair;
}
