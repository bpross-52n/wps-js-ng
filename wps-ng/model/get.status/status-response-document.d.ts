export declare class StatusResponseDocument {
    private readonly _jobId;
    private readonly _status;
    private readonly _expirationDate;
    private readonly _estimatedCompletion;
    private readonly _nextPoll;
    private readonly _percentageCompleted;
    constructor(statusResponseDocument: any);
    get jobId(): string;
    get status(): string;
    get expirationDate(): Date;
    get estimatedCompletion(): Date;
    get nextPoll(): Date;
    get percentageCompleted(): number;
}
