import {Component, OnInit} from "@angular/core";
import {Professor} from "../../models/professor.model";
import {ProfessorService} from "../../services/professor.service";
import {RouteConstants} from "../../bootstrap/app.route.constants";

@Component({
    selector: 'list-professors-page',
    templateUrl: './list-professors.component.html'
})

export class ListProfessorsComponent implements OnInit {

    public profs: Professor[];
    public RouteConstants;

    constructor(private profsService: ProfessorService) {
        this.profs = [];
        this.GetProfs();
    }

    ngOnInit() {
        this.RouteConstants = RouteConstants;
    }

    public GetProfs() {
        this.profsService.GetAll()
            .subscribe((res: any) => {
                    this.profs = res;
                },
                error => console.error(error));
    }

}
