import { ExecuteResponseDocument } from './execute-response-document';
export class ExecuteResponseObject {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhlY3V0ZS1yZXNwb25zZS1vYmplY3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy93cHMtbmcvc3JjL21vZGVsL2V4ZWN1dGUucHJvY2Vzcy9yZXNwb25zZS9leGVjdXRlLXJlc3BvbnNlLW9iamVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsdUJBQXVCLEVBQUMsTUFBTSw2QkFBNkIsQ0FBQztBQUVwRSxNQUFNLE9BQU8scUJBQXFCO0lBS2hDLFlBQVksbUJBQXdCO1FBQ2xDLGtGQUFrRjtRQUNsRixJQUFJLENBQUMsS0FBSyxHQUFHLG1CQUFtQixDQUFDLElBQUksQ0FBQztRQUN0QyxJQUFJLENBQUMsZUFBZSxHQUFHLG1CQUFtQixDQUFDLGNBQWMsQ0FBQztRQUMxRCxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSx1QkFBdUIsQ0FBQyxtQkFBbUIsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQzdGLENBQUM7SUFFRCxJQUFJLElBQUk7UUFDTixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDcEIsQ0FBQztJQUVELElBQUksY0FBYztRQUNoQixPQUFPLElBQUksQ0FBQyxlQUFlLENBQUM7SUFDOUIsQ0FBQztJQUVELElBQUksZ0JBQWdCO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDO0lBQ2hDLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RXhlY3V0ZVJlc3BvbnNlRG9jdW1lbnR9IGZyb20gJy4vZXhlY3V0ZS1yZXNwb25zZS1kb2N1bWVudCc7XG5cbmV4cG9ydCBjbGFzcyBFeGVjdXRlUmVzcG9uc2VPYmplY3Qge1xuICBwcml2YXRlIHJlYWRvbmx5IF90eXBlOiBzdHJpbmc7XG4gIHByaXZhdGUgcmVhZG9ubHkgX3NlcnZpY2VWZXJzaW9uOiBzdHJpbmc7XG4gIHByaXZhdGUgcmVhZG9ubHkgX3Jlc3BvbnNlRG9jdW1lbnQ6IEV4ZWN1dGVSZXNwb25zZURvY3VtZW50O1xuXG4gIGNvbnN0cnVjdG9yKGV4ZWN1dGVSZXNwb25zZUpzb246IGFueSkge1xuICAgIC8vIHR5cGU6IHN0cmluZywgc2VydmljZVZlcnNpb246IHN0cmluZywgcmVzcG9uc2VEb2N1bWVudDogRXhlY3V0ZVJlc3BvbnNlRG9jdW1lbnRcbiAgICB0aGlzLl90eXBlID0gZXhlY3V0ZVJlc3BvbnNlSnNvbi50eXBlO1xuICAgIHRoaXMuX3NlcnZpY2VWZXJzaW9uID0gZXhlY3V0ZVJlc3BvbnNlSnNvbi5zZXJ2aWNlVmVyc2lvbjtcbiAgICB0aGlzLl9yZXNwb25zZURvY3VtZW50ID0gbmV3IEV4ZWN1dGVSZXNwb25zZURvY3VtZW50KGV4ZWN1dGVSZXNwb25zZUpzb24ucmVzcG9uc2VEb2N1bWVudCk7XG4gIH1cblxuICBnZXQgdHlwZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl90eXBlO1xuICB9XG5cbiAgZ2V0IHNlcnZpY2VWZXJzaW9uKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3NlcnZpY2VWZXJzaW9uO1xuICB9XG5cbiAgZ2V0IHJlc3BvbnNlRG9jdW1lbnQoKTogRXhlY3V0ZVJlc3BvbnNlRG9jdW1lbnQge1xuICAgIHJldHVybiB0aGlzLl9yZXNwb25zZURvY3VtZW50O1xuICB9XG59XG4iXX0=