import { DataOutput } from './data-output';
export declare class LiteralDataOutput implements DataOutput {
    readonly type: string;
    readonly identifier: string;
    readonly mimeType: string;
    readonly schema: string;
    readonly encoding: string;
    readonly asReference: boolean;
    readonly abstractValue: any;
    readonly dataType: string;
    readonly uom: string;
    readonly value: any;
    readonly transmission: string;
    constructor(identifier: string, mimeType: string, schema: string, encoding: string, asReference: boolean, abstractValue: any, dataType: string, uom: string, value: string, transmission?: string);
}
