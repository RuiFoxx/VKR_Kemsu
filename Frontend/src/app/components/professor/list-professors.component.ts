import {Component} from "@angular/core";
import {Professor} from "../../models/professor.model";
import {ProfessorService} from "../../services/professor.service";



@Component({
    selector: 'list-professors-page',
    templateUrl: './list-professors.component.html'
})

export class ListProfessorsComponent{

    public profs:Professor[];

    constructor(private profsService: ProfessorService){
        this.profs =[];
        this.GetProfs();
    }

    public GetProfs() {
        this.profsService.GetAll()
            .subscribe((res: any) => {
                    this.profs = res;
                },
                error => console.error(error));
    }

}
