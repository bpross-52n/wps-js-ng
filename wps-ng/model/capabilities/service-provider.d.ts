import { ServiceContact } from './service-contact';
export declare class ServiceProvider {
    private readonly _providerName;
    private readonly _serviceContact;
    constructor(serviceProviderJson: any);
    get providerName(): string;
    get serviceContact(): ServiceContact;
}
