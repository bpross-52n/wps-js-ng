import { ExecuteResponseDocument } from './execute-response-document';
export declare class ExecuteResponseObject {
    private readonly _type;
    private readonly _serviceVersion;
    private readonly _responseDocument;
    constructor(executeResponseJson: any);
    get type(): string;
    get serviceVersion(): string;
    get responseDocument(): ExecuteResponseDocument;
}
