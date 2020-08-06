import { DataOutput } from './data-output';
export declare class BBoxDataOutput implements DataOutput {
    readonly type: string;
    readonly identifier: string;
    readonly mimeType: string;
    readonly schema: string;
    readonly encoding: string;
    readonly crs: string;
    readonly dimensions: string;
    readonly lowerCorner: string;
    readonly upperCorner: string;
    readonly transmission: string;
    constructor(identifier: string, mimeType: string, schema: string, encoding: string, crs: string, dimensions: string, lowerCorner: string, upperCorner: string, transmission?: string);
}
