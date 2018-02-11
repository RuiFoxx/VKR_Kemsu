package com.unesco.core.ViewModel;

public class ProfessorViewModel {
    public String fio;

    public String getFio() {
        return fio;
    }

    public void setFio(String fio) {
        this.fio = fio;
    }

    public ProfessorViewModel(String fio) {
        this.fio = fio;
    }
}
