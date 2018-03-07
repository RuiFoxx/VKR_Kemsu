import {Component, OnInit, Input} from "@angular/core";
import {Pair} from "../../../models/pair.model";
import {Professor} from "../../../models/professor.model";

@Component({
    selector: 'single-pair-department',
    templateUrl: './single-pair-department.component.html',
    // styleUrls: ['./single-news.component.css']
})

export class SinglePairDepartmentComponent implements OnInit {

    @Input() pairs: Pair[];
    @Input() prof: Professor;
    //@Input() item: <Professor, Pair[]>;

    ngOnInit(): void{

    }




}
