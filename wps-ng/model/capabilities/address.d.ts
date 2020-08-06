export declare class Address {
    private readonly _deliveryPoint;
    private readonly _city;
    private readonly _administrativeArea;
    private readonly _postalCode;
    private readonly _country;
    private readonly _electronicMailAddress;
    constructor(addressJson: any);
    get deliveryPoint(): string;
    get city(): string;
    get administrativeArea(): string;
    get postalCode(): string;
    get country(): string;
    get electronicMailAddress(): string;
}
