import { ServiceIdentification } from './service-identification';
import { ServiceProvider } from './service-provider';
import { Operation } from './operation';
import { Process } from './process';
export declare class Capabilities {
    private readonly _service;
    private readonly _version;
    private readonly _serviceIdentification;
    private readonly _serviceProvider;
    private readonly _operations;
    private readonly _languages;
    private readonly _processes;
    constructor(capabilitiesJson: any);
    get service(): string;
    get version(): string;
    get serviceIdentification(): ServiceIdentification;
    get serviceProvider(): ServiceProvider;
    get operations(): Operation[];
    get languages(): string[];
    get processes(): Process[];
}
