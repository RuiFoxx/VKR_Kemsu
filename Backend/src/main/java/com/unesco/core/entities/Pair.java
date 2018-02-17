package com.unesco.core.entities;

import javax.persistence.*;
import java.sql.Time;
import java.util.Set;

@Entity
@Table(name = "pairs")
public class Pair {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @Column(name = "pairnumber")
    private int pairNumber;

    @Column(name = "time_start")
    private Time time_start;

    @Column(name = "time_end")
    private Time time_end;

    //овердохера связей
    @OneToMany(mappedBy = "pairs")
    private Set<DayOfWeek> daysofweek;
}
