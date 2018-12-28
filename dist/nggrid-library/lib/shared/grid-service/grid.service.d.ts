import { SearchObject } from '../gridModels/searchObject.model';
export declare class GridService {
    x: SearchObject;
    private data;
    currentData: import("rxjs/internal/Observable").Observable<SearchObject>;
    constructor();
    updateMessage(item: any): void;
}
