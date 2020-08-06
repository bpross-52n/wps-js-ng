import { Capabilities } from './capabilities';
export declare class CapabilitiesResponse {
    private readonly _responseDocument;
    private readonly _capabilities;
    constructor(capabilitiesResponseJson: any);
    get responseDocument(): Document;
    get capabilities(): Capabilities;
}
