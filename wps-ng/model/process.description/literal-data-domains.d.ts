import { DataType } from './data-type';
export declare class LiteralDataDomains {
    private readonly _anyValue;
    private readonly _dataType;
    private readonly _defaultValue;
    private readonly _unitOfMeasure;
    constructor(literalDataDomainsJS: any);
    get anyValue(): boolean;
    get dataType(): DataType;
    get defaultValue(): string;
    get unitOfMeasure(): string;
}
