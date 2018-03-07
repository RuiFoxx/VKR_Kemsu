
import {Component, OnInit} from "@angular/core";
import {Pair} from "../../../models/pair.model";
import {ProfessorService} from "../../../services/professor.service";
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";
import {Professor} from "../../../models/professor.model";
import {DepartmentService} from "../../../services/department.service";

@Component({
    selector: 'list-pairs-department',
    templateUrl: './list-pairs-department.component.html',
    //styleUrls: ['./list-pairs-professor.component.css']
})

export class ListPairsDepartmentComponent{

    public chetPairs: Map<Professor, Pair[]>;
    public FirstChetPairs: Pair[];
    public SecondChetPairs: Pair[];
    public ThirdChetPairs: Pair[];
    public FourthChetPairs: Pair[];
    public FifthChetPairs: Pair[];

    public nechetPairs:  Map<Professor, Pair[]>;
    public FirstNechetPairs: Pair[];
    public SecondNechetPairs: Pair[];
    public ThirdNechetPairs: Pair[];
    public FourthNechetPairs: Pair[];
    public FifthNechetPairs: Pair[];

    constructor(private departmentService: DepartmentService){
        this.chetPairs=new Map();
        this.FirstChetPairs=[];
        this.SecondChetPairs=[];
        this.ThirdChetPairs=[];
        this.FourthChetPairs=[];
        this.FifthChetPairs=[];

        this.nechetPairs=new Map();
        this.FirstNechetPairs=[];
        this.SecondNechetPairs=[];
        this.ThirdNechetPairs=[];
        this.FourthNechetPairs=[];
        this.FifthNechetPairs=[];

        this.GetPairs();
    }

    public GetPairs(){
        this.departmentService.GetChetPairs()
            .subscribe((res: any) => {
                    this.chetPairs= res;
                    //this.sortChetPairs(this.chetPairs);
                },
                error => console.error(error))


        this.departmentService.GetNechetPairs()
            .subscribe((res: any) => {
                    this.nechetPairs= res;
                    //this.sortNechetPairs(this.nechetPairs);
                },
                error => console.error(error))
    }

}



