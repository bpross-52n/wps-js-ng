import { Format } from './format';
import { LiteralDataDomains } from './literal-data-domains';
export declare class LiteralData {
    private readonly _literalDataDomains;
    private readonly _formats;
    constructor(literalDataResponse: any);
    get literalDataDomains(): LiteralDataDomains[];
    get formats(): Format[];
}
