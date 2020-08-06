import { Format } from './format';
export declare class BBoxData {
    private readonly _formats;
    private readonly _supportedCRSs;
    constructor(bboxDataResponse: any);
    get supportedCRSs(): string[];
    get formats(): Format[];
}
