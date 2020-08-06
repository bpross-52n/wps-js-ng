import { ProcessDetails } from './process-details';
export declare class ProcessOffering {
    private readonly _service;
    private readonly _version;
    private readonly _process;
    private readonly _processVersion;
    private readonly _jobControlOptions;
    private readonly _outputTransmissionModes;
    constructor(processOfferingResponse: any);
    get service(): string;
    get version(): string;
    get process(): ProcessDetails;
    get processVersion(): string;
    get jobControlOptions(): string[];
    get outputTransmissionModes(): string[];
}
