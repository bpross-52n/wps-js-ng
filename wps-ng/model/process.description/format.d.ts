export declare class Format {
    private readonly _mimeType;
    private readonly _encoding;
    private readonly _schema;
    constructor(formatResponse: any);
    get mimeType(): string;
    get encoding(): string;
    get schema(): string;
}
