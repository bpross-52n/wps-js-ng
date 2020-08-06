import { ExecuteResponseObject } from './execute-response-object';
export declare class ExecuteResponse {
    private readonly _resultDocument;
    private readonly _executeResponse;
    constructor(executeResponseJson: any);
    get resultDocument(): Document;
    get executeResponse(): ExecuteResponseObject;
}
