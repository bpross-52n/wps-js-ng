import { ContactInfo } from './contact-info';
export declare class ServiceContact {
    private readonly _individualName;
    private readonly _contactInfo;
    get individualName(): string;
    get contactInfo(): ContactInfo;
    constructor(serviceContactJson: any);
}
