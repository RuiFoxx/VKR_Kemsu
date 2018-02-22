import {Component, OnInit, Input} from "@angular/core";
import {Pair} from "../../models/pair.model";
@Component({
    selector: 'single-pair',
    templateUrl: './single-pair.component.html',
    // styleUrls: ['./single-news.component.css']
})

export class SinglePairComponent implements OnInit {

    @Input() pair:Pair;

    ngOnInit(): void{

    }
}
