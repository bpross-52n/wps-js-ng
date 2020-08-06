import { Input } from './input';
import { Output } from './output';
export declare class ProcessDetails {
    private readonly _title;
    private readonly _abstractValue;
    private readonly _identifier;
    private readonly _inputs;
    private readonly _outputs;
    constructor(processResponse: any);
    get title(): string;
    get abstractValue(): string;
    get identifier(): string;
    get inputs(): Input[];
    get outputs(): Output[];
}
