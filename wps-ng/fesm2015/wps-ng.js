import { ɵɵdefineComponent, ɵsetClassMetadata, Component, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';

class Settings {
    constructor(url, version) {
        this._version = version;
        this._url = url;
    }
    get url() {
        return this._url;
    }
    get version() {
        return this._version;
    }
}

class ServiceIdentification {
    constructor(serviceIdentificationJson) {
        var _a, _b;
        if (serviceIdentificationJson != null) {
            this._title = serviceIdentificationJson.title;
            this._abstractValue = serviceIdentificationJson.abstractValue;
            this._keywords = new Array();
            (_a = serviceIdentificationJson.keywords) === null || _a === void 0 ? void 0 : _a.forEach((e) => {
                this._keywords.push(e);
            });
            this._serviceType = serviceIdentificationJson.serviceType;
            this._serviceTypeVersions = new Array();
            (_b = serviceIdentificationJson.serviceTypeVersions) === null || _b === void 0 ? void 0 : _b.forEach((e) => {
                this._serviceTypeVersions.push(e);
            });
            this._fees = serviceIdentificationJson.fees;
            this._accessConstraints = serviceIdentificationJson.accessConstraints;
        }
    }
    get title() {
        return this._title;
    }
    get abstractValue() {
        return this._abstractValue;
    }
    get keywords() {
        return this._keywords;
    }
    get serviceType() {
        return this._serviceType;
    }
    get serviceTypeVersions() {
        return this._serviceTypeVersions;
    }
    get fees() {
        return this._fees;
    }
    get accessConstraints() {
        return this._accessConstraints;
    }
}

class Address {
    constructor(addressJson) {
        this._deliveryPoint = addressJson.deliveryPoint;
        this._city = addressJson.city;
        this._administrativeArea = addressJson.administrativeArea;
        this._postalCode = addressJson.postalCode;
        this._country = addressJson.country;
        this._electronicMailAddress = addressJson.electronicMailAddress;
    }
    get deliveryPoint() {
        return this._deliveryPoint;
    }
    get city() {
        return this._city;
    }
    get administrativeArea() {
        return this._administrativeArea;
    }
    get postalCode() {
        return this._postalCode;
    }
    get country() {
        return this._country;
    }
    get electronicMailAddress() {
        return this._electronicMailAddress;
    }
}

class ContactInfo {
    constructor(contactInfoJson) {
        if (contactInfoJson != null) {
            this._address = new Address(contactInfoJson.address);
        }
    }
    get address() {
        return this._address;
    }
}

class ServiceContact {
    constructor(serviceContactJson) {
        if (serviceContactJson != null) {
            this._individualName = serviceContactJson.individualName;
            this._contactInfo = new ContactInfo(serviceContactJson.contactInfo);
        }
    }
    get individualName() {
        return this._individualName;
    }
    get contactInfo() {
        return this._contactInfo;
    }
}

class ServiceProvider {
    constructor(serviceProviderJson) {
        if (serviceProviderJson != null) {
            this._providerName = serviceProviderJson.providerName;
            this._serviceContact = new ServiceContact(serviceProviderJson.serviceContact);
        }
    }
    get providerName() {
        return this._providerName;
    }
    get serviceContact() {
        return this._serviceContact;
    }
}

class HTTP {
    constructor(HTTPJson) {
        if (HTTPJson != null) {
            this._name = HTTPJson.name;
            this._get = HTTPJson.get;
            this._post = HTTPJson.post;
        }
    }
    get name() {
        return this._name;
    }
    get get() {
        return this._get;
    }
    get post() {
        return this._post;
    }
}

class DCP {
    constructor(DCPJson) {
        if (DCPJson != null) {
            this._HTTP = new HTTP(DCPJson.HTTP);
        }
    }
    get HTTP() {
        return this._HTTP;
    }
}

class Operation {
    constructor(operationJson) {
        if (operationJson != null) {
            this._DCP = new DCP(operationJson.DCP);
        }
    }
    get DCP() {
        return this._DCP;
    }
}

class Process {
    constructor(processJson) {
        if (processJson != null) {
            this._title = processJson.title;
            this._identifier = processJson.identifier;
            this._processVersion = processJson.processVersion;
            this._jobControlOptions = processJson.jobControlOptions;
            this._outputTransmission = processJson.outputTransmission;
        }
    }
    get title() {
        return this._title;
    }
    get identifier() {
        return this._identifier;
    }
    get processVersion() {
        return this._processVersion;
    }
    get jobControlOptions() {
        return this._jobControlOptions;
    }
    get outputTransmission() {
        return this._outputTransmission;
    }
}

class Capabilities {
    constructor(capabilitiesJson) {
        var _a, _b, _c;
        if (capabilitiesJson != null) {
            this._service = capabilitiesJson.service;
            this._version = capabilitiesJson.version;
            this._serviceIdentification = new ServiceIdentification(capabilitiesJson.serviceIdentification);
            this._serviceProvider = new ServiceProvider(capabilitiesJson.serviceProvider);
            this._operations = new Array();
            (_a = capabilitiesJson.operations) === null || _a === void 0 ? void 0 : _a.forEach(e => {
                this._operations.push(new Operation(e));
            });
            this._languages = new Array();
            (_b = capabilitiesJson.languages) === null || _b === void 0 ? void 0 : _b.forEach(e => {
                this._languages.push(e);
            });
            this._processes = new Array();
            (_c = capabilitiesJson.processes) === null || _c === void 0 ? void 0 : _c.forEach(e => {
                this._processes.push(new Process(e));
            });
            this._processes = capabilitiesJson.processes;
        }
    }
    get service() {
        return this._service;
    }
    get version() {
        return this._version;
    }
    get serviceIdentification() {
        return this._serviceIdentification;
    }
    get serviceProvider() {
        return this._serviceProvider;
    }
    get operations() {
        return this._operations;
    }
    get languages() {
        return this._languages;
    }
    get processes() {
        return this._processes;
    }
}

class CapabilitiesResponse {
    constructor(capabilitiesResponseJson) {
        this._responseDocument = capabilitiesResponseJson.responseDocument;
        this._capabilities = new Capabilities(capabilitiesResponseJson.capabilities);
    }
    get responseDocument() {
        return this._responseDocument;
    }
    get capabilities() {
        return this._capabilities;
    }
}

class Format {
    constructor(formatResponse) {
        if (formatResponse != null) {
            this._mimeType = formatResponse.mimeType;
            this._encoding = formatResponse.encoding;
            this._schema = formatResponse.schema;
        }
    }
    get mimeType() {
        return this._mimeType;
    }
    get encoding() {
        return this._encoding;
    }
    get schema() {
        return this._schema;
    }
}

class DataType {
    constructor(dataType) {
        if (dataType != null) {
            this._type = dataType.type;
            this._reference = dataType.reference;
        }
    }
    get type() {
        return this._type;
    }
    get reference() {
        return this._reference;
    }
}

class LiteralDataDomains {
    constructor(literalDataDomainsJS) {
        this._anyValue = literalDataDomainsJS.anyValue;
        this._dataType = new DataType(literalDataDomainsJS.dataType);
        this._defaultValue = literalDataDomainsJS.defaultValue;
        this._unitOfMeasure = literalDataDomainsJS.unitOfMeasure;
    }
    get anyValue() {
        return this._anyValue;
    }
    get dataType() {
        return this._dataType;
    }
    get defaultValue() {
        return this._defaultValue;
    }
    get unitOfMeasure() {
        return this._unitOfMeasure;
    }
}

class LiteralData {
    constructor(literalDataResponse) {
        var _a, _b;
        if (literalDataResponse != null) {
            this._formats = new Array();
            (_a = literalDataResponse.formats) === null || _a === void 0 ? void 0 : _a.forEach(e => {
                this._formats.push(new Format(e));
            });
            this._literalDataDomains = new Array();
            (_b = literalDataResponse.literalDataDomains) === null || _b === void 0 ? void 0 : _b.forEach(e => {
                this._literalDataDomains.push(new LiteralDataDomains(e));
            });
        }
    }
    get literalDataDomains() {
        return this._literalDataDomains;
    }
    get formats() {
        return this._formats;
    }
}

class ComplexData {
    constructor(complexDataResponse) {
        var _a;
        if (complexDataResponse != null) {
            this._formats = new Array();
            (_a = complexDataResponse.formats) === null || _a === void 0 ? void 0 : _a.forEach(e => {
                this._formats.push(new Format(e));
            });
        }
    }
    get formats() {
        return this._formats;
    }
}

class BBoxData {
    constructor(bboxDataResponse) {
        var _a, _b;
        if (bboxDataResponse != null) {
            this._formats = new Array();
            (_a = bboxDataResponse.formats) === null || _a === void 0 ? void 0 : _a.forEach(e => {
                this._formats.push(new Format(e));
            });
            this._supportedCRSs = new Array();
            (_b = bboxDataResponse.supportedCRSs) === null || _b === void 0 ? void 0 : _b.forEach(e => {
                this._supportedCRSs.push(e);
            });
        }
    }
    get supportedCRSs() {
        return this._supportedCRSs;
    }
    get formats() {
        return this._formats;
    }
}

class Input {
    constructor(inputResponse) {
        if (inputResponse != null) {
            this._title = inputResponse.title;
            this._abstractValue = inputResponse.abstractValue;
            this._identifier = inputResponse.identifier;
            this._minOccurs = inputResponse.minOccurs;
            this._maxOccurs = inputResponse.maxOccurs;
            if (inputResponse.literalData !== undefined) {
                this._literalData = new LiteralData(inputResponse.literalData);
            }
            else if (inputResponse.complexData !== undefined) {
                this._complexData = new ComplexData(inputResponse.complexData);
            }
            else if (inputResponse.boundingBoxData !== undefined) {
                this._bboxData = new BBoxData(inputResponse.boundingBoxData);
            }
        }
    }
    get title() {
        return this._title;
    }
    get abstractValue() {
        return this._abstractValue;
    }
    get identifier() {
        return this._identifier;
    }
    get minOccurs() {
        return this._minOccurs;
    }
    get maxOccurs() {
        return this._maxOccurs;
    }
    get literalData() {
        return this._literalData;
    }
}

class Output {
    constructor(outputResponse) {
        if (outputResponse != null) {
            this._title = outputResponse.title;
            this._abstractValue = outputResponse.abstractValue;
            this._identifier = outputResponse.identifier;
            if (outputResponse.literalData !== undefined) {
                this._literalData = new LiteralData(outputResponse.literalData);
            }
            if (outputResponse.complexData !== undefined) {
                this._complexData = new ComplexData(outputResponse.complexData);
            }
            if (outputResponse.boundingBoxData !== undefined) {
                this._bboxData = new BBoxData(outputResponse.boundingBoxData);
            }
        }
    }
    get title() {
        return this._title;
    }
    get abstractValue() {
        return this._abstractValue;
    }
    get identifier() {
        return this._identifier;
    }
    get complexData() {
        return this._complexData;
    }
}

class ProcessDetails {
    constructor(processResponse) {
        var _a, _b;
        if (processResponse != null) {
            this._title = processResponse.title;
            this._abstractValue = processResponse.abstractValue;
            this._identifier = processResponse.identifier;
            this._inputs = new Array();
            (_a = processResponse.inputs) === null || _a === void 0 ? void 0 : _a.forEach(e => {
                this._inputs.push(new Input(e));
            });
            this._outputs = new Array();
            (_b = processResponse.outputs) === null || _b === void 0 ? void 0 : _b.forEach(e => {
                this._outputs.push(new Output(e));
            });
        }
    }
    get title() {
        return this._title;
    }
    get abstractValue() {
        return this._abstractValue;
    }
    get identifier() {
        return this._identifier;
    }
    get inputs() {
        return this._inputs;
    }
    get outputs() {
        return this._outputs;
    }
}

class ProcessOffering {
    constructor(processOfferingResponse) {
        var _a, _b;
        if (processOfferingResponse != null) {
            this._service = processOfferingResponse.service;
            this._version = processOfferingResponse.version;
            this._process = new ProcessDetails(processOfferingResponse.process);
            this._processVersion = processOfferingResponse.processVersion;
            this._jobControlOptions = new Array();
            (_a = processOfferingResponse.jobControlOptions) === null || _a === void 0 ? void 0 : _a.forEach(e => {
                this._jobControlOptions.push(e);
            });
            this._outputTransmissionModes = new Array();
            (_b = processOfferingResponse.outputTransmissionModes) === null || _b === void 0 ? void 0 : _b.forEach(e => {
                this._outputTransmissionModes.push(e);
            });
        }
    }
    get service() {
        return this._service;
    }
    get version() {
        return this._version;
    }
    get process() {
        return this._process;
    }
    get processVersion() {
        return this._processVersion;
    }
    get jobControlOptions() {
        return this._jobControlOptions;
    }
    get outputTransmissionModes() {
        return this._outputTransmissionModes;
    }
}

class ProcessDescriptionResponse {
    constructor(processDescriptionResponse) {
        if (processDescriptionResponse != null) {
            this._responseDocument = processDescriptionResponse.responseDocument;
            this._processOffering = new ProcessOffering(processDescriptionResponse.processOffering);
        }
    }
    get responseDocument() {
        return this._responseDocument;
    }
    get processOffering() {
        return this._processOffering;
    }
}

class ComplexDataOutput {
    /**
     * the following parameters are mandatory: identifier
     *
     * the rest might be set to 'undefined'!
     *
     * @identifier output-request identifier
     * @mimeType MIME type of the input; may be 'undefined'
     * @schema reference to a schema; may be 'undefined'
     * @encoding encoding; may be 'undefined'
     * @uom unit of measure; may be 'undefined'
     * @asReference boolean, "true" or "false"
     * @title new title
     * @abstractValue new description as text of the 'Abstract' element
     * 				  of the response document
     * @transmission either "value" or "reference"
     */
    constructor(identifier, mimeType, schema, encoding, uom, asReference = false, title, abstractValue, value, transmission) {
        this.type = 'complex';
        this.identifier = identifier;
        this.mimeType = mimeType;
        this.schema = schema;
        this.encoding = encoding;
        this.uom = uom;
        this.asReference = asReference;
        this.title = title;
        this.abstractValue = abstractValue;
        this.value = value;
        if (transmission === undefined) {
            this.transmission = 'value';
        }
        else {
            this.transmission = transmission;
        }
    }
}

class BBoxDataOutput {
    constructor(identifier, mimeType, schema, encoding, crs, dimensions, lowerCorner, upperCorner, transmission) {
        this.type = 'bbox';
        this.identifier = identifier;
        this.mimeType = mimeType;
        this.schema = schema;
        this.encoding = encoding;
        this.crs = crs;
        this.dimensions = dimensions;
        this.lowerCorner = lowerCorner;
        this.upperCorner = upperCorner;
        if (transmission === undefined) {
            this.transmission = 'value';
        }
        else {
            this.transmission = transmission;
        }
    }
}

class LiteralDataOutput {
    constructor(identifier, mimeType, schema, encoding, asReference = false, abstractValue, dataType, uom, value, transmission) {
        this.type = 'literal';
        this.identifier = identifier;
        this.mimeType = mimeType;
        this.schema = schema;
        this.encoding = encoding;
        this.asReference = asReference;
        this.abstractValue = abstractValue;
        this.dataType = dataType;
        this.uom = uom;
        this.value = value;
        if (transmission === undefined) {
            this.transmission = 'value';
        }
        else {
            this.transmission = transmission;
        }
    }
}

class ExecuteResponseData {
    constructor(data) {
        if (data != null && data.complexData != null) {
            this._data = new ComplexDataOutput(data.complexData.identifier, data.complexData.mimeType, data.complexData.schema, data.complexData.encoding, data.complexData.uom, data.complexData.asReference, data.complexData.title, data.complexData.abstractValue, data.complexData.value);
        }
        else if (data != null && data.literalData != null) {
            this._data = new LiteralDataOutput(data.literalData.identifier, data.literalData.mimeType, data.literalData.schema, data.literalData.encoding, data.literalData.asReference, data.literalData.abstractValue, data.literalData.dataType, data.literalData.uom, data.literalData.value);
        }
        else if (data != null && data.boundingBoxData != null) {
            this._data = new BBoxDataOutput(data.boundingBoxData.identifier, data.boundingBoxData.mimeType, data.boundingBoxData.schema, data.boundingBoxData.encoding, data.boundingBoxData.crs, data.boundingBoxData.dimensions, data.boundingBoxData.lowerCorner, data.boundingBoxData.upperCorner);
        }
    }
    get data() {
        return this._data;
    }
}

class ExecuteOutput {
    constructor(executeOutput) {
        this._identifier = executeOutput.identifier;
        this._title = executeOutput.title;
        this._abstractValue = executeOutput.abstractValue;
        this._data = new ExecuteResponseData(executeOutput.data);
    }
    get identifier() {
        return this._identifier;
    }
    get title() {
        return this._title;
    }
    get data() {
        return this._data;
    }
    get abstractValue() {
        return this._abstractValue;
    }
}

class Status {
    constructor(statusJson) {
        if (statusJson != null) {
            this._creationTime = statusJson.creationTime;
            this._info = statusJson.info;
        }
    }
    get creationTime() {
        return this._creationTime;
    }
    get info() {
        return this._info;
    }
}

class ExecuteResponseDocument {
    constructor(executeResponseDocumentJson) {
        var _a;
        if (executeResponseDocumentJson != null) {
            this._service = executeResponseDocumentJson.service;
            this._version = executeResponseDocumentJson.version;
            this._lang = executeResponseDocumentJson.lang;
            this._statusLocation = executeResponseDocumentJson.statusLocation;
            this._serviceInstance = executeResponseDocumentJson.serviceInstance;
            this._process = new Process(executeResponseDocumentJson.process);
            this._status = new Status(executeResponseDocumentJson.status);
            this._outputs = new Array();
            (_a = executeResponseDocumentJson.outputs) === null || _a === void 0 ? void 0 : _a.forEach(e => {
                this._outputs.push(new ExecuteOutput(e));
            });
            this._jobId = executeResponseDocumentJson.jobId;
            this._expirationDate = executeResponseDocumentJson.expirationDate;
        }
    }
    get expirationDate() {
        return this._expirationDate;
    }
    get lang() {
        return this._lang;
    }
    get service() {
        return this._service;
    }
    get version() {
        return this._version;
    }
    get statusLocation() {
        return this._statusLocation;
    }
    get serviceInstance() {
        return this._serviceInstance;
    }
    get process() {
        return this._process;
    }
    get status() {
        return this._status;
    }
    get outputs() {
        return this._outputs;
    }
    get jobId() {
        return this._jobId;
    }
}

class ExecuteResponseObject {
    constructor(executeResponseJson) {
        // type: string, serviceVersion: string, responseDocument: ExecuteResponseDocument
        this._type = executeResponseJson.type;
        this._serviceVersion = executeResponseJson.serviceVersion;
        this._responseDocument = new ExecuteResponseDocument(executeResponseJson.responseDocument);
    }
    get type() {
        return this._type;
    }
    get serviceVersion() {
        return this._serviceVersion;
    }
    get responseDocument() {
        return this._responseDocument;
    }
}

class ExecuteResponse {
    constructor(executeResponseJson) {
        if (executeResponseJson != null) {
            this._resultDocument = executeResponseJson.responseDocument;
            this._executeResponse = new ExecuteResponseObject(executeResponseJson.executeResponse);
        }
    }
    get resultDocument() {
        return this._resultDocument;
    }
    get executeResponse() {
        return this._executeResponse;
    }
}

class StatusResponseDocument {
    constructor(statusResponseDocument) {
        if (statusResponseDocument != null) {
            this._jobId = statusResponseDocument.jobId;
            this._status = statusResponseDocument.status;
            this._expirationDate = statusResponseDocument.expirationDate;
            this._estimatedCompletion = statusResponseDocument.estimatedCompletion;
            this._nextPoll = statusResponseDocument.nextPoll;
            this._percentageCompleted = statusResponseDocument.percentageCompleted;
        }
    }
    get jobId() {
        return this._jobId;
    }
    get status() {
        return this._status;
    }
    get expirationDate() {
        return this._expirationDate;
    }
    get estimatedCompletion() {
        return this._estimatedCompletion;
    }
    get nextPoll() {
        return this._nextPoll;
    }
    get percentageCompleted() {
        return this._percentageCompleted;
    }
}

class StatusResponse {
    constructor(getStatusResponse) {
        if (getStatusResponse != null) {
            this._type = getStatusResponse.type;
            this._serviceVersion = getStatusResponse.serviceVersion;
            this._responseDocument = new StatusResponseDocument(getStatusResponse.responseDocument);
        }
    }
    get type() {
        return this._type;
    }
    get serviceVersion() {
        return this._serviceVersion;
    }
    get responseDocument() {
        return this._responseDocument;
    }
}

class ResultResponse {
    constructor(resultResponse) {
        if (resultResponse != null) {
            this._responseDocument = resultResponse.responseDocument;
            this._executeResponse = new ExecuteResponseObject(resultResponse.executeResponse);
        }
    }
    get responseDocument() {
        return this._responseDocument;
    }
    get executeResponse() {
        return this._executeResponse;
    }
}

const WPS_VERSION_1 = '1.0.0';
const WPS_VERSION_2 = '2.0.0';
class WpsNgService {
    constructor(_version, _url) {
        this._version = _version;
        this._url = _url;
        // Url Check
        if (!WpsNgService.isValidUrl(_url)) {
            throw new Error('Url ' + _url + ' is not valid.');
        }
        // Version Check
        this._version = (_version === WPS_VERSION_2) ? WPS_VERSION_2 : WPS_VERSION_1;
        const setting = new Settings(_url, _version);
        this.wpsServiceJS = new WpsService(setting);
    }
    /**
     * Utility Function to check URL Validity
     */
    static isValidUrl(url) {
        try {
            // tslint:disable-next-line:no-unused-expression
            new URL(url);
        }
        catch (_) {
            return false;
        }
        return true;
    }
    /**
     * allowed values : "1.0.0" or "2.0.0"
     *
     * requires Constant.js
     */
    setVersion(version = WPS_VERSION_2) {
        this._version = (version === WPS_VERSION_2) ? WPS_VERSION_2 : WPS_VERSION_1;
    }
    /**
     * allowed values : "1.0.0" or "2.0.0"
     *
     * requires Constant.js
     */
    setUrl(url) {
        if (!WpsNgService.isValidUrl(url)) {
            throw new Error('Url ' + url + ' is not valid.');
        }
        this._url = url;
    }
    get version() {
        return this._version;
    }
    get url() {
        return this._url;
    }
    /**
     * getCapabilities via HTTP GET
     *
     * @callbackFunction is triggered on success-event of JQuery.ajax method
     */
    getCapabilitiesGET(callback) {
        let capabilitiesResponse;
        this.wpsServiceJS.getCapabilities_GET((response) => {
            if (response.textStatus === 'error') {
                throw new Error(response.errorThrown);
            }
            capabilitiesResponse = new CapabilitiesResponse(response);
            callback(capabilitiesResponse);
        });
    }
    /**
     * getCapabilities via HTTP POST
     *
     * @callbackFunction is triggered on success-event of JQuery.ajax method.
     *                   Takes the response object as argument
     */
    getCapabilitiesPOST(callback) {
        let capabilitiesResponse;
        this.wpsServiceJS.getCapabilities_POST((response) => {
            if (response.textStatus === 'error') {
                throw new Error(response.errorThrown);
            }
            capabilitiesResponse = new CapabilitiesResponse(response);
            callback(capabilitiesResponse);
        });
    }
    /**
     * process description via HTTP GET
     *
     * @callbackFunction is triggered on success-event of JQuery.ajax method.
     *                   Takes the response object as argument
     * @processIdentifier the identifier of the process
     */
    processDescriptionGet(processIdentifier, callback) {
        let processDescriptionResponse;
        this.wpsServiceJS.describeProcess_GET((response) => {
            if (response.textStatus === 'error') {
                throw new Error(response.errorThrown);
            }
            processDescriptionResponse = new ProcessDescriptionResponse(response);
            callback(processDescriptionResponse);
        }, processIdentifier);
    }
    /**
     * process description via HTTP POST
     *
     * @callbackFunction is triggered on success-event of JQuery.ajax method.
     *                   Takes the response object as argument
     * @processIdentifier the identifier of the process
     */
    processDescriptionPost(processIdentifier, callback) {
        let processDescriptionResponse;
        this.wpsServiceJS.describeProcess_POST((response) => {
            if (response.textStatus === 'error') {
                throw new Error(response.errorThrown);
            }
            processDescriptionResponse = new ProcessDescriptionResponse(response);
            callback(processDescriptionResponse);
        }, processIdentifier);
    }
    /**
     * WPS execute request via HTTP POST
     *
     * @callbackFunction is triggered on success-event of JQuery.ajax method.
     *                   Takes the response object as argument
     * @processIdentifier the identifier of the process
     * @responseFormat either "raw" or "document", default is "document"
     * @executionMode either "sync" or "async";
     * @lineage only relevant for WPS 1.0; boolean, if "true" then returned
     *          response will include original input and output definition
     * @inputs an array of needed Input objects, use JS-object InputGenerator to
     *         create inputs
     * @outputs an array of requested Output objects, use JS-object
     *          OutputGenerator to create inputs
     */
    execute(callback, processIdentifier, responseFormat, executionMode, lineage, inputs, outputs) {
        let executeResponse;
        this.wpsServiceJS.execute((response) => {
            // Check for error
            if (response.textStatus === 'error') {
                throw new Error(response.errorThrown);
            }
            executeResponse = response;
            callback(new ExecuteResponse(executeResponse));
        }, processIdentifier, responseFormat, executionMode, lineage, inputs, outputs);
    }
    /**
     * WPS 2.0 getStatus operation to retrieve the status of an executed job
     *
     * Not usable with WPS 1.0
     *
     * @callbackFunction a callback function that will be triggered with the
     *                   parsed StatusInfo document as argument
     * @jobId the ID of the asynchronously executed job
     */
    getStatus_WPS_2_0(callback, jobId) {
        let getStatusResponse;
        this.wpsServiceJS.getStatus_WPS_2_0((response) => {
            if (response.textStatus === 'error') {
                throw new Error(response.errorThrown);
            }
            getStatusResponse = new StatusResponse(response.executeResponse);
            callback(getStatusResponse);
        }, jobId);
    }
    /**
     * WPS 2.0 getResult operation to retrieve the Result of an executed job
     *
     * Not usable with WPS 1.0
     *
     * @callbackFunction a callback function that will be triggered with the
     *                   parsed StatusInfo document as argument
     * @jobId the ID of the asynchronously executed job
     */
    getResult_WPS_2_0(callback, jobId) {
        let getResultResponse;
        this.wpsServiceJS.getResult_WPS_2_0((response) => {
            if (response.textStatus === 'error') {
                throw new Error(response.errorThrown);
            }
            getResultResponse = new ResultResponse(response);
            callback(getResultResponse);
        }, jobId);
    }
    /**
     * Only important for WPS 1.0
     *
     * @callbackFunction a callback function that will be triggered with the
     *                   parsed executeResponse as argument
     * @storedExecuteResponseLocation the url, where the execute response
     *                                document is located / can be retrieved
     *                                from
     */
    parseStoredExecuteResponse_WPS_1_0(callback, storedExecuteResponseLocation) {
        let executeResponse;
        this.wpsServiceJS.parseStoredExecuteResponse_WPS_1_0((response) => {
            if (response.textStatus === 'error') {
                throw new Error(response.errorThrown);
            }
            executeResponse = new ExecuteResponse(response);
            callback(executeResponse);
        }, storedExecuteResponseLocation);
    }
    getXmlRequestExecuteProcess(processIdentifier, responseFormat, executionMode, lineage, inputs, outputs) {
        return this.wpsServiceJS.getXmlRequestExecuteProcess(processIdentifier, responseFormat, executionMode, lineage, inputs, outputs);
    }
}

class WpsNgComponent {
    constructor() { }
    ngOnInit() {
    }
}
WpsNgComponent.ɵfac = function WpsNgComponent_Factory(t) { return new (t || WpsNgComponent)(); };
WpsNgComponent.ɵcmp = ɵɵdefineComponent({ type: WpsNgComponent, selectors: [["lib-wps-ng"]], decls: 0, vars: 0, template: function WpsNgComponent_Template(rf, ctx) { }, encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(WpsNgComponent, [{
        type: Component,
        args: [{
                selector: 'lib-wps-ng',
                template: ``,
                styles: []
            }]
    }], function () { return []; }, null); })();

class WpsNgModule {
}
WpsNgModule.ɵmod = ɵɵdefineNgModule({ type: WpsNgModule });
WpsNgModule.ɵinj = ɵɵdefineInjector({ factory: function WpsNgModule_Factory(t) { return new (t || WpsNgModule)(); }, imports: [[]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(WpsNgModule, { declarations: [WpsNgComponent], exports: [WpsNgComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(WpsNgModule, [{
        type: NgModule,
        args: [{
                declarations: [WpsNgComponent],
                imports: [],
                exports: [WpsNgComponent]
            }]
    }], null, null); })();

class CapabilitiesResponseDocument {
    constructor(responseDocumentJson) {
        if (responseDocumentJson != null) {
            this._location = responseDocumentJson.location;
        }
    }
    get location() {
        return this._location;
    }
}

class BBoxDataInput {
    /**
     * the following parameters are mandatory: identifier, crs,
     * lowerCorner and upperCorner
     *
     * the rest might be set to 'undefined'!
     *
     * @identifier input-request identifier
     * @crs coordinate reference system URI
     * @dimension number of dimensions in this CRS
     * @lowerCorner orderedSequence of double values
     * @upperCorner orderedSequence of double values
     */
    constructor(identifier, crs, dimension, lowerCorner, upperCorner) {
        this.type = 'bbox';
        this.identifier = identifier;
        this.crs = crs;
        this.dimension = dimension || undefined;
        this.lowerCorner = lowerCorner;
        this.upperCorner = upperCorner;
    }
}

class ComplexDataInput {
    /**
     * the following parameters are mandatory: identifier and
     * complexPayload
     *
     * the rest might be set to 'undefined'!
     *
     * @identifier input-request identifier
     * @mimeType MIME type of the input-request; may be 'undefined'
     * @schema reference to a schema; may be 'undefined'
     * @encoding encoding; may be 'undefined'
     * @complexPayload the complex payload (XML tags) as String
     * @asReference boolean, either "true" or "false", indicating
     *              whether parameter body contains a URL as reference
     *              to an external body or the actual POST body
     */
    constructor(identifier, mimeType, schema, encoding, asReference = false, complexPayload) {
        this.type = 'complex';
        this.identifier = identifier;
        this.mimeType = mimeType;
        this.schema = schema;
        this.encoding = encoding;
        this.asReference = asReference;
        this.complexPayload = complexPayload;
    }
}

class LiteralDataInput {
    /**
     * the following parameters are mandatory: identifier and value
     *
     * the rest might be set to 'undefined'!
     *
     * @identifier input-request identifier
     * @dataType data type of the input-request; may be 'undefined'
     * @uom unit of measure; may be 'undefined'
     * @value the literal value of the input-request
     */
    constructor(identifier, dataType, uom, value) {
        this.type = 'literal';
        this.identifier = identifier;
        this.dataType = dataType;
        this.uom = uom;
        this.value = value;
    }
}

/*
 * Public API Surface of wps-ng
 */

/**
 * Generated bundle index. Do not edit.
 */

export { Address, BBoxDataInput, BBoxDataOutput, Capabilities, CapabilitiesResponse, CapabilitiesResponseDocument, ComplexData, ComplexDataInput, ComplexDataOutput, ContactInfo, DCP, DataType, ExecuteOutput, ExecuteResponse, ExecuteResponseData, ExecuteResponseDocument, ExecuteResponseObject, Format, HTTP, Input, LiteralData, LiteralDataDomains, LiteralDataInput, LiteralDataOutput, Operation, Output, Process, ProcessDescriptionResponse, ProcessDetails, ResultResponse, ServiceContact, ServiceIdentification, ServiceProvider, Settings, Status, StatusResponse, WpsNgComponent, WpsNgModule, WpsNgService };
//# sourceMappingURL=wps-ng.js.map
