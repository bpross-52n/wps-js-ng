import { ExecuteResponseData } from './execute-response-data';
export declare class ExecuteOutput {
    private readonly _identifier;
    private readonly _title;
    private readonly _abstractValue;
    private readonly _data;
    constructor(executeOutput: any);
    get identifier(): string;
    get title(): string;
    get data(): ExecuteResponseData;
    get abstractValue(): any;
}
