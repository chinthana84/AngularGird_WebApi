import { OnInit, EventEmitter } from '@angular/core';
import { SearchObject } from '../gridModels/searchObject.model';
import { GridService } from '../grid-service/grid.service';
export declare class PagerComponent implements OnInit {
    private gridService;
    pagerX: any;
    searchObject: SearchObject;
    pagedClicked: EventEmitter<any>;
    uploadComplete(pageno: number): void;
    constructor(gridService: GridService);
    ngOnInit(): void;
}
