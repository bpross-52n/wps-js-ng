import { Address } from './address';
export declare class ContactInfo {
    private readonly _address;
    constructor(contactInfoJson: any);
    get address(): Address;
}
