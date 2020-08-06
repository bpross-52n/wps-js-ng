import { Capabilities } from './capabilities';
export class CapabilitiesResponse {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FwYWJpbGl0aWVzLXJlc3BvbnNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvd3BzLW5nL3NyYy9tb2RlbC9jYXBhYmlsaXRpZXMvY2FwYWJpbGl0aWVzLXJlc3BvbnNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUU1QyxNQUFNLE9BQU8sb0JBQW9CO0lBSS9CLFlBQVksd0JBQTZCO1FBQ3ZDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyx3QkFBd0IsQ0FBQyxnQkFBZ0IsQ0FBQztRQUNuRSxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksWUFBWSxDQUFDLHdCQUF3QixDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQy9FLENBQUM7SUFHRCxJQUFJLGdCQUFnQjtRQUNsQixPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztJQUNoQyxDQUFDO0lBRUQsSUFBSSxZQUFZO1FBQ2QsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQzVCLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q2FwYWJpbGl0aWVzfSBmcm9tICcuL2NhcGFiaWxpdGllcyc7XG5cbmV4cG9ydCBjbGFzcyBDYXBhYmlsaXRpZXNSZXNwb25zZSB7XG4gIHByaXZhdGUgcmVhZG9ubHkgX3Jlc3BvbnNlRG9jdW1lbnQ6IERvY3VtZW50O1xuICBwcml2YXRlIHJlYWRvbmx5IF9jYXBhYmlsaXRpZXM6IENhcGFiaWxpdGllcztcblxuICBjb25zdHJ1Y3RvcihjYXBhYmlsaXRpZXNSZXNwb25zZUpzb246IGFueSkge1xuICAgIHRoaXMuX3Jlc3BvbnNlRG9jdW1lbnQgPSBjYXBhYmlsaXRpZXNSZXNwb25zZUpzb24ucmVzcG9uc2VEb2N1bWVudDtcbiAgICB0aGlzLl9jYXBhYmlsaXRpZXMgPSBuZXcgQ2FwYWJpbGl0aWVzKGNhcGFiaWxpdGllc1Jlc3BvbnNlSnNvbi5jYXBhYmlsaXRpZXMpO1xuICB9XG5cblxuICBnZXQgcmVzcG9uc2VEb2N1bWVudCgpOiBEb2N1bWVudCB7XG4gICAgcmV0dXJuIHRoaXMuX3Jlc3BvbnNlRG9jdW1lbnQ7XG4gIH1cblxuICBnZXQgY2FwYWJpbGl0aWVzKCk6IENhcGFiaWxpdGllcyB7XG4gICAgcmV0dXJuIHRoaXMuX2NhcGFiaWxpdGllcztcbiAgfVxufVxuIl19