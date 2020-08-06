export declare class Status {
    private readonly _creationTime;
    private readonly _info;
    constructor(statusJson: any);
    get creationTime(): Date;
    get info(): string;
}
