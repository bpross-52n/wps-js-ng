import { StatusResponseDocument } from './status-response-document';
export class StatusResponse {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdHVzLXJlc3BvbnNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvd3BzLW5nL3NyYy9tb2RlbC9nZXQuc3RhdHVzL3N0YXR1cy1yZXNwb25zZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQztBQUVsRSxNQUFNLE9BQU8sY0FBYztJQUt6QixZQUFZLGlCQUFzQjtRQUNoQyxJQUFJLGlCQUFpQixJQUFJLElBQUksRUFBQztZQUM1QixJQUFJLENBQUMsS0FBSyxHQUFHLGlCQUFpQixDQUFDLElBQUksQ0FBQztZQUNwQyxJQUFJLENBQUMsZUFBZSxHQUFHLGlCQUFpQixDQUFDLGNBQWMsQ0FBQztZQUN4RCxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxzQkFBc0IsQ0FBQyxpQkFBaUIsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1NBQ3pGO0lBQ0gsQ0FBQztJQUVELElBQUksSUFBSTtRQUNOLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNwQixDQUFDO0lBRUQsSUFBSSxjQUFjO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQztJQUM5QixDQUFDO0lBRUQsSUFBSSxnQkFBZ0I7UUFDbEIsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUM7SUFDaEMsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtTdGF0dXNSZXNwb25zZURvY3VtZW50fSBmcm9tICcuL3N0YXR1cy1yZXNwb25zZS1kb2N1bWVudCc7XG5cbmV4cG9ydCBjbGFzcyBTdGF0dXNSZXNwb25zZSB7XG4gIHByaXZhdGUgcmVhZG9ubHkgX3R5cGU6IHN0cmluZztcbiAgcHJpdmF0ZSByZWFkb25seSBfc2VydmljZVZlcnNpb246IHN0cmluZztcbiAgcHJpdmF0ZSByZWFkb25seSBfcmVzcG9uc2VEb2N1bWVudDogU3RhdHVzUmVzcG9uc2VEb2N1bWVudDtcblxuICBjb25zdHJ1Y3RvcihnZXRTdGF0dXNSZXNwb25zZTogYW55KSB7XG4gICAgaWYgKGdldFN0YXR1c1Jlc3BvbnNlICE9IG51bGwpe1xuICAgICAgdGhpcy5fdHlwZSA9IGdldFN0YXR1c1Jlc3BvbnNlLnR5cGU7XG4gICAgICB0aGlzLl9zZXJ2aWNlVmVyc2lvbiA9IGdldFN0YXR1c1Jlc3BvbnNlLnNlcnZpY2VWZXJzaW9uO1xuICAgICAgdGhpcy5fcmVzcG9uc2VEb2N1bWVudCA9IG5ldyBTdGF0dXNSZXNwb25zZURvY3VtZW50KGdldFN0YXR1c1Jlc3BvbnNlLnJlc3BvbnNlRG9jdW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIGdldCB0eXBlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3R5cGU7XG4gIH1cblxuICBnZXQgc2VydmljZVZlcnNpb24oKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fc2VydmljZVZlcnNpb247XG4gIH1cblxuICBnZXQgcmVzcG9uc2VEb2N1bWVudCgpOiBTdGF0dXNSZXNwb25zZURvY3VtZW50IHtcbiAgICByZXR1cm4gdGhpcy5fcmVzcG9uc2VEb2N1bWVudDtcbiAgfVxufVxuIl19