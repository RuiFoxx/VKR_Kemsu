package com.unesco.core.ViewModel;

public class PairViewModel {
    private int pairnumber;
    private String weektype;
    private String dayofweek;
    private String professor;
    private String room;
    private String discipline;
    private String group;

    public PairViewModel(int pairnumber, String weektype,
                         String dayofweek, String professor, String room, String discipline, String group) {
        this.pairnumber = pairnumber;
        this.weektype = weektype;
        this.dayofweek = dayofweek;
        this.professor = professor;
        this.room = room;
        this.discipline = discipline;
        this.group = group;
    }
}
