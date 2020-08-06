import { Settings } from '../model/settings';
import { CapabilitiesResponse } from '../model/capabilities/capabilities-response';
import { ProcessDescriptionResponse } from '../model/process.description/process-description-response';
import { ExecuteResponse } from '../model/execute.process/response/execute-response';
import { StatusResponse } from '../model/get.status/status-response';
import { ResultResponse } from '../model/get.result/result-response';
const WPS_VERSION_1 = '1.0.0';
const WPS_VERSION_2 = '2.0.0';
export class WpsNgService {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid3BzLW5nLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy93cHMtbmcvc3JjL2xpYi93cHMtbmcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDM0MsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0sNkNBQTZDLENBQUM7QUFDakYsT0FBTyxFQUFDLDBCQUEwQixFQUFDLE1BQU0sMkRBQTJELENBQUM7QUFDckcsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLG9EQUFvRCxDQUFDO0FBR25GLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSxxQ0FBcUMsQ0FBQztBQUNuRSxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0scUNBQXFDLENBQUM7QUFFbkUsTUFBTSxhQUFhLEdBQUcsT0FBTyxDQUFDO0FBQzlCLE1BQU0sYUFBYSxHQUFHLE9BQU8sQ0FBQztBQUk5QixNQUFNLE9BQU8sWUFBWTtJQUV2QixZQUFvQixRQUFnQixFQUFXLElBQVk7UUFBdkMsYUFBUSxHQUFSLFFBQVEsQ0FBUTtRQUFXLFNBQUksR0FBSixJQUFJLENBQVE7UUFDekQsWUFBWTtRQUNaLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ2xDLE1BQU0sSUFBSSxLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksR0FBRyxnQkFBZ0IsQ0FBQyxDQUFDO1NBQ25EO1FBQ0QsZ0JBQWdCO1FBQ2hCLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxRQUFRLEtBQUssYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDO1FBRTdFLE1BQU0sT0FBTyxHQUFHLElBQUksUUFBUSxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUks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QixFQUFFLGNBQXNCLEVBQUUsYUFBcUIsRUFDeEUsT0FBZ0IsRUFBRSxNQUF3QixFQUFFLE9BQTBCO1FBQ2hHLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQywyQkFBMkIsQ0FBRSxpQkFBaUIsRUFBRSxjQUFjLEVBQ3JGLGFBQWEsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzdDLENBQUM7Q0FFRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7U2V0dGluZ3N9IGZyb20gJy4uL21vZGVsL3NldHRpbmdzJztcbmltcG9ydCB7Q2FwYWJpbGl0aWVzUmVzcG9uc2V9IGZyb20gJy4uL21vZGVsL2NhcGFiaWxpdGllcy9jYXBhYmlsaXRpZXMtcmVzcG9uc2UnO1xuaW1wb3J0IHtQcm9jZXNzRGVzY3JpcHRpb25SZXNwb25zZX0gZnJvbSAnLi4vbW9kZWwvcHJvY2Vzcy5kZXNjcmlwdGlvbi9wcm9jZXNzLWRlc2NyaXB0aW9uLXJlc3BvbnNlJztcbmltcG9ydCB7RXhlY3V0ZVJlc3BvbnNlfSBmcm9tICcuLi9tb2RlbC9leGVjdXRlLnByb2Nlc3MvcmVzcG9uc2UvZXhlY3V0ZS1yZXNwb25zZSc7XG5pbXBvcnQge0RhdGFJbnB1dH0gZnJvbSAnLi4vbW9kZWwvZXhlY3V0ZS5wcm9jZXNzL3JlcXVlc3QvaW5wdXQvZGF0YS1pbnB1dCc7XG5pbXBvcnQge0RhdGFPdXRwdXR9IGZyb20gJy4uL21vZGVsL2V4ZWN1dGUucHJvY2Vzcy9yZXF1ZXN0L291dHB1dC9kYXRhLW91dHB1dCc7XG5pbXBvcnQge1N0YXR1c1Jlc3BvbnNlfSBmcm9tICcuLi9tb2RlbC9nZXQuc3RhdHVzL3N0YXR1cy1yZXNwb25zZSc7XG5pbXBvcnQge1Jlc3VsdFJlc3BvbnNlfSBmcm9tICcuLi9tb2RlbC9nZXQucmVzdWx0L3Jlc3VsdC1yZXNwb25zZSc7XG5cbmNvbnN0IFdQU19WRVJTSU9OXzEgPSAnMS4wLjAnO1xuY29uc3QgV1BTX1ZFUlNJT05fMiA9ICcyLjAuMCc7XG5kZWNsYXJlIHZhciBXcHNTZXJ2aWNlOiBhbnk7XG5cblxuZXhwb3J0IGNsYXNzIFdwc05nU2VydmljZSB7XG4gIHByaXZhdGUgd3BzU2VydmljZUpTOiBhbnk7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3ZlcnNpb246IHN0cmluZyAsIHByaXZhdGUgX3VybDogc3RyaW5nKSB7XG4gICAgLy8gVXJsIENoZWNrXG4gICAgaWYgKCFXcHNOZ1NlcnZpY2UuaXNWYWxpZFVybChfdXJsKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdVcmwgJyArIF91cmwgKyAnIGlzIG5vdCB2YWxpZC4nKTtcbiAgICB9XG4gICAgLy8gVmVyc2lvbiBDaGVja1xuICAgIHRoaXMuX3ZlcnNpb24gPSAoX3ZlcnNpb24gPT09IFdQU19WRVJTSU9OXzIpID8gV1BTX1ZFUlNJT05fMiA6IFdQU19WRVJTSU9OXzE7XG5cbiAgICBjb25zdCBzZXR0aW5nID0gbmV3IFNldHRpbmdzKF91cmwsIF92ZXJzaW9uKTtcbiAgICB0aGlzLndwc1NlcnZpY2VKUyA9IG5ldyBXcHNTZXJ2aWNlKHNldHRpbmcpO1xuICB9XG5cbiAgLyoqXG4gICAqIFV0aWxpdHkgRnVuY3Rpb24gdG8gY2hlY2sgVVJMIFZhbGlkaXR5XG4gICAqL1xuICBwcml2YXRlIHN0YXRpYyBpc1ZhbGlkVXJsKHVybDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgdHJ5IHtcbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby11bnVzZWQtZXhwcmVzc2lvblxuICAgICAgbmV3IFVSTCh1cmwpO1xuICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuXG4gIC8qKlxuICAgKiBhbGxvd2VkIHZhbHVlcyA6IFwiMS4wLjBcIiBvciBcIjIuMC4wXCJcbiAgICpcbiAgICogcmVxdWlyZXMgQ29uc3RhbnQuanNcbiAgICovXG4gIHNldFZlcnNpb24odmVyc2lvbjogc3RyaW5nID0gV1BTX1ZFUlNJT05fMik6IHZvaWQge1xuICAgIHRoaXMuX3ZlcnNpb24gPSAodmVyc2lvbiA9PT0gV1BTX1ZFUlNJT05fMikgPyBXUFNfVkVSU0lPTl8yIDogV1BTX1ZFUlNJT05fMTtcbiAgfVxuXG4gIC8qKlxuICAgKiBhbGxvd2VkIHZhbHVlcyA6IFwiMS4wLjBcIiBvciBcIjIuMC4wXCJcbiAgICpcbiAgICogcmVxdWlyZXMgQ29uc3RhbnQuanNcbiAgICovXG4gIHNldFVybCh1cmw6IHN0cmluZyk6IHZvaWR7XG4gICAgaWYgKCFXcHNOZ1NlcnZpY2UuaXNWYWxpZFVybCh1cmwpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VybCAnICsgdXJsICsgJyBpcyBub3QgdmFsaWQuJyk7XG4gICAgfVxuICAgIHRoaXMuX3VybCA9IHVybDtcbiAgfVxuXG5cbiAgZ2V0IHZlcnNpb24oKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fdmVyc2lvbjtcbiAgfVxuXG4gIGdldCB1cmwoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fdXJsO1xuICB9XG5cbiAgLyoqXG4gICAqIGdldENhcGFiaWxpdGllcyB2aWEgSFRUUCBHRVRcbiAgICpcbiAgICogQGNhbGxiYWNrRnVuY3Rpb24gaXMgdHJpZ2dlcmVkIG9uIHN1Y2Nlc3MtZXZlbnQgb2YgSlF1ZXJ5LmFqYXggbWV0aG9kXG4gICAqL1xuICBnZXRDYXBhYmlsaXRpZXNHRVQoY2FsbGJhY2s6IChyZXNwb25zZTogQ2FwYWJpbGl0aWVzUmVzcG9uc2UpID0+IHZvaWQpOiB2b2lkIHtcbiAgICBsZXQgY2FwYWJpbGl0aWVzUmVzcG9uc2U6IENhcGFiaWxpdGllc1Jlc3BvbnNlO1xuICAgIHRoaXMud3BzU2VydmljZUpTLmdldENhcGFiaWxpdGllc19HRVQoKHJlc3BvbnNlOiBhbnkpID0+IHtcbiAgICAgIGlmIChyZXNwb25zZS50ZXh0U3RhdHVzID09PSAnZXJyb3InKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihyZXNwb25zZS5lcnJvclRocm93bik7XG4gICAgICB9XG4gICAgICBjYXBhYmlsaXRpZXNSZXNwb25zZSA9IG5ldyBDYXBhYmlsaXRpZXNSZXNwb25zZShyZXNwb25zZSk7XG4gICAgICBjYWxsYmFjayhjYXBhYmlsaXRpZXNSZXNwb25zZSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogZ2V0Q2FwYWJpbGl0aWVzIHZpYSBIVFRQIFBPU1RcbiAgICpcbiAgICogQGNhbGxiYWNrRnVuY3Rpb24gaXMgdHJpZ2dlcmVkIG9uIHN1Y2Nlc3MtZXZlbnQgb2YgSlF1ZXJ5LmFqYXggbWV0aG9kLlxuICAgKiAgICAgICAgICAgICAgICAgICBUYWtlcyB0aGUgcmVzcG9uc2Ugb2JqZWN0IGFzIGFyZ3VtZW50XG4gICAqL1xuICBnZXRDYXBhYmlsaXRpZXNQT1NUKGNhbGxiYWNrOiAoY2FwYWJpbGl0aWVzUmVzcG9uc2U6IENhcGFiaWxpdGllc1Jlc3BvbnNlKSA9PiB2b2lkKSB7XG4gICAgbGV0IGNhcGFiaWxpdGllc1Jlc3BvbnNlOiBDYXBhYmlsaXRpZXNSZXNwb25zZTtcbiAgICB0aGlzLndwc1NlcnZpY2VKUy5nZXRDYXBhYmlsaXRpZXNfUE9TVCgocmVzcG9uc2U6IGFueSkgPT4ge1xuICAgICAgaWYgKHJlc3BvbnNlLnRleHRTdGF0dXMgPT09ICdlcnJvcicpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKHJlc3BvbnNlLmVycm9yVGhyb3duKTtcbiAgICAgIH1cbiAgICAgIGNhcGFiaWxpdGllc1Jlc3BvbnNlID0gbmV3IENhcGFiaWxpdGllc1Jlc3BvbnNlKHJlc3BvbnNlKTtcbiAgICAgIGNhbGxiYWNrKGNhcGFiaWxpdGllc1Jlc3BvbnNlKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBwcm9jZXNzIGRlc2NyaXB0aW9uIHZpYSBIVFRQIEdFVFxuICAgKlxuICAgKiBAY2FsbGJhY2tGdW5jdGlvbiBpcyB0cmlnZ2VyZWQgb24gc3VjY2Vzcy1ldmVudCBvZiBKUXVlcnkuYWpheCBtZXRob2QuXG4gICAqICAgICAgICAgICAgICAgICAgIFRha2VzIHRoZSByZXNwb25zZSBvYmplY3QgYXMgYXJndW1lbnRcbiAgICogQHByb2Nlc3NJZGVudGlmaWVyIHRoZSBpZGVudGlmaWVyIG9mIHRoZSBwcm9jZXNzXG4gICAqL1xuICBwcm9jZXNzRGVzY3JpcHRpb25HZXQoIHByb2Nlc3NJZGVudGlmaWVyOiBzdHJpbmcgLCBjYWxsYmFjazogKHJlc3BvbnNlOiBQcm9jZXNzRGVzY3JpcHRpb25SZXNwb25zZSkgPT4gdm9pZCkge1xuICAgIGxldCBwcm9jZXNzRGVzY3JpcHRpb25SZXNwb25zZTogUHJvY2Vzc0Rlc2NyaXB0aW9uUmVzcG9uc2U7XG4gICAgdGhpcy53cHNTZXJ2aWNlSlMuZGVzY3JpYmVQcm9jZXNzX0dFVCggKHJlc3BvbnNlOiBhbnkpID0+IHtcbiAgICAgIGlmIChyZXNwb25zZS50ZXh0U3RhdHVzID09PSAnZXJyb3InKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihyZXNwb25zZS5lcnJvclRocm93bik7XG4gICAgICB9XG4gICAgICBwcm9jZXNzRGVzY3JpcHRpb25SZXNwb25zZSA9IG5ldyBQcm9jZXNzRGVzY3JpcHRpb25SZXNwb25zZShyZXNwb25zZSk7XG4gICAgICBjYWxsYmFjayhwcm9jZXNzRGVzY3JpcHRpb25SZXNwb25zZSk7XG4gICAgfSwgcHJvY2Vzc0lkZW50aWZpZXIpO1xuICB9XG5cbiAgLyoqXG4gICAqIHByb2Nlc3MgZGVzY3JpcHRpb24gdmlhIEhUVFAgUE9TVFxuICAgKlxuICAgKiBAY2FsbGJhY2tGdW5jdGlvbiBpcyB0cmlnZ2VyZWQgb24gc3VjY2Vzcy1ldmVudCBvZiBKUXVlcnkuYWpheCBtZXRob2QuXG4gICAqICAgICAgICAgICAgICAgICAgIFRha2VzIHRoZSByZXNwb25zZSBvYmplY3QgYXMgYXJndW1lbnRcbiAgICogQHByb2Nlc3NJZGVudGlmaWVyIHRoZSBpZGVudGlmaWVyIG9mIHRoZSBwcm9jZXNzXG4gICAqL1xuICBwcm9jZXNzRGVzY3JpcHRpb25Qb3N0KCBwcm9jZXNzSWRlbnRpZmllcjogc3RyaW5nICwgY2FsbGJhY2s6IChyZXNwb25zZTogUHJvY2Vzc0Rlc2NyaXB0aW9uUmVzcG9uc2UpID0+IHZvaWQpIHtcbiAgICBsZXQgcHJvY2Vzc0Rlc2NyaXB0aW9uUmVzcG9uc2U6IFByb2Nlc3NEZXNjcmlwdGlvblJlc3BvbnNlO1xuICAgIHRoaXMud3BzU2VydmljZUpTLmRlc2NyaWJlUHJvY2Vzc19QT1NUKCAocmVzcG9uc2U6IGFueSkgPT4ge1xuICAgICAgaWYgKHJlc3BvbnNlLnRleHRTdGF0dXMgPT09ICdlcnJvcicpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKHJlc3BvbnNlLmVycm9yVGhyb3duKTtcbiAgICAgIH1cbiAgICAgIHByb2Nlc3NEZXNjcmlwdGlvblJlc3BvbnNlID0gbmV3IFByb2Nlc3NEZXNjcmlwdGlvblJlc3BvbnNlKHJlc3BvbnNlKTtcbiAgICAgIGNhbGxiYWNrKHByb2Nlc3NEZXNjcmlwdGlvblJlc3BvbnNlKTtcbiAgICB9LCBwcm9jZXNzSWRlbnRpZmllcik7XG4gIH1cblxuXG4gIC8qKlxuICAgKiBXUFMgZXhlY3V0ZSByZXF1ZXN0IHZpYSBIVFRQIFBPU1RcbiAgICpcbiAgICogQGNhbGxiYWNrRnVuY3Rpb24gaXMgdHJpZ2dlcmVkIG9uIHN1Y2Nlc3MtZXZlbnQgb2YgSlF1ZXJ5LmFqYXggbWV0aG9kLlxuICAgKiAgICAgICAgICAgICAgICAgICBUYWtlcyB0aGUgcmVzcG9uc2Ugb2JqZWN0IGFzIGFyZ3VtZW50XG4gICAqIEBwcm9jZXNzSWRlbnRpZmllciB0aGUgaWRlbnRpZmllciBvZiB0aGUgcHJvY2Vzc1xuICAgKiBAcmVzcG9uc2VGb3JtYXQgZWl0aGVyIFwicmF3XCIgb3IgXCJkb2N1bWVudFwiLCBkZWZhdWx0IGlzIFwiZG9jdW1lbnRcIlxuICAgKiBAZXhlY3V0aW9uTW9kZSBlaXRoZXIgXCJzeW5jXCIgb3IgXCJhc3luY1wiO1xuICAgKiBAbGluZWFnZSBvbmx5IHJlbGV2YW50IGZvciBXUFMgMS4wOyBib29sZWFuLCBpZiBcInRydWVcIiB0aGVuIHJldHVybmVkXG4gICAqICAgICAgICAgIHJlc3BvbnNlIHdpbGwgaW5jbHVkZSBvcmlnaW5hbCBpbnB1dCBhbmQgb3V0cHV0IGRlZmluaXRpb25cbiAgICogQGlucHV0cyBhbiBhcnJheSBvZiBuZWVkZWQgSW5wdXQgb2JqZWN0cywgdXNlIEpTLW9iamVjdCBJbnB1dEdlbmVyYXRvciB0b1xuICAgKiAgICAgICAgIGNyZWF0ZSBpbnB1dHNcbiAgICogQG91dHB1dHMgYW4gYXJyYXkgb2YgcmVxdWVzdGVkIE91dHB1dCBvYmplY3RzLCB1c2UgSlMtb2JqZWN0XG4gICAqICAgICAgICAgIE91dHB1dEdlbmVyYXRvciB0byBjcmVhdGUgaW5wdXRzXG4gICAqL1xuXG4gIGV4ZWN1dGUoY2FsbGJhY2s6IChyZXNwb25zZTogRXhlY3V0ZVJlc3BvbnNlKSA9PiB2b2lkICwgcHJvY2Vzc0lkZW50aWZpZXI6IHN0cmluZywgcmVzcG9uc2VGb3JtYXQ6IHN0cmluZywgZXhlY3V0aW9uTW9kZTogc3RyaW5nLFxuICAgICAgICAgIGxpbmVhZ2U6IGJvb2xlYW4sIGlucHV0czogQXJyYXk8RGF0YUlucHV0Piwgb3V0cHV0czogQXJyYXk8RGF0YU91dHB1dD4pIHtcbiAgICBsZXQgZXhlY3V0ZVJlc3BvbnNlO1xuICAgIHRoaXMud3BzU2VydmljZUpTLmV4ZWN1dGUoIChyZXNwb25zZTogYW55KSA9PiB7XG4gICAgICAvLyBDaGVjayBmb3IgZXJyb3JcbiAgICAgIGlmIChyZXNwb25zZS50ZXh0U3RhdHVzID09PSAnZXJyb3InKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihyZXNwb25zZS5lcnJvclRocm93bik7XG4gICAgICB9XG4gICAgICBleGVjdXRlUmVzcG9uc2UgPSByZXNwb25zZTtcbiAgICAgIGNhbGxiYWNrKG5ldyBFeGVjdXRlUmVzcG9uc2UoZXhlY3V0ZVJlc3BvbnNlKSk7XG4gICAgfSwgcHJvY2Vzc0lkZW50aWZpZXIsIHJlc3BvbnNlRm9ybWF0LCBleGVjdXRpb25Nb2RlLCBsaW5lYWdlLCBpbnB1dHMsIG91dHB1dHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFdQUyAyLjAgZ2V0U3RhdHVzIG9wZXJhdGlvbiB0byByZXRyaWV2ZSB0aGUgc3RhdHVzIG9mIGFuIGV4ZWN1dGVkIGpvYlxuICAgKlxuICAgKiBOb3QgdXNhYmxlIHdpdGggV1BTIDEuMFxuICAgKlxuICAgKiBAY2FsbGJhY2tGdW5jdGlvbiBhIGNhbGxiYWNrIGZ1bmN0aW9uIHRoYXQgd2lsbCBiZSB0cmlnZ2VyZWQgd2l0aCB0aGVcbiAgICogICAgICAgICAgICAgICAgICAgcGFyc2VkIFN0YXR1c0luZm8gZG9jdW1lbnQgYXMgYXJndW1lbnRcbiAgICogQGpvYklkIHRoZSBJRCBvZiB0aGUgYXN5bmNocm9ub3VzbHkgZXhlY3V0ZWQgam9iXG4gICAqL1xuICBnZXRTdGF0dXNfV1BTXzJfMChjYWxsYmFjazogKFN0YXR1c1Jlc3BvbnNlKSA9PiB2b2lkLCBqb2JJZDogc3RyaW5nKSB7XG4gICAgbGV0IGdldFN0YXR1c1Jlc3BvbnNlO1xuICAgIHRoaXMud3BzU2VydmljZUpTLmdldFN0YXR1c19XUFNfMl8wKCAocmVzcG9uc2U6IGFueSkgPT4ge1xuICAgICAgaWYgKHJlc3BvbnNlLnRleHRTdGF0dXMgPT09ICdlcnJvcicpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKHJlc3BvbnNlLmVycm9yVGhyb3duKTtcbiAgICAgIH1cbiAgICAgIGdldFN0YXR1c1Jlc3BvbnNlID0gbmV3IFN0YXR1c1Jlc3BvbnNlKHJlc3BvbnNlLmV4ZWN1dGVSZXNwb25zZSk7XG4gICAgICBjYWxsYmFjayhnZXRTdGF0dXNSZXNwb25zZSk7XG4gICAgfSwgam9iSWQpO1xuICB9XG5cbiAgLyoqXG4gICAqIFdQUyAyLjAgZ2V0UmVzdWx0IG9wZXJhdGlvbiB0byByZXRyaWV2ZSB0aGUgUmVzdWx0IG9mIGFuIGV4ZWN1dGVkIGpvYlxuICAgKlxuICAgKiBOb3QgdXNhYmxlIHdpdGggV1BTIDEuMFxuICAgKlxuICAgKiBAY2FsbGJhY2tGdW5jdGlvbiBhIGNhbGxiYWNrIGZ1bmN0aW9uIHRoYXQgd2lsbCBiZSB0cmlnZ2VyZWQgd2l0aCB0aGVcbiAgICogICAgICAgICAgICAgICAgICAgcGFyc2VkIFN0YXR1c0luZm8gZG9jdW1lbnQgYXMgYXJndW1lbnRcbiAgICogQGpvYklkIHRoZSBJRCBvZiB0aGUgYXN5bmNocm9ub3VzbHkgZXhlY3V0ZWQgam9iXG4gICAqL1xuICBnZXRSZXN1bHRfV1BTXzJfMChjYWxsYmFjazogKHJlc3VsdFJlc3BvbnNlOiBSZXN1bHRSZXNwb25zZSkgPT4gdm9pZCwgam9iSWQ6IHN0cmluZykge1xuICAgIGxldCBnZXRSZXN1bHRSZXNwb25zZTogUmVzdWx0UmVzcG9uc2U7XG4gICAgdGhpcy53cHNTZXJ2aWNlSlMuZ2V0UmVzdWx0X1dQU18yXzAoIChyZXNwb25zZTogYW55KSA9PiB7XG4gICAgICBpZiAocmVzcG9uc2UudGV4dFN0YXR1cyA9PT0gJ2Vycm9yJykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IocmVzcG9uc2UuZXJyb3JUaHJvd24pO1xuICAgICAgfVxuICAgICAgZ2V0UmVzdWx0UmVzcG9uc2UgPSBuZXcgUmVzdWx0UmVzcG9uc2UocmVzcG9uc2UpO1xuICAgICAgY2FsbGJhY2soZ2V0UmVzdWx0UmVzcG9uc2UpO1xuICAgIH0sIGpvYklkKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBPbmx5IGltcG9ydGFudCBmb3IgV1BTIDEuMFxuICAgKlxuICAgKiBAY2FsbGJhY2tGdW5jdGlvbiBhIGNhbGxiYWNrIGZ1bmN0aW9uIHRoYXQgd2lsbCBiZSB0cmlnZ2VyZWQgd2l0aCB0aGVcbiAgICogICAgICAgICAgICAgICAgICAgcGFyc2VkIGV4ZWN1dGVSZXNwb25zZSBhcyBhcmd1bWVudFxuICAgKiBAc3RvcmVkRXhlY3V0ZVJlc3BvbnNlTG9jYXRpb24gdGhlIHVybCwgd2hlcmUgdGhlIGV4ZWN1dGUgcmVzcG9uc2VcbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50IGlzIGxvY2F0ZWQgLyBjYW4gYmUgcmV0cmlldmVkXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tXG4gICAqL1xuXG4gIHBhcnNlU3RvcmVkRXhlY3V0ZVJlc3BvbnNlX1dQU18xXzAoY2FsbGJhY2s6IChyZXNwb25zZTogRXhlY3V0ZVJlc3BvbnNlKSA9PiB2b2lkLCBzdG9yZWRFeGVjdXRlUmVzcG9uc2VMb2NhdGlvbjogc3RyaW5nKXtcbiAgICBsZXQgZXhlY3V0ZVJlc3BvbnNlOiBFeGVjdXRlUmVzcG9uc2U7XG4gICAgdGhpcy53cHNTZXJ2aWNlSlMucGFyc2VTdG9yZWRFeGVjdXRlUmVzcG9uc2VfV1BTXzFfMCggKHJlc3BvbnNlOiBhbnkpID0+IHtcbiAgICAgIGlmIChyZXNwb25zZS50ZXh0U3RhdHVzID09PSAnZXJyb3InKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihyZXNwb25zZS5lcnJvclRocm93bik7XG4gICAgICB9XG4gICAgICBleGVjdXRlUmVzcG9uc2UgPSBuZXcgRXhlY3V0ZVJlc3BvbnNlKHJlc3BvbnNlKTtcbiAgICAgIGNhbGxiYWNrKGV4ZWN1dGVSZXNwb25zZSk7XG4gICAgfSwgc3RvcmVkRXhlY3V0ZVJlc3BvbnNlTG9jYXRpb24pO1xuICB9XG5cbiAgZ2V0WG1sUmVxdWVzdEV4ZWN1dGVQcm9jZXNzKHByb2Nlc3NJZGVudGlmaWVyOiBzdHJpbmcsIHJlc3BvbnNlRm9ybWF0OiBzdHJpbmcsIGV4ZWN1dGlvbk1vZGU6IHN0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVhZ2U6IGJvb2xlYW4sIGlucHV0czogQXJyYXk8RGF0YUlucHV0Piwgb3V0cHV0czogQXJyYXk8RGF0YU91dHB1dD4pOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLndwc1NlcnZpY2VKUy5nZXRYbWxSZXF1ZXN0RXhlY3V0ZVByb2Nlc3MoIHByb2Nlc3NJZGVudGlmaWVyLCByZXNwb25zZUZvcm1hdCxcbiAgICAgIGV4ZWN1dGlvbk1vZGUsIGxpbmVhZ2UsIGlucHV0cywgb3V0cHV0cyk7XG4gIH1cblxufVxuIl19