import { StatusResponseDocument } from './status-response-document';
export declare class StatusResponse {
    private readonly _type;
    private readonly _serviceVersion;
    private readonly _responseDocument;
    constructor(getStatusResponse: any);
    get type(): string;
    get serviceVersion(): string;
    get responseDocument(): StatusResponseDocument;
}
