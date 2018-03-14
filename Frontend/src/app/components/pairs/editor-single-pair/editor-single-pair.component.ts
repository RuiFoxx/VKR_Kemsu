import {Component} from "@angular/core";
import {Pair} from "../../../models/pair.model";
import {MessageService} from "primeng/components/common/messageservice";
import {PairService} from "../../../services/pair.service";
import {ActivatedRoute} from "@angular/router";
import {isUndefined} from "util";



@Component({
    selector: 'editor-single-pair',
    templateUrl: './editor-single-pair.component.html',
   // styleUrls: [ './editor-single-news.component.css' ]
})

export class EditorSinglePairComponent {
    private id: number;
    public newPair: Pair;


    constructor(private pairService: PairService,
                private activateRoute: ActivatedRoute,
                private messageService: MessageService) {

        this.newPair = new Pair();
        this.id = activateRoute.snapshot.params['id'];
        if (!isUndefined(this.id)) {
            this.GetPair(this.id);
        }

    }


    public GetPair(id: number) {
        this.pairService.Get(id)
            .subscribe((res: any) => {
                    this.newPair = res;
                    console.log("Пара получена");
                },
                (error: any) => {
                    console.error('Error: ' + error);
                });
    }


    public SavePair() {
        this.pairService.Save(this.newPair).subscribe(
            res => {
                this.messageService.add({severity: 'success', summary: 'Успешно.', detail: 'Пара успешно создана.'});
            },
            error => console.error(error),
        );
    }


}