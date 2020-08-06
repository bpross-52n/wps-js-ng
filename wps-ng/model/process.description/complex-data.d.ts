import { Format } from './format';
export declare class ComplexData {
    private readonly _formats;
    constructor(complexDataResponse: any);
    get formats(): Format[];
}
