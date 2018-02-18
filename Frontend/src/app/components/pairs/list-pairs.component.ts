import {Component} from "@angular/core";
import {Pair} from "../../models/pair.model";
import {ProfessorService} from "../../services/professor.service";
import {ActivatedRoute} from "@angular/router";
@Component({
    selector: 'list-pairs',
    templateUrl: './list-pairs.component.html',
    // styleUrls: ['./single-news.component.css']
})

export class ListPairsComponent {

    public pairs:Pair[];
    private idProf: number;

    constructor(private activateRoute: ActivatedRoute, private profService: ProfessorService){
        this.pairs=[];
        this.idProf = activateRoute.snapshot.params['id'];
        this.GetPairs(this.idProf);

    }

    public GetPairs(idProf:number){
        this.profService.GetPairs(idProf)
            .subscribe((res: any) => {
                this.pairs= res;
            },
            error => console.error(error))
    }
}
