export declare class Process {
    private readonly _title;
    private readonly _identifier;
    private readonly _processVersion;
    private readonly _jobControlOptions;
    private readonly _outputTransmission;
    constructor(processJson: any);
    get title(): string;
    get identifier(): string;
    get processVersion(): string;
    get jobControlOptions(): string;
    get outputTransmission(): string;
}
