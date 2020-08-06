import { ComplexData } from './complex-data';
export declare class Output {
    private readonly _title;
    private readonly _abstractValue;
    private readonly _identifier;
    private readonly _complexData;
    private readonly _literalData;
    private readonly _bboxData;
    constructor(outputResponse: any);
    get title(): string;
    get abstractValue(): string;
    get identifier(): string;
    get complexData(): ComplexData;
}
