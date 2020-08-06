import { ExecuteResponseObject } from '../execute.process/response/execute-response-object';
export declare class ResultResponse {
    private readonly _responseDocument;
    private readonly _executeResponse;
    constructor(resultResponse: any);
    get responseDocument(): Document;
    get executeResponse(): ExecuteResponseObject;
}
