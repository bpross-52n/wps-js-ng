(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('wps-ng', ['exports', '@angular/core'], factory) :
    (global = global || self, factory(global['wps-ng'] = {}, global.ng.core));
}(this, (function (exports, i0) { 'use strict';

    var Settings = /** @class */ (function () {
        function Settings(url, version) {
            this._version = version;
            this._url = url;
        }
        Object.defineProperty(Settings.prototype, "url", {
            get: function () {
                return this._url;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Settings.prototype, "version", {
            get: function () {
                return this._version;
            },
            enumerable: false,
            configurable: true
        });
        return Settings;
    }());

    var ServiceIdentification = /** @class */ (function () {
        function ServiceIdentification(serviceIdentificationJson) {
            var _this = this;
            var _a, _b;
            if (serviceIdentificationJson != null) {
                this._title = serviceIdentificationJson.title;
                this._abstractValue = serviceIdentificationJson.abstractValue;
                this._keywords = new Array();
                (_a = serviceIdentificationJson.keywords) === null || _a === void 0 ? void 0 : _a.forEach(function (e) {
                    _this._keywords.push(e);
                });
                this._serviceType = serviceIdentificationJson.serviceType;
                this._serviceTypeVersions = new Array();
                (_b = serviceIdentificationJson.serviceTypeVersions) === null || _b === void 0 ? void 0 : _b.forEach(function (e) {
                    _this._serviceTypeVersions.push(e);
                });
                this._fees = serviceIdentificationJson.fees;
                this._accessConstraints = serviceIdentificationJson.accessConstraints;
            }
        }
        Object.defineProperty(ServiceIdentification.prototype, "title", {
            get: function () {
                return this._title;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ServiceIdentification.prototype, "abstractValue", {
            get: function () {
                return this._abstractValue;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ServiceIdentification.prototype, "keywords", {
            get: function () {
                return this._keywords;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ServiceIdentification.prototype, "serviceType", {
            get: function () {
                return this._serviceType;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ServiceIdentification.prototype, "serviceTypeVersions", {
            get: function () {
                return this._serviceTypeVersions;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ServiceIdentification.prototype, "fees", {
            get: function () {
                return this._fees;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ServiceIdentification.prototype, "accessConstraints", {
            get: function () {
                return this._accessConstraints;
            },
            enumerable: false,
            configurable: true
        });
        return ServiceIdentification;
    }());

    var Address = /** @class */ (function () {
        function Address(addressJson) {
            this._deliveryPoint = addressJson.deliveryPoint;
            this._city = addressJson.city;
            this._administrativeArea = addressJson.administrativeArea;
            this._postalCode = addressJson.postalCode;
            this._country = addressJson.country;
            this._electronicMailAddress = addressJson.electronicMailAddress;
        }
        Object.defineProperty(Address.prototype, "deliveryPoint", {
            get: function () {
                return this._deliveryPoint;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Address.prototype, "city", {
            get: function () {
                return this._city;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Address.prototype, "administrativeArea", {
            get: function () {
                return this._administrativeArea;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Address.prototype, "postalCode", {
            get: function () {
                return this._postalCode;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Address.prototype, "country", {
            get: function () {
                return this._country;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Address.prototype, "electronicMailAddress", {
            get: function () {
                return this._electronicMailAddress;
            },
            enumerable: false,
            configurable: true
        });
        return Address;
    }());

    var ContactInfo = /** @class */ (function () {
        function ContactInfo(contactInfoJson) {
            if (contactInfoJson != null) {
                this._address = new Address(contactInfoJson.address);
            }
        }
        Object.defineProperty(ContactInfo.prototype, "address", {
            get: function () {
                return this._address;
            },
            enumerable: false,
            configurable: true
        });
        return ContactInfo;
    }());

    var ServiceContact = /** @class */ (function () {
        function ServiceContact(serviceContactJson) {
            if (serviceContactJson != null) {
                this._individualName = serviceContactJson.individualName;
                this._contactInfo = new ContactInfo(serviceContactJson.contactInfo);
            }
        }
        Object.defineProperty(ServiceContact.prototype, "individualName", {
            get: function () {
                return this._individualName;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ServiceContact.prototype, "contactInfo", {
            get: function () {
                return this._contactInfo;
            },
            enumerable: false,
            configurable: true
        });
        return ServiceContact;
    }());

    var ServiceProvider = /** @class */ (function () {
        function ServiceProvider(serviceProviderJson) {
            if (serviceProviderJson != null) {
                this._providerName = serviceProviderJson.providerName;
                this._serviceContact = new ServiceContact(serviceProviderJson.serviceContact);
            }
        }
        Object.defineProperty(ServiceProvider.prototype, "providerName", {
            get: function () {
                return this._providerName;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ServiceProvider.prototype, "serviceContact", {
            get: function () {
                return this._serviceContact;
            },
            enumerable: false,
            configurable: true
        });
        return ServiceProvider;
    }());

    var HTTP = /** @class */ (function () {
        function HTTP(HTTPJson) {
            if (HTTPJson != null) {
                this._name = HTTPJson.name;
                this._get = HTTPJson.get;
                this._post = HTTPJson.post;
            }
        }
        Object.defineProperty(HTTP.prototype, "name", {
            get: function () {
                return this._name;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(HTTP.prototype, "get", {
            get: function () {
                return this._get;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(HTTP.prototype, "post", {
            get: function () {
                return this._post;
            },
            enumerable: false,
            configurable: true
        });
        return HTTP;
    }());

    var DCP = /** @class */ (function () {
        function DCP(DCPJson) {
            if (DCPJson != null) {
                this._HTTP = new HTTP(DCPJson.HTTP);
            }
        }
        Object.defineProperty(DCP.prototype, "HTTP", {
            get: function () {
                return this._HTTP;
            },
            enumerable: false,
            configurable: true
        });
        return DCP;
    }());

    var Operation = /** @class */ (function () {
        function Operation(operationJson) {
            if (operationJson != null) {
                this._DCP = new DCP(operationJson.DCP);
            }
        }
        Object.defineProperty(Operation.prototype, "DCP", {
            get: function () {
                return this._DCP;
            },
            enumerable: false,
            configurable: true
        });
        return Operation;
    }());

    var Process = /** @class */ (function () {
        function Process(processJson) {
            if (processJson != null) {
                this._title = processJson.title;
                this._identifier = processJson.identifier;
                this._processVersion = processJson.processVersion;
                this._jobControlOptions = processJson.jobControlOptions;
                this._outputTransmission = processJson.outputTransmission;
            }
        }
        Object.defineProperty(Process.prototype, "title", {
            get: function () {
                return this._title;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Process.prototype, "identifier", {
            get: function () {
                return this._identifier;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Process.prototype, "processVersion", {
            get: function () {
                return this._processVersion;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Process.prototype, "jobControlOptions", {
            get: function () {
                return this._jobControlOptions;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Process.prototype, "outputTransmission", {
            get: function () {
                return this._outputTransmission;
            },
            enumerable: false,
            configurable: true
        });
        return Process;
    }());

    var Capabilities = /** @class */ (function () {
        function Capabilities(capabilitiesJson) {
            var _this = this;
            var _a, _b, _c;
            if (capabilitiesJson != null) {
                this._service = capabilitiesJson.service;
                this._version = capabilitiesJson.version;
                this._serviceIdentification = new ServiceIdentification(capabilitiesJson.serviceIdentification);
                this._serviceProvider = new ServiceProvider(capabilitiesJson.serviceProvider);
                this._operations = new Array();
                (_a = capabilitiesJson.operations) === null || _a === void 0 ? void 0 : _a.forEach(function (e) {
                    _this._operations.push(new Operation(e));
                });
                this._languages = new Array();
                (_b = capabilitiesJson.languages) === null || _b === void 0 ? void 0 : _b.forEach(function (e) {
                    _this._languages.push(e);
                });
                this._processes = new Array();
                (_c = capabilitiesJson.processes) === null || _c === void 0 ? void 0 : _c.forEach(function (e) {
                    _this._processes.push(new Process(e));
                });
                this._processes = capabilitiesJson.processes;
            }
        }
        Object.defineProperty(Capabilities.prototype, "service", {
            get: function () {
                return this._service;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Capabilities.prototype, "version", {
            get: function () {
                return this._version;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Capabilities.prototype, "serviceIdentification", {
            get: function () {
                return this._serviceIdentification;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Capabilities.prototype, "serviceProvider", {
            get: function () {
                return this._serviceProvider;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Capabilities.prototype, "operations", {
            get: function () {
                return this._operations;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Capabilities.prototype, "languages", {
            get: function () {
                return this._languages;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Capabilities.prototype, "processes", {
            get: function () {
                return this._processes;
            },
            enumerable: false,
            configurable: true
        });
        return Capabilities;
    }());

    var CapabilitiesResponse = /** @class */ (function () {
        function CapabilitiesResponse(capabilitiesResponseJson) {
            this._responseDocument = capabilitiesResponseJson.responseDocument;
            this._capabilities = new Capabilities(capabilitiesResponseJson.capabilities);
        }
        Object.defineProperty(CapabilitiesResponse.prototype, "responseDocument", {
            get: function () {
                return this._responseDocument;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CapabilitiesResponse.prototype, "capabilities", {
            get: function () {
                return this._capabilities;
            },
            enumerable: false,
            configurable: true
        });
        return CapabilitiesResponse;
    }());

    var Format = /** @class */ (function () {
        function Format(formatResponse) {
            if (formatResponse != null) {
                this._mimeType = formatResponse.mimeType;
                this._encoding = formatResponse.encoding;
                this._schema = formatResponse.schema;
            }
        }
        Object.defineProperty(Format.prototype, "mimeType", {
            get: function () {
                return this._mimeType;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Format.prototype, "encoding", {
            get: function () {
                return this._encoding;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Format.prototype, "schema", {
            get: function () {
                return this._schema;
            },
            enumerable: false,
            configurable: true
        });
        return Format;
    }());

    var DataType = /** @class */ (function () {
        function DataType(dataType) {
            if (dataType != null) {
                this._type = dataType.type;
                this._reference = dataType.reference;
            }
        }
        Object.defineProperty(DataType.prototype, "type", {
            get: function () {
                return this._type;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataType.prototype, "reference", {
            get: function () {
                return this._reference;
            },
            enumerable: false,
            configurable: true
        });
        return DataType;
    }());

    var LiteralDataDomains = /** @class */ (function () {
        function LiteralDataDomains(literalDataDomainsJS) {
            this._anyValue = literalDataDomainsJS.anyValue;
            this._dataType = new DataType(literalDataDomainsJS.dataType);
            this._defaultValue = literalDataDomainsJS.defaultValue;
            this._unitOfMeasure = literalDataDomainsJS.unitOfMeasure;
        }
        Object.defineProperty(LiteralDataDomains.prototype, "anyValue", {
            get: function () {
                return this._anyValue;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LiteralDataDomains.prototype, "dataType", {
            get: function () {
                return this._dataType;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LiteralDataDomains.prototype, "defaultValue", {
            get: function () {
                return this._defaultValue;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LiteralDataDomains.prototype, "unitOfMeasure", {
            get: function () {
                return this._unitOfMeasure;
            },
            enumerable: false,
            configurable: true
        });
        return LiteralDataDomains;
    }());

    var LiteralData = /** @class */ (function () {
        function LiteralData(literalDataResponse) {
            var _this = this;
            var _a, _b;
            if (literalDataResponse != null) {
                this._formats = new Array();
                (_a = literalDataResponse.formats) === null || _a === void 0 ? void 0 : _a.forEach(function (e) {
                    _this._formats.push(new Format(e));
                });
                this._literalDataDomains = new Array();
                (_b = literalDataResponse.literalDataDomains) === null || _b === void 0 ? void 0 : _b.forEach(function (e) {
                    _this._literalDataDomains.push(new LiteralDataDomains(e));
                });
            }
        }
        Object.defineProperty(LiteralData.prototype, "literalDataDomains", {
            get: function () {
                return this._literalDataDomains;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LiteralData.prototype, "formats", {
            get: function () {
                return this._formats;
            },
            enumerable: false,
            configurable: true
        });
        return LiteralData;
    }());

    var ComplexData = /** @class */ (function () {
        function ComplexData(complexDataResponse) {
            var _this = this;
            var _a;
            if (complexDataResponse != null) {
                this._formats = new Array();
                (_a = complexDataResponse.formats) === null || _a === void 0 ? void 0 : _a.forEach(function (e) {
                    _this._formats.push(new Format(e));
                });
            }
        }
        Object.defineProperty(ComplexData.prototype, "formats", {
            get: function () {
                return this._formats;
            },
            enumerable: false,
            configurable: true
        });
        return ComplexData;
    }());

    var BBoxData = /** @class */ (function () {
        function BBoxData(bboxDataResponse) {
            var _this = this;
            var _a, _b;
            if (bboxDataResponse != null) {
                this._formats = new Array();
                (_a = bboxDataResponse.formats) === null || _a === void 0 ? void 0 : _a.forEach(function (e) {
                    _this._formats.push(new Format(e));
                });
                this._supportedCRSs = new Array();
                (_b = bboxDataResponse.supportedCRSs) === null || _b === void 0 ? void 0 : _b.forEach(function (e) {
                    _this._supportedCRSs.push(e);
                });
            }
        }
        Object.defineProperty(BBoxData.prototype, "supportedCRSs", {
            get: function () {
                return this._supportedCRSs;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(BBoxData.prototype, "formats", {
            get: function () {
                return this._formats;
            },
            enumerable: false,
            configurable: true
        });
        return BBoxData;
    }());

    var Input = /** @class */ (function () {
        function Input(inputResponse) {
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
        Object.defineProperty(Input.prototype, "title", {
            get: function () {
                return this._title;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Input.prototype, "abstractValue", {
            get: function () {
                return this._abstractValue;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Input.prototype, "identifier", {
            get: function () {
                return this._identifier;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Input.prototype, "minOccurs", {
            get: function () {
                return this._minOccurs;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Input.prototype, "maxOccurs", {
            get: function () {
                return this._maxOccurs;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Input.prototype, "literalData", {
            get: function () {
                return this._literalData;
            },
            enumerable: false,
            configurable: true
        });
        return Input;
    }());

    var Output = /** @class */ (function () {
        function Output(outputResponse) {
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
        Object.defineProperty(Output.prototype, "title", {
            get: function () {
                return this._title;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Output.prototype, "abstractValue", {
            get: function () {
                return this._abstractValue;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Output.prototype, "identifier", {
            get: function () {
                return this._identifier;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Output.prototype, "complexData", {
            get: function () {
                return this._complexData;
            },
            enumerable: false,
            configurable: true
        });
        return Output;
    }());

    var ProcessDetails = /** @class */ (function () {
        function ProcessDetails(processResponse) {
            var _this = this;
            var _a, _b;
            if (processResponse != null) {
                this._title = processResponse.title;
                this._abstractValue = processResponse.abstractValue;
                this._identifier = processResponse.identifier;
                this._inputs = new Array();
                (_a = processResponse.inputs) === null || _a === void 0 ? void 0 : _a.forEach(function (e) {
                    _this._inputs.push(new Input(e));
                });
                this._outputs = new Array();
                (_b = processResponse.outputs) === null || _b === void 0 ? void 0 : _b.forEach(function (e) {
                    _this._outputs.push(new Output(e));
                });
            }
        }
        Object.defineProperty(ProcessDetails.prototype, "title", {
            get: function () {
                return this._title;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ProcessDetails.prototype, "abstractValue", {
            get: function () {
                return this._abstractValue;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ProcessDetails.prototype, "identifier", {
            get: function () {
                return this._identifier;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ProcessDetails.prototype, "inputs", {
            get: function () {
                return this._inputs;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ProcessDetails.prototype, "outputs", {
            get: function () {
                return this._outputs;
            },
            enumerable: false,
            configurable: true
        });
        return ProcessDetails;
    }());

    var ProcessOffering = /** @class */ (function () {
        function ProcessOffering(processOfferingResponse) {
            var _this = this;
            var _a, _b;
            if (processOfferingResponse != null) {
                this._service = processOfferingResponse.service;
                this._version = processOfferingResponse.version;
                this._process = new ProcessDetails(processOfferingResponse.process);
                this._processVersion = processOfferingResponse.processVersion;
                this._jobControlOptions = new Array();
                (_a = processOfferingResponse.jobControlOptions) === null || _a === void 0 ? void 0 : _a.forEach(function (e) {
                    _this._jobControlOptions.push(e);
                });
                this._outputTransmissionModes = new Array();
                (_b = processOfferingResponse.outputTransmissionModes) === null || _b === void 0 ? void 0 : _b.forEach(function (e) {
                    _this._outputTransmissionModes.push(e);
                });
            }
        }
        Object.defineProperty(ProcessOffering.prototype, "service", {
            get: function () {
                return this._service;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ProcessOffering.prototype, "version", {
            get: function () {
                return this._version;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ProcessOffering.prototype, "process", {
            get: function () {
                return this._process;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ProcessOffering.prototype, "processVersion", {
            get: function () {
                return this._processVersion;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ProcessOffering.prototype, "jobControlOptions", {
            get: function () {
                return this._jobControlOptions;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ProcessOffering.prototype, "outputTransmissionModes", {
            get: function () {
                return this._outputTransmissionModes;
            },
            enumerable: false,
            configurable: true
        });
        return ProcessOffering;
    }());

    var ProcessDescriptionResponse = /** @class */ (function () {
        function ProcessDescriptionResponse(processDescriptionResponse) {
            if (processDescriptionResponse != null) {
                this._responseDocument = processDescriptionResponse.responseDocument;
                this._processOffering = new ProcessOffering(processDescriptionResponse.processOffering);
            }
        }
        Object.defineProperty(ProcessDescriptionResponse.prototype, "responseDocument", {
            get: function () {
                return this._responseDocument;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ProcessDescriptionResponse.prototype, "processOffering", {
            get: function () {
                return this._processOffering;
            },
            enumerable: false,
            configurable: true
        });
        return ProcessDescriptionResponse;
    }());

    var ComplexDataOutput = /** @class */ (function () {
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
        function ComplexDataOutput(identifier, mimeType, schema, encoding, uom, asReference, title, abstractValue, value, transmission) {
            if (asReference === void 0) { asReference = false; }
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
        return ComplexDataOutput;
    }());

    var BBoxDataOutput = /** @class */ (function () {
        function BBoxDataOutput(identifier, mimeType, schema, encoding, crs, dimensions, lowerCorner, upperCorner, transmission) {
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
        return BBoxDataOutput;
    }());

    var LiteralDataOutput = /** @class */ (function () {
        function LiteralDataOutput(identifier, mimeType, schema, encoding, asReference, abstractValue, dataType, uom, value, transmission) {
            if (asReference === void 0) { asReference = false; }
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
        return LiteralDataOutput;
    }());

    var ExecuteResponseData = /** @class */ (function () {
        function ExecuteResponseData(data) {
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
        Object.defineProperty(ExecuteResponseData.prototype, "data", {
            get: function () {
                return this._data;
            },
            enumerable: false,
            configurable: true
        });
        return ExecuteResponseData;
    }());

    var ExecuteOutput = /** @class */ (function () {
        function ExecuteOutput(executeOutput) {
            this._identifier = executeOutput.identifier;
            this._title = executeOutput.title;
            this._abstractValue = executeOutput.abstractValue;
            this._data = new ExecuteResponseData(executeOutput.data);
        }
        Object.defineProperty(ExecuteOutput.prototype, "identifier", {
            get: function () {
                return this._identifier;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ExecuteOutput.prototype, "title", {
            get: function () {
                return this._title;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ExecuteOutput.prototype, "data", {
            get: function () {
                return this._data;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ExecuteOutput.prototype, "abstractValue", {
            get: function () {
                return this._abstractValue;
            },
            enumerable: false,
            configurable: true
        });
        return ExecuteOutput;
    }());

    var Status = /** @class */ (function () {
        function Status(statusJson) {
            if (statusJson != null) {
                this._creationTime = statusJson.creationTime;
                this._info = statusJson.info;
            }
        }
        Object.defineProperty(Status.prototype, "creationTime", {
            get: function () {
                return this._creationTime;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Status.prototype, "info", {
            get: function () {
                return this._info;
            },
            enumerable: false,
            configurable: true
        });
        return Status;
    }());

    var ExecuteResponseDocument = /** @class */ (function () {
        function ExecuteResponseDocument(executeResponseDocumentJson) {
            var _this = this;
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
                (_a = executeResponseDocumentJson.outputs) === null || _a === void 0 ? void 0 : _a.forEach(function (e) {
                    _this._outputs.push(new ExecuteOutput(e));
                });
                this._jobId = executeResponseDocumentJson.jobId;
                this._expirationDate = executeResponseDocumentJson.expirationDate;
            }
        }
        Object.defineProperty(ExecuteResponseDocument.prototype, "expirationDate", {
            get: function () {
                return this._expirationDate;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ExecuteResponseDocument.prototype, "lang", {
            get: function () {
                return this._lang;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ExecuteResponseDocument.prototype, "service", {
            get: function () {
                return this._service;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ExecuteResponseDocument.prototype, "version", {
            get: function () {
                return this._version;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ExecuteResponseDocument.prototype, "statusLocation", {
            get: function () {
                return this._statusLocation;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ExecuteResponseDocument.prototype, "serviceInstance", {
            get: function () {
                return this._serviceInstance;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ExecuteResponseDocument.prototype, "process", {
            get: function () {
                return this._process;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ExecuteResponseDocument.prototype, "status", {
            get: function () {
                return this._status;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ExecuteResponseDocument.prototype, "outputs", {
            get: function () {
                return this._outputs;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ExecuteResponseDocument.prototype, "jobId", {
            get: function () {
                return this._jobId;
            },
            enumerable: false,
            configurable: true
        });
        return ExecuteResponseDocument;
    }());

    var ExecuteResponseObject = /** @class */ (function () {
        function ExecuteResponseObject(executeResponseJson) {
            // type: string, serviceVersion: string, responseDocument: ExecuteResponseDocument
            this._type = executeResponseJson.type;
            this._serviceVersion = executeResponseJson.serviceVersion;
            this._responseDocument = new ExecuteResponseDocument(executeResponseJson.responseDocument);
        }
        Object.defineProperty(ExecuteResponseObject.prototype, "type", {
            get: function () {
                return this._type;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ExecuteResponseObject.prototype, "serviceVersion", {
            get: function () {
                return this._serviceVersion;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ExecuteResponseObject.prototype, "responseDocument", {
            get: function () {
                return this._responseDocument;
            },
            enumerable: false,
            configurable: true
        });
        return ExecuteResponseObject;
    }());

    var ExecuteResponse = /** @class */ (function () {
        function ExecuteResponse(executeResponseJson) {
            if (executeResponseJson != null) {
                this._resultDocument = executeResponseJson.responseDocument;
                this._executeResponse = new ExecuteResponseObject(executeResponseJson.executeResponse);
            }
        }
        Object.defineProperty(ExecuteResponse.prototype, "resultDocument", {
            get: function () {
                return this._resultDocument;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ExecuteResponse.prototype, "executeResponse", {
            get: function () {
                return this._executeResponse;
            },
            enumerable: false,
            configurable: true
        });
        return ExecuteResponse;
    }());

    var StatusResponseDocument = /** @class */ (function () {
        function StatusResponseDocument(statusResponseDocument) {
            if (statusResponseDocument != null) {
                this._jobId = statusResponseDocument.jobId;
                this._status = statusResponseDocument.status;
                this._expirationDate = statusResponseDocument.expirationDate;
                this._estimatedCompletion = statusResponseDocument.estimatedCompletion;
                this._nextPoll = statusResponseDocument.nextPoll;
                this._percentageCompleted = statusResponseDocument.percentageCompleted;
            }
        }
        Object.defineProperty(StatusResponseDocument.prototype, "jobId", {
            get: function () {
                return this._jobId;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(StatusResponseDocument.prototype, "status", {
            get: function () {
                return this._status;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(StatusResponseDocument.prototype, "expirationDate", {
            get: function () {
                return this._expirationDate;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(StatusResponseDocument.prototype, "estimatedCompletion", {
            get: function () {
                return this._estimatedCompletion;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(StatusResponseDocument.prototype, "nextPoll", {
            get: function () {
                return this._nextPoll;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(StatusResponseDocument.prototype, "percentageCompleted", {
            get: function () {
                return this._percentageCompleted;
            },
            enumerable: false,
            configurable: true
        });
        return StatusResponseDocument;
    }());

    var StatusResponse = /** @class */ (function () {
        function StatusResponse(getStatusResponse) {
            if (getStatusResponse != null) {
                this._type = getStatusResponse.type;
                this._serviceVersion = getStatusResponse.serviceVersion;
                this._responseDocument = new StatusResponseDocument(getStatusResponse.responseDocument);
            }
        }
        Object.defineProperty(StatusResponse.prototype, "type", {
            get: function () {
                return this._type;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(StatusResponse.prototype, "serviceVersion", {
            get: function () {
                return this._serviceVersion;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(StatusResponse.prototype, "responseDocument", {
            get: function () {
                return this._responseDocument;
            },
            enumerable: false,
            configurable: true
        });
        return StatusResponse;
    }());

    var ResultResponse = /** @class */ (function () {
        function ResultResponse(resultResponse) {
            if (resultResponse != null) {
                this._responseDocument = resultResponse.responseDocument;
                this._executeResponse = new ExecuteResponseObject(resultResponse.executeResponse);
            }
        }
        Object.defineProperty(ResultResponse.prototype, "responseDocument", {
            get: function () {
                return this._responseDocument;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ResultResponse.prototype, "executeResponse", {
            get: function () {
                return this._executeResponse;
            },
            enumerable: false,
            configurable: true
        });
        return ResultResponse;
    }());

    var WPS_VERSION_1 = '1.0.0';
    var WPS_VERSION_2 = '2.0.0';
    var WpsNgService = /** @class */ (function () {
        function WpsNgService(_version, _url) {
            this._version = _version;
            this._url = _url;
            // Url Check
            if (!WpsNgService.isValidUrl(_url)) {
                throw new Error('Url ' + _url + ' is not valid.');
            }
            // Version Check
            this._version = (_version === WPS_VERSION_2) ? WPS_VERSION_2 : WPS_VERSION_1;
            var setting = new Settings(_url, _version);
            this.wpsServiceJS = new WpsService(setting);
        }
        /**
         * Utility Function to check URL Validity
         */
        WpsNgService.isValidUrl = function (url) {
            try {
                // tslint:disable-next-line:no-unused-expression
                new URL(url);
            }
            catch (_) {
                return false;
            }
            return true;
        };
        /**
         * allowed values : "1.0.0" or "2.0.0"
         *
         * requires Constant.js
         */
        WpsNgService.prototype.setVersion = function (version) {
            if (version === void 0) { version = WPS_VERSION_2; }
            this._version = (version === WPS_VERSION_2) ? WPS_VERSION_2 : WPS_VERSION_1;
        };
        /**
         * allowed values : "1.0.0" or "2.0.0"
         *
         * requires Constant.js
         */
        WpsNgService.prototype.setUrl = function (url) {
            if (!WpsNgService.isValidUrl(url)) {
                throw new Error('Url ' + url + ' is not valid.');
            }
            this._url = url;
        };
        Object.defineProperty(WpsNgService.prototype, "version", {
            get: function () {
                return this._version;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(WpsNgService.prototype, "url", {
            get: function () {
                return this._url;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * getCapabilities via HTTP GET
         *
         * @callbackFunction is triggered on success-event of JQuery.ajax method
         */
        WpsNgService.prototype.getCapabilitiesGET = function (callback) {
            var capabilitiesResponse;
            this.wpsServiceJS.getCapabilities_GET(function (response) {
                if (response.textStatus === 'error') {
                    throw new Error(response.errorThrown);
                }
                capabilitiesResponse = new CapabilitiesResponse(response);
                callback(capabilitiesResponse);
            });
        };
        /**
         * getCapabilities via HTTP POST
         *
         * @callbackFunction is triggered on success-event of JQuery.ajax method.
         *                   Takes the response object as argument
         */
        WpsNgService.prototype.getCapabilitiesPOST = function (callback) {
            var capabilitiesResponse;
            this.wpsServiceJS.getCapabilities_POST(function (response) {
                if (response.textStatus === 'error') {
                    throw new Error(response.errorThrown);
                }
                capabilitiesResponse = new CapabilitiesResponse(response);
                callback(capabilitiesResponse);
            });
        };
        /**
         * process description via HTTP GET
         *
         * @callbackFunction is triggered on success-event of JQuery.ajax method.
         *                   Takes the response object as argument
         * @processIdentifier the identifier of the process
         */
        WpsNgService.prototype.processDescriptionGet = function (processIdentifier, callback) {
            var processDescriptionResponse;
            this.wpsServiceJS.describeProcess_GET(function (response) {
                if (response.textStatus === 'error') {
                    throw new Error(response.errorThrown);
                }
                processDescriptionResponse = new ProcessDescriptionResponse(response);
                callback(processDescriptionResponse);
            }, processIdentifier);
        };
        /**
         * process description via HTTP POST
         *
         * @callbackFunction is triggered on success-event of JQuery.ajax method.
         *                   Takes the response object as argument
         * @processIdentifier the identifier of the process
         */
        WpsNgService.prototype.processDescriptionPost = function (processIdentifier, callback) {
            var processDescriptionResponse;
            this.wpsServiceJS.describeProcess_POST(function (response) {
                if (response.textStatus === 'error') {
                    throw new Error(response.errorThrown);
                }
                processDescriptionResponse = new ProcessDescriptionResponse(response);
                callback(processDescriptionResponse);
            }, processIdentifier);
        };
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
        WpsNgService.prototype.execute = function (callback, processIdentifier, responseFormat, executionMode, lineage, inputs, outputs) {
            var executeResponse;
            this.wpsServiceJS.execute(function (response) {
                // Check for error
                if (response.textStatus === 'error') {
                    throw new Error(response.errorThrown);
                }
                executeResponse = response;
                callback(new ExecuteResponse(executeResponse));
            }, processIdentifier, responseFormat, executionMode, lineage, inputs, outputs);
        };
        /**
         * WPS 2.0 getStatus operation to retrieve the status of an executed job
         *
         * Not usable with WPS 1.0
         *
         * @callbackFunction a callback function that will be triggered with the
         *                   parsed StatusInfo document as argument
         * @jobId the ID of the asynchronously executed job
         */
        WpsNgService.prototype.getStatus_WPS_2_0 = function (callback, jobId) {
            var getStatusResponse;
            this.wpsServiceJS.getStatus_WPS_2_0(function (response) {
                if (response.textStatus === 'error') {
                    throw new Error(response.errorThrown);
                }
                getStatusResponse = new StatusResponse(response.executeResponse);
                callback(getStatusResponse);
            }, jobId);
        };
        /**
         * WPS 2.0 getResult operation to retrieve the Result of an executed job
         *
         * Not usable with WPS 1.0
         *
         * @callbackFunction a callback function that will be triggered with the
         *                   parsed StatusInfo document as argument
         * @jobId the ID of the asynchronously executed job
         */
        WpsNgService.prototype.getResult_WPS_2_0 = function (callback, jobId) {
            var getResultResponse;
            this.wpsServiceJS.getResult_WPS_2_0(function (response) {
                if (response.textStatus === 'error') {
                    throw new Error(response.errorThrown);
                }
                getResultResponse = new ResultResponse(response);
                callback(getResultResponse);
            }, jobId);
        };
        /**
         * Only important for WPS 1.0
         *
         * @callbackFunction a callback function that will be triggered with the
         *                   parsed executeResponse as argument
         * @storedExecuteResponseLocation the url, where the execute response
         *                                document is located / can be retrieved
         *                                from
         */
        WpsNgService.prototype.parseStoredExecuteResponse_WPS_1_0 = function (callback, storedExecuteResponseLocation) {
            var executeResponse;
            this.wpsServiceJS.parseStoredExecuteResponse_WPS_1_0(function (response) {
                if (response.textStatus === 'error') {
                    throw new Error(response.errorThrown);
                }
                executeResponse = new ExecuteResponse(response);
                callback(executeResponse);
            }, storedExecuteResponseLocation);
        };
        WpsNgService.prototype.getXmlRequestExecuteProcess = function (processIdentifier, responseFormat, executionMode, lineage, inputs, outputs) {
            return this.wpsServiceJS.getXmlRequestExecuteProcess(processIdentifier, responseFormat, executionMode, lineage, inputs, outputs);
        };
        return WpsNgService;
    }());

    var WpsNgComponent = /** @class */ (function () {
        function WpsNgComponent() {
        }
        WpsNgComponent.prototype.ngOnInit = function () {
        };
        return WpsNgComponent;
    }());
    WpsNgComponent.ɵfac = function WpsNgComponent_Factory(t) { return new (t || WpsNgComponent)(); };
    WpsNgComponent.ɵcmp = i0.ɵɵdefineComponent({ type: WpsNgComponent, selectors: [["lib-wps-ng"]], decls: 0, vars: 0, template: function WpsNgComponent_Template(rf, ctx) { }, encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(WpsNgComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'lib-wps-ng',
                        template: "",
                        styles: []
                    }]
            }], function () { return []; }, null);
    })();

    var WpsNgModule = /** @class */ (function () {
        function WpsNgModule() {
        }
        return WpsNgModule;
    }());
    WpsNgModule.ɵmod = i0.ɵɵdefineNgModule({ type: WpsNgModule });
    WpsNgModule.ɵinj = i0.ɵɵdefineInjector({ factory: function WpsNgModule_Factory(t) { return new (t || WpsNgModule)(); }, imports: [[]] });
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(WpsNgModule, { declarations: [WpsNgComponent], exports: [WpsNgComponent] }); })();
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(WpsNgModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: [WpsNgComponent],
                        imports: [],
                        exports: [WpsNgComponent]
                    }]
            }], null, null);
    })();

    var CapabilitiesResponseDocument = /** @class */ (function () {
        function CapabilitiesResponseDocument(responseDocumentJson) {
            if (responseDocumentJson != null) {
                this._location = responseDocumentJson.location;
            }
        }
        Object.defineProperty(CapabilitiesResponseDocument.prototype, "location", {
            get: function () {
                return this._location;
            },
            enumerable: false,
            configurable: true
        });
        return CapabilitiesResponseDocument;
    }());

    var BBoxDataInput = /** @class */ (function () {
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
        function BBoxDataInput(identifier, crs, dimension, lowerCorner, upperCorner) {
            this.type = 'bbox';
            this.identifier = identifier;
            this.crs = crs;
            this.dimension = dimension || undefined;
            this.lowerCorner = lowerCorner;
            this.upperCorner = upperCorner;
        }
        return BBoxDataInput;
    }());

    var ComplexDataInput = /** @class */ (function () {
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
        function ComplexDataInput(identifier, mimeType, schema, encoding, asReference, complexPayload) {
            if (asReference === void 0) { asReference = false; }
            this.type = 'complex';
            this.identifier = identifier;
            this.mimeType = mimeType;
            this.schema = schema;
            this.encoding = encoding;
            this.asReference = asReference;
            this.complexPayload = complexPayload;
        }
        return ComplexDataInput;
    }());

    var LiteralDataInput = /** @class */ (function () {
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
        function LiteralDataInput(identifier, dataType, uom, value) {
            this.type = 'literal';
            this.identifier = identifier;
            this.dataType = dataType;
            this.uom = uom;
            this.value = value;
        }
        return LiteralDataInput;
    }());

    /*
     * Public API Surface of wps-ng
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.Address = Address;
    exports.BBoxDataInput = BBoxDataInput;
    exports.BBoxDataOutput = BBoxDataOutput;
    exports.Capabilities = Capabilities;
    exports.CapabilitiesResponse = CapabilitiesResponse;
    exports.CapabilitiesResponseDocument = CapabilitiesResponseDocument;
    exports.ComplexData = ComplexData;
    exports.ComplexDataInput = ComplexDataInput;
    exports.ComplexDataOutput = ComplexDataOutput;
    exports.ContactInfo = ContactInfo;
    exports.DCP = DCP;
    exports.DataType = DataType;
    exports.ExecuteOutput = ExecuteOutput;
    exports.ExecuteResponse = ExecuteResponse;
    exports.ExecuteResponseData = ExecuteResponseData;
    exports.ExecuteResponseDocument = ExecuteResponseDocument;
    exports.ExecuteResponseObject = ExecuteResponseObject;
    exports.Format = Format;
    exports.HTTP = HTTP;
    exports.Input = Input;
    exports.LiteralData = LiteralData;
    exports.LiteralDataDomains = LiteralDataDomains;
    exports.LiteralDataInput = LiteralDataInput;
    exports.LiteralDataOutput = LiteralDataOutput;
    exports.Operation = Operation;
    exports.Output = Output;
    exports.Process = Process;
    exports.ProcessDescriptionResponse = ProcessDescriptionResponse;
    exports.ProcessDetails = ProcessDetails;
    exports.ResultResponse = ResultResponse;
    exports.ServiceContact = ServiceContact;
    exports.ServiceIdentification = ServiceIdentification;
    exports.ServiceProvider = ServiceProvider;
    exports.Settings = Settings;
    exports.Status = Status;
    exports.StatusResponse = StatusResponse;
    exports.WpsNgComponent = WpsNgComponent;
    exports.WpsNgModule = WpsNgModule;
    exports.WpsNgService = WpsNgService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=wps-ng.umd.js.map
