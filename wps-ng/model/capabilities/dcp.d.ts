import { HTTP } from './http';
export declare class DCP {
    private readonly _HTTP;
    constructor(DCPJson: any);
    get HTTP(): HTTP;
}
