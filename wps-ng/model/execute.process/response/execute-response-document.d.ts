import { Process } from '../../capabilities/process';
import { ExecuteOutput } from './execute-output';
import { Status } from './status';
export declare class ExecuteResponseDocument {
    private readonly _jobId;
    private readonly _expirationDate;
    private readonly _service;
    private readonly _version;
    private readonly _lang;
    private readonly _statusLocation;
    private readonly _serviceInstance;
    private readonly _process;
    private readonly _status;
    private readonly _outputs;
    constructor(executeResponseDocumentJson: any);
    get expirationDate(): string;
    get lang(): string;
    get service(): string;
    get version(): string;
    get statusLocation(): string;
    get serviceInstance(): string;
    get process(): Process;
    get status(): Status;
    get outputs(): ExecuteOutput[];
    get jobId(): string;
}
