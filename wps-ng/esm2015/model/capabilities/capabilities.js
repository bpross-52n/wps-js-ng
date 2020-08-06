import { ServiceIdentification } from './service-identification';
import { ServiceProvider } from './service-provider';
import { Operation } from './operation';
import { Process } from './process';
export class Capabilities {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FwYWJpbGl0aWVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvd3BzLW5nL3NyYy9tb2RlbC9jYXBhYmlsaXRpZXMvY2FwYWJpbGl0aWVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQy9ELE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSxvQkFBb0IsQ0FBQztBQUNuRCxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sYUFBYSxDQUFDO0FBQ3RDLE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSxXQUFXLENBQUM7QUFFbEMsTUFBTSxPQUFPLFlBQVk7SUFVdkIsWUFBWSxnQkFBcUI7O1FBQy9CLElBQUksZ0JBQWdCLElBQUksSUFBSSxFQUFFO1lBQzVCLElBQUksQ0FBQyxRQUFRLEdBQUcsZ0JBQWdCLENBQUMsT0FBTyxDQUFDO1lBQ3pDLElBQUksQ0FBQyxRQUFRLEdBQUcsZ0JBQWdCLENBQUMsT0FBTyxDQUFDO1lBQ3pDLElBQUksQ0FBQyxzQkFBc0IsR0FBRyxJQUFJLHFCQUFxQixDQUFDLGdCQUFnQixDQUFDLHFCQUFxQixDQUFDLENBQUM7WUFDaEcsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksZUFBZSxDQUFDLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBQzlFLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxLQUFLLEVBQWEsQ0FBQztZQUMxQyxNQUFBLGdCQUFnQixDQUFDLFVBQVUsMENBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUN2QyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzFDLENBQUMsRUFBRTtZQUNILElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxLQUFLLEVBQVUsQ0FBQztZQUN0QyxNQUFBLGdCQUFnQixDQUFDLFNBQVMsMENBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUN0QyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMxQixDQUFDLEVBQUU7WUFFSCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksS0FBSyxFQUFXLENBQUM7WUFDdkMsTUFBQSxnQkFBZ0IsQ0FBQyxTQUFTLDBDQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDdEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN2QyxDQUFDLEVBQUU7WUFDSCxJQUFJLENBQUMsVUFBVSxHQUFHLGdCQUFnQixDQUFDLFNBQVMsQ0FBQztTQUM5QztJQUNILENBQUM7SUFFRCxJQUFJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdkIsQ0FBQztJQUVELElBQUksT0FBTztRQUNULE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN2QixDQUFDO0lBRUQsSUFBSSxxQkFBcUI7UUFDdkIsT0FBTyxJQUFJLENBQUMsc0JBQXNCLENBQUM7SUFDckMsQ0FBQztJQUVELElBQUksZUFBZTtRQUNqQixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztJQUMvQixDQUFDO0lBRUQsSUFBSSxVQUFVO1FBQ1osT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzFCLENBQUM7SUFFRCxJQUFJLFNBQVM7UUFDWCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDekIsQ0FBQztJQUVELElBQUksU0FBUztRQUNYLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN6QixDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1NlcnZpY2VJZGVudGlmaWNhdGlvbn0gZnJvbSAnLi9zZXJ2aWNlLWlkZW50aWZpY2F0aW9uJztcbmltcG9ydCB7U2VydmljZVByb3ZpZGVyfSBmcm9tICcuL3NlcnZpY2UtcHJvdmlkZXInO1xuaW1wb3J0IHtPcGVyYXRpb259IGZyb20gJy4vb3BlcmF0aW9uJztcbmltcG9ydCB7UHJvY2Vzc30gZnJvbSAnLi9wcm9jZXNzJztcblxuZXhwb3J0IGNsYXNzIENhcGFiaWxpdGllcyB7XG5cbiAgcHJpdmF0ZSByZWFkb25seSBfc2VydmljZTogc3RyaW5nO1xuICBwcml2YXRlIHJlYWRvbmx5IF92ZXJzaW9uOiBzdHJpbmc7XG4gIHByaXZhdGUgcmVhZG9ubHkgX3NlcnZpY2VJZGVudGlmaWNhdGlvbjogU2VydmljZUlkZW50aWZpY2F0aW9uO1xuICBwcml2YXRlIHJlYWRvbmx5IF9zZXJ2aWNlUHJvdmlkZXI6IFNlcnZpY2VQcm92aWRlcjtcbiAgcHJpdmF0ZSByZWFkb25seSBfb3BlcmF0aW9uczogT3BlcmF0aW9uW107XG4gIHByaXZhdGUgcmVhZG9ubHkgX2xhbmd1YWdlczogc3RyaW5nW107XG4gIHByaXZhdGUgcmVhZG9ubHkgX3Byb2Nlc3NlczogUHJvY2Vzc1tdO1xuXG4gIGNvbnN0cnVjdG9yKGNhcGFiaWxpdGllc0pzb246IGFueSkge1xuICAgIGlmIChjYXBhYmlsaXRpZXNKc29uICE9IG51bGwpIHtcbiAgICAgIHRoaXMuX3NlcnZpY2UgPSBjYXBhYmlsaXRpZXNKc29uLnNlcnZpY2U7XG4gICAgICB0aGlzLl92ZXJzaW9uID0gY2FwYWJpbGl0aWVzSnNvbi52ZXJzaW9uO1xuICAgICAgdGhpcy5fc2VydmljZUlkZW50aWZpY2F0aW9uID0gbmV3IFNlcnZpY2VJZGVudGlmaWNhdGlvbihjYXBhYmlsaXRpZXNKc29uLnNlcnZpY2VJZGVudGlmaWNhdGlvbik7XG4gICAgICB0aGlzLl9zZXJ2aWNlUHJvdmlkZXIgPSBuZXcgU2VydmljZVByb3ZpZGVyKGNhcGFiaWxpdGllc0pzb24uc2VydmljZVByb3ZpZGVyKTtcbiAgICAgIHRoaXMuX29wZXJhdGlvbnMgPSBuZXcgQXJyYXk8T3BlcmF0aW9uPigpO1xuICAgICAgY2FwYWJpbGl0aWVzSnNvbi5vcGVyYXRpb25zPy5mb3JFYWNoKGUgPT4ge1xuICAgICAgICB0aGlzLl9vcGVyYXRpb25zLnB1c2gobmV3IE9wZXJhdGlvbihlKSk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuX2xhbmd1YWdlcyA9IG5ldyBBcnJheTxzdHJpbmc+KCk7XG4gICAgICBjYXBhYmlsaXRpZXNKc29uLmxhbmd1YWdlcz8uZm9yRWFjaChlID0+IHtcbiAgICAgICAgdGhpcy5fbGFuZ3VhZ2VzLnB1c2goZSk7XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5fcHJvY2Vzc2VzID0gbmV3IEFycmF5PFByb2Nlc3M+KCk7XG4gICAgICBjYXBhYmlsaXRpZXNKc29uLnByb2Nlc3Nlcz8uZm9yRWFjaChlID0+IHtcbiAgICAgICAgdGhpcy5fcHJvY2Vzc2VzLnB1c2gobmV3IFByb2Nlc3MoZSkpO1xuICAgICAgfSk7XG4gICAgICB0aGlzLl9wcm9jZXNzZXMgPSBjYXBhYmlsaXRpZXNKc29uLnByb2Nlc3NlcztcbiAgICB9XG4gIH1cblxuICBnZXQgc2VydmljZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9zZXJ2aWNlO1xuICB9XG5cbiAgZ2V0IHZlcnNpb24oKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fdmVyc2lvbjtcbiAgfVxuXG4gIGdldCBzZXJ2aWNlSWRlbnRpZmljYXRpb24oKTogU2VydmljZUlkZW50aWZpY2F0aW9uIHtcbiAgICByZXR1cm4gdGhpcy5fc2VydmljZUlkZW50aWZpY2F0aW9uO1xuICB9XG5cbiAgZ2V0IHNlcnZpY2VQcm92aWRlcigpOiBTZXJ2aWNlUHJvdmlkZXIge1xuICAgIHJldHVybiB0aGlzLl9zZXJ2aWNlUHJvdmlkZXI7XG4gIH1cblxuICBnZXQgb3BlcmF0aW9ucygpOiBPcGVyYXRpb25bXSB7XG4gICAgcmV0dXJuIHRoaXMuX29wZXJhdGlvbnM7XG4gIH1cblxuICBnZXQgbGFuZ3VhZ2VzKCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gdGhpcy5fbGFuZ3VhZ2VzO1xuICB9XG5cbiAgZ2V0IHByb2Nlc3NlcygpOiBQcm9jZXNzW10ge1xuICAgIHJldHVybiB0aGlzLl9wcm9jZXNzZXM7XG4gIH1cbn1cbiJdfQ==