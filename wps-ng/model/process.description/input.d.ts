import { LiteralData } from './literal-data';
export declare class Input {
    private readonly _title;
    private readonly _abstractValue;
    private readonly _identifier;
    private readonly _minOccurs;
    private readonly _maxOccurs;
    private readonly _literalData;
    private readonly _complexData;
    private readonly _bboxData;
    constructor(inputResponse: any);
    get title(): string;
    get abstractValue(): string;
    get identifier(): string;
    get minOccurs(): string;
    get maxOccurs(): string;
    get literalData(): LiteralData;
}
