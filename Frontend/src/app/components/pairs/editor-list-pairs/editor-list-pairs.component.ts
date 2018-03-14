import {Component} from "@angular/core";
import {Pair} from "../../../models/pair.model";
import {ActivatedRoute, Router} from "@angular/router";
import {ProfessorService} from "../../../services/professor.service";
import {RouteConstants} from "../../../bootstrap/app.route.constants";



@Component({
    selector: 'editor-list-pairs',
    templateUrl: './editor-list-pairs.component.html',
    // styleUrls: [ './editor-single-news.component.css' ]
})

export class EditorListPairsComponent {
    private idProf: number;
    public chetPairs: Pair[];
    public nechetPairs: Pair[];


    constructor(private router: Router,private profService: ProfessorService,
                private activateRoute: ActivatedRoute) {

        this.chetPairs=[];
        this.nechetPairs=[];
        this.idProf = activateRoute.snapshot.params['id'];
        this.GetPairs(this.idProf);
    }

    public GetPairs(idProf:number){
        this.profService.GetChetPairs(idProf)
            .subscribe((res: any) => {
                    this.chetPairs= res;
                },
                error => console.error(error))


        this.profService.GetNechetPairs(idProf)
            .subscribe((res: any) => {
                    this.nechetPairs= res;
                },
                error => console.error(error))
    }


    public gotoEdit(idPair: number) {
        this.router.navigateByUrl(RouteConstants.Pair.Edit.replace(":id", idPair.toString()));
    }

}