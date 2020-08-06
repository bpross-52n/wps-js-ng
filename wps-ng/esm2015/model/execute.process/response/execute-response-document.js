import { Process } from '../../capabilities/process';
import { ExecuteOutput } from './execute-output';
import { Status } from './status';
export class ExecuteResponseDocument {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhlY3V0ZS1yZXNwb25zZS1kb2N1bWVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3dwcy1uZy9zcmMvbW9kZWwvZXhlY3V0ZS5wcm9jZXNzL3Jlc3BvbnNlL2V4ZWN1dGUtcmVzcG9uc2UtZG9jdW1lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLE9BQU8sRUFBQyxNQUFNLDRCQUE0QixDQUFDO0FBQ25ELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQztBQUMvQyxPQUFPLEVBQUMsTUFBTSxFQUFDLE1BQU0sVUFBVSxDQUFDO0FBRWhDLE1BQU0sT0FBTyx1QkFBdUI7SUFjbEMsWUFBWSwyQkFBZ0M7O1FBQzFDLElBQUksMkJBQTJCLElBQUksSUFBSSxFQUFDO1lBQ3RDLElBQUksQ0FBQyxRQUFRLEdBQUcsMkJBQTJCLENBQUMsT0FBTyxDQUFDO1lBQ3BELElBQUksQ0FBQyxRQUFRLEdBQUcsMkJBQTJCLENBQUMsT0FBTyxDQUFDO1lBQ3BELElBQUksQ0FBQyxLQUFLLEdBQUcsMkJBQTJCLENBQUMsSUFBSSxDQUFDO1lBQzlDLElBQUksQ0FBQyxlQUFlLEdBQUcsMkJBQTJCLENBQUMsY0FBYyxDQUFDO1lBQ2xFLElBQUksQ0FBQyxnQkFBZ0IsR0FBRywyQkFBMkIsQ0FBQyxlQUFlLENBQUM7WUFDcEUsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLE9BQU8sQ0FBQywyQkFBMkIsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNqRSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksTUFBTSxDQUFDLDJCQUEyQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzlELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxLQUFLLEVBQWlCLENBQUM7WUFDM0MsTUFBQSwyQkFBMkIsQ0FBQyxPQUFPLDBDQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDL0MsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMzQyxDQUFDLEVBQUU7WUFDSCxJQUFJLENBQUMsTUFBTSxHQUFHLDJCQUEyQixDQUFDLEtBQUssQ0FBQztZQUNoRCxJQUFJLENBQUMsZUFBZSxHQUFHLDJCQUEyQixDQUFDLGNBQWMsQ0FBQztTQUNuRTtJQUNILENBQUM7SUFHRCxJQUFJLGNBQWM7UUFDaEIsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDO0lBQzlCLENBQUM7SUFFRCxJQUFJLElBQUk7UUFDTixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDcEIsQ0FBQztJQUVELElBQUksT0FBTztRQUNULE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN2QixDQUFDO0lBRUQsSUFBSSxPQUFPO1FBQ1QsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxJQUFJLGNBQWM7UUFDaEIsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDO0lBQzlCLENBQUM7SUFFRCxJQUFJLGVBQWU7UUFDakIsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7SUFDL0IsQ0FBQztJQUVELElBQUksT0FBTztRQUNULE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN2QixDQUFDO0lBRUQsSUFBSSxNQUFNO1FBQ1IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3RCLENBQUM7SUFFRCxJQUFJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdkIsQ0FBQztJQUVELElBQUksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNyQixDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1Byb2Nlc3N9IGZyb20gJy4uLy4uL2NhcGFiaWxpdGllcy9wcm9jZXNzJztcbmltcG9ydCB7RXhlY3V0ZU91dHB1dH0gZnJvbSAnLi9leGVjdXRlLW91dHB1dCc7XG5pbXBvcnQge1N0YXR1c30gZnJvbSAnLi9zdGF0dXMnO1xuXG5leHBvcnQgY2xhc3MgRXhlY3V0ZVJlc3BvbnNlRG9jdW1lbnQge1xuICAvLyBQcm9wZXJ0eSBvbmx5IGZvciBWZXJzaW9uIDJcbiAgcHJpdmF0ZSByZWFkb25seSBfam9iSWQ6IHN0cmluZztcbiAgLy8gUHJvcGVydHkgb25seSBmb3IgQXN5bmMgY2FsbFxuICBwcml2YXRlIHJlYWRvbmx5IF9leHBpcmF0aW9uRGF0ZTogc3RyaW5nO1xuICBwcml2YXRlIHJlYWRvbmx5IF9zZXJ2aWNlOiBzdHJpbmc7XG4gIHByaXZhdGUgcmVhZG9ubHkgX3ZlcnNpb246IHN0cmluZztcbiAgcHJpdmF0ZSByZWFkb25seSBfbGFuZzogc3RyaW5nO1xuICBwcml2YXRlIHJlYWRvbmx5IF9zdGF0dXNMb2NhdGlvbjogc3RyaW5nO1xuICBwcml2YXRlIHJlYWRvbmx5IF9zZXJ2aWNlSW5zdGFuY2U6IHN0cmluZztcbiAgcHJpdmF0ZSByZWFkb25seSBfcHJvY2VzczogUHJvY2VzcztcbiAgcHJpdmF0ZSByZWFkb25seSBfc3RhdHVzOiBTdGF0dXM7XG4gIHByaXZhdGUgcmVhZG9ubHkgX291dHB1dHM6IEV4ZWN1dGVPdXRwdXRbXTtcblxuICBjb25zdHJ1Y3RvcihleGVjdXRlUmVzcG9uc2VEb2N1bWVudEpzb246IGFueSkge1xuICAgIGlmIChleGVjdXRlUmVzcG9uc2VEb2N1bWVudEpzb24gIT0gbnVsbCl7XG4gICAgICB0aGlzLl9zZXJ2aWNlID0gZXhlY3V0ZVJlc3BvbnNlRG9jdW1lbnRKc29uLnNlcnZpY2U7XG4gICAgICB0aGlzLl92ZXJzaW9uID0gZXhlY3V0ZVJlc3BvbnNlRG9jdW1lbnRKc29uLnZlcnNpb247XG4gICAgICB0aGlzLl9sYW5nID0gZXhlY3V0ZVJlc3BvbnNlRG9jdW1lbnRKc29uLmxhbmc7XG4gICAgICB0aGlzLl9zdGF0dXNMb2NhdGlvbiA9IGV4ZWN1dGVSZXNwb25zZURvY3VtZW50SnNvbi5zdGF0dXNMb2NhdGlvbjtcbiAgICAgIHRoaXMuX3NlcnZpY2VJbnN0YW5jZSA9IGV4ZWN1dGVSZXNwb25zZURvY3VtZW50SnNvbi5zZXJ2aWNlSW5zdGFuY2U7XG4gICAgICB0aGlzLl9wcm9jZXNzID0gbmV3IFByb2Nlc3MoZXhlY3V0ZVJlc3BvbnNlRG9jdW1lbnRKc29uLnByb2Nlc3MpO1xuICAgICAgdGhpcy5fc3RhdHVzID0gbmV3IFN0YXR1cyhleGVjdXRlUmVzcG9uc2VEb2N1bWVudEpzb24uc3RhdHVzKTtcbiAgICAgIHRoaXMuX291dHB1dHMgPSBuZXcgQXJyYXk8RXhlY3V0ZU91dHB1dD4oKTtcbiAgICAgIGV4ZWN1dGVSZXNwb25zZURvY3VtZW50SnNvbi5vdXRwdXRzPy5mb3JFYWNoKGUgPT4ge1xuICAgICAgICB0aGlzLl9vdXRwdXRzLnB1c2gobmV3IEV4ZWN1dGVPdXRwdXQoZSkpO1xuICAgICAgfSk7XG4gICAgICB0aGlzLl9qb2JJZCA9IGV4ZWN1dGVSZXNwb25zZURvY3VtZW50SnNvbi5qb2JJZDtcbiAgICAgIHRoaXMuX2V4cGlyYXRpb25EYXRlID0gZXhlY3V0ZVJlc3BvbnNlRG9jdW1lbnRKc29uLmV4cGlyYXRpb25EYXRlO1xuICAgIH1cbiAgfVxuXG5cbiAgZ2V0IGV4cGlyYXRpb25EYXRlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2V4cGlyYXRpb25EYXRlO1xuICB9XG5cbiAgZ2V0IGxhbmcoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fbGFuZztcbiAgfVxuXG4gIGdldCBzZXJ2aWNlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3NlcnZpY2U7XG4gIH1cblxuICBnZXQgdmVyc2lvbigpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl92ZXJzaW9uO1xuICB9XG5cbiAgZ2V0IHN0YXR1c0xvY2F0aW9uKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3N0YXR1c0xvY2F0aW9uO1xuICB9XG5cbiAgZ2V0IHNlcnZpY2VJbnN0YW5jZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9zZXJ2aWNlSW5zdGFuY2U7XG4gIH1cblxuICBnZXQgcHJvY2VzcygpOiBQcm9jZXNzIHtcbiAgICByZXR1cm4gdGhpcy5fcHJvY2VzcztcbiAgfVxuXG4gIGdldCBzdGF0dXMoKTogU3RhdHVzIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhdHVzO1xuICB9XG5cbiAgZ2V0IG91dHB1dHMoKTogRXhlY3V0ZU91dHB1dFtdIHtcbiAgICByZXR1cm4gdGhpcy5fb3V0cHV0cztcbiAgfVxuXG4gIGdldCBqb2JJZCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9qb2JJZDtcbiAgfVxufVxuIl19