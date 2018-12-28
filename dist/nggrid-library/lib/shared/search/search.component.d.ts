import { OnInit, EventEmitter } from '@angular/core';
import { GridService } from '../grid-service/grid.service';
export declare class SearchComponent implements OnInit {
    private gridService;
    dropDonwDefautlSelected: number;
    searchColumn: string;
    searchText: string;
    searchOptionsX: any;
    searchClicked: EventEmitter<any>;
    searchClick(obj: any, s: string): void;
    constructor(gridService: GridService);
    ngOnInit(): void;
}
