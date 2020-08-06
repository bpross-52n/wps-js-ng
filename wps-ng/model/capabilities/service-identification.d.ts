export declare class ServiceIdentification {
    private readonly _title;
    private readonly _abstractValue;
    private readonly _keywords;
    private readonly _serviceType;
    private readonly _serviceTypeVersions;
    private readonly _fees;
    private readonly _accessConstraints;
    constructor(serviceIdentificationJson: any);
    get title(): string;
    get abstractValue(): string;
    get keywords(): string[];
    get serviceType(): string;
    get serviceTypeVersions(): string[];
    get fees(): string;
    get accessConstraints(): string;
}
