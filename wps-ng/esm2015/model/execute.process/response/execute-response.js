import { ExecuteResponseObject } from './execute-response-object';
export class ExecuteResponse {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhlY3V0ZS1yZXNwb25zZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3dwcy1uZy9zcmMvbW9kZWwvZXhlY3V0ZS5wcm9jZXNzL3Jlc3BvbnNlL2V4ZWN1dGUtcmVzcG9uc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0sMkJBQTJCLENBQUM7QUFFaEUsTUFBTSxPQUFPLGVBQWU7SUFJMUIsWUFBWSxtQkFBd0I7UUFDbEMsSUFBSSxtQkFBbUIsSUFBSSxJQUFJLEVBQUU7WUFDL0IsSUFBSSxDQUFDLGVBQWUsR0FBRyxtQkFBbUIsQ0FBQyxnQkFBZ0IsQ0FBQztZQUM1RCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxxQkFBcUIsQ0FBQyxtQkFBbUIsQ0FBQyxlQUFlLENBQUMsQ0FBQztTQUN4RjtJQUNILENBQUM7SUFFRCxJQUFJLGNBQWM7UUFDaEIsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDO0lBQzlCLENBQUM7SUFFRCxJQUFJLGVBQWU7UUFDakIsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7SUFDL0IsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtFeGVjdXRlUmVzcG9uc2VPYmplY3R9IGZyb20gJy4vZXhlY3V0ZS1yZXNwb25zZS1vYmplY3QnO1xuXG5leHBvcnQgY2xhc3MgRXhlY3V0ZVJlc3BvbnNlIHtcbiAgcHJpdmF0ZSByZWFkb25seSBfcmVzdWx0RG9jdW1lbnQ6IERvY3VtZW50O1xuICBwcml2YXRlIHJlYWRvbmx5IF9leGVjdXRlUmVzcG9uc2U6IEV4ZWN1dGVSZXNwb25zZU9iamVjdDtcblxuICBjb25zdHJ1Y3RvcihleGVjdXRlUmVzcG9uc2VKc29uOiBhbnkpIHtcbiAgICBpZiAoZXhlY3V0ZVJlc3BvbnNlSnNvbiAhPSBudWxsKSB7XG4gICAgICB0aGlzLl9yZXN1bHREb2N1bWVudCA9IGV4ZWN1dGVSZXNwb25zZUpzb24ucmVzcG9uc2VEb2N1bWVudDtcbiAgICAgIHRoaXMuX2V4ZWN1dGVSZXNwb25zZSA9IG5ldyBFeGVjdXRlUmVzcG9uc2VPYmplY3QoZXhlY3V0ZVJlc3BvbnNlSnNvbi5leGVjdXRlUmVzcG9uc2UpO1xuICAgIH1cbiAgfVxuXG4gIGdldCByZXN1bHREb2N1bWVudCgpOiBEb2N1bWVudCB7XG4gICAgcmV0dXJuIHRoaXMuX3Jlc3VsdERvY3VtZW50O1xuICB9XG5cbiAgZ2V0IGV4ZWN1dGVSZXNwb25zZSgpOiBFeGVjdXRlUmVzcG9uc2VPYmplY3Qge1xuICAgIHJldHVybiB0aGlzLl9leGVjdXRlUmVzcG9uc2U7XG4gIH1cbn1cbiJdfQ==