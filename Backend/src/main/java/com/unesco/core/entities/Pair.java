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

//    @Column(name = "time_start")
//    private Time time_start;
//
//    @Column(name = "time_end")
//    private Time time_end;

    //овердохера связей
    @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL, mappedBy = "pair")
    private Set<DayOfWeek> daysofweek;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "pair")
    private Set<WeekType> weektypes;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "pair")
    private Set<Discipline> disciplines;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "pair")
    private Set<Room> rooms;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "pair")
    private Set<Professor> professors;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "pair")
    private Set<Group> groups;

    public Pair(int pairNumber, Time time_start, Time time_end,
                Set<DayOfWeek> daysofweek, Set<WeekType> weektypes, Set<Discipline> disciplines,
                Set<Room> rooms, Set<Professor> professors, Set<Group> groups) {
        this.pairNumber = pairNumber;
//        this.time_start = time_start;
//        this.time_end = time_end;
        this.daysofweek = daysofweek;
        this.weektypes = weektypes;
        this.disciplines = disciplines;
        this.rooms = rooms;
        this.professors = professors;
        this.groups = groups;
    }

    public Pair() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getPairNumber() {
        return pairNumber;
    }

    public void setPairNumber(int pairNumber) {
        this.pairNumber = pairNumber;
    }

//    public Time getTime_start() {
//        return time_start;
//    }
//
//    public void setTime_start(Time time_start) {
//        this.time_start = time_start;
//    }
//
//    public Time getTime_end() {
//        return time_end;
//    }
//
//    public void setTime_end(Time time_end) {
//        this.time_end = time_end;
//    }

    public Set<DayOfWeek> getDaysofweek() {
        return daysofweek;
    }

    public void setDaysofweek(Set<DayOfWeek> daysofweek) {
        this.daysofweek = daysofweek;
    }

    public Set<WeekType> getWeektypes() {
        return weektypes;
    }

    public void setWeektypes(Set<WeekType> weektypes) {
        this.weektypes = weektypes;
    }

    public Set<Discipline> getDisciplines() {
        return disciplines;
    }

    public void setDisciplines(Set<Discipline> disciplines) {
        this.disciplines = disciplines;
    }

    public Set<Room> getRooms() {
        return rooms;
    }

    public void setRooms(Set<Room> rooms) {
        this.rooms = rooms;
    }

    public Set<Professor> getProfessors() {
        return professors;
    }

    public void setProfessors(Set<Professor> professors) {
        this.professors = professors;
    }

    public Set<Group> getGroups() {
        return groups;
    }

    public void setGroups(Set<Group> groups) {
        this.groups = groups;
    }
}
