import { CapabilitiesResponse } from '../model/capabilities/capabilities-response';
import { ProcessDescriptionResponse } from '../model/process.description/process-description-response';
import { ExecuteResponse } from '../model/execute.process/response/execute-response';
import { DataInput } from '../model/execute.process/request/input/data-input';
import { DataOutput } from '../model/execute.process/request/output/data-output';
import { ResultResponse } from '../model/get.result/result-response';
export declare class WpsNgService {
    private _version;
    private _url;
    private wpsServiceJS;
    constructor(_version: string, _url: string);
    /**
     * Utility Function to check URL Validity
     */
    private static isValidUrl;
    /**
     * allowed values : "1.0.0" or "2.0.0"
     *
     * requires Constant.js
     */
    setVersion(version?: string): void;
    /**
     * allowed values : "1.0.0" or "2.0.0"
     *
     * requires Constant.js
     */
    setUrl(url: string): void;
    get version(): string;
    get url(): string;
    /**
     * getCapabilities via HTTP GET
     *
     * @callbackFunction is triggered on success-event of JQuery.ajax method
     */
    getCapabilitiesGET(callback: (response: CapabilitiesResponse) => void): void;
    /**
     * getCapabilities via HTTP POST
     *
     * @callbackFunction is triggered on success-event of JQuery.ajax method.
     *                   Takes the response object as argument
     */
    getCapabilitiesPOST(callback: (capabilitiesResponse: CapabilitiesResponse) => void): void;
    /**
     * process description via HTTP GET
     *
     * @callbackFunction is triggered on success-event of JQuery.ajax method.
     *                   Takes the response object as argument
     * @processIdentifier the identifier of the process
     */
    processDescriptionGet(processIdentifier: string, callback: (response: ProcessDescriptionResponse) => void): void;
    /**
     * process description via HTTP POST
     *
     * @callbackFunction is triggered on success-event of JQuery.ajax method.
     *                   Takes the response object as argument
     * @processIdentifier the identifier of the process
     */
    processDescriptionPost(processIdentifier: string, callback: (response: ProcessDescriptionResponse) => void): void;
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
    execute(callback: (response: ExecuteResponse) => void, processIdentifier: string, responseFormat: string, executionMode: string, lineage: boolean, inputs: Array<DataInput>, outputs: Array<DataOutput>): void;
    /**
     * WPS 2.0 getStatus operation to retrieve the status of an executed job
     *
     * Not usable with WPS 1.0
     *
     * @callbackFunction a callback function that will be triggered with the
     *                   parsed StatusInfo document as argument
     * @jobId the ID of the asynchronously executed job
     */
    getStatus_WPS_2_0(callback: (StatusResponse: any) => void, jobId: string): void;
    /**
     * WPS 2.0 getResult operation to retrieve the Result of an executed job
     *
     * Not usable with WPS 1.0
     *
     * @callbackFunction a callback function that will be triggered with the
     *                   parsed StatusInfo document as argument
     * @jobId the ID of the asynchronously executed job
     */
    getResult_WPS_2_0(callback: (resultResponse: ResultResponse) => void, jobId: string): void;
    /**
     * Only important for WPS 1.0
     *
     * @callbackFunction a callback function that will be triggered with the
     *                   parsed executeResponse as argument
     * @storedExecuteResponseLocation the url, where the execute response
     *                                document is located / can be retrieved
     *                                from
     */
    parseStoredExecuteResponse_WPS_1_0(callback: (response: ExecuteResponse) => void, storedExecuteResponseLocation: string): void;
    getXmlRequestExecuteProcess(processIdentifier: string, responseFormat: string, executionMode: string, lineage: boolean, inputs: Array<DataInput>, outputs: Array<DataOutput>): string;
}
