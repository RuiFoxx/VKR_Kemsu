package com.unesco.core.entities;

import javax.persistence.*;

@Entity
@Table(name = "rooms")
public class Room {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @Column(name = "room")
    private String room;

    @ManyToOne
    @JoinColumn(name = "room_id", referencedColumnName = "id")
    private Pair pair;
}
