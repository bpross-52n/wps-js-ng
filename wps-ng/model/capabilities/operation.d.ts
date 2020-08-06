import { DCP } from './dcp';
export declare class Operation {
    private readonly _DCP;
    constructor(operationJson: any);
    get DCP(): DCP;
}
