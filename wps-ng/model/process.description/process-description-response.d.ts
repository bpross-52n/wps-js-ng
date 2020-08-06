import { ProcessOffering } from './process-offering';
export declare class ProcessDescriptionResponse {
    private readonly _responseDocument;
    private readonly _processOffering;
    constructor(processDescriptionResponse: any);
    get responseDocument(): Document;
    get processOffering(): ProcessOffering;
}
