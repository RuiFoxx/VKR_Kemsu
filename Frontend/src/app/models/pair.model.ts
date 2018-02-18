
export class Pair {
    public id:number;
    public pairnumber:number;
    //time
    public weektype:string;
    public dayofweek:string;
    public professor:string;
    public room:string;
    public discipline:string;


    constructor() {
        this.pairnumber = 1;
        this.weektype = "Чт";
        this.dayofweek = "Пн";
        this.professor = "Карабцев";
        this.room = "2220";
        this.discipline = "Сети";
    }
}
