import { ProcessDetails } from './process-details';
export class ProcessOffering {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvY2Vzcy1vZmZlcmluZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3dwcy1uZy9zcmMvbW9kZWwvcHJvY2Vzcy5kZXNjcmlwdGlvbi9wcm9jZXNzLW9mZmVyaW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQUVqRCxNQUFNLE9BQU8sZUFBZTtJQVExQixZQUFZLHVCQUE0Qjs7UUFDdEMsSUFBSSx1QkFBdUIsSUFBSSxJQUFJLEVBQUM7WUFDbEMsSUFBSSxDQUFDLFFBQVEsR0FBRyx1QkFBdUIsQ0FBQyxPQUFPLENBQUM7WUFDaEQsSUFBSSxDQUFDLFFBQVEsR0FBRyx1QkFBdUIsQ0FBQyxPQUFPLENBQUM7WUFDaEQsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLGNBQWMsQ0FBQyx1QkFBdUIsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNwRSxJQUFJLENBQUMsZUFBZSxHQUFHLHVCQUF1QixDQUFDLGNBQWMsQ0FBQztZQUM5RCxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxLQUFLLEVBQVUsQ0FBQztZQUM5QyxNQUFBLHVCQUF1QixDQUFDLGlCQUFpQiwwQ0FBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ3JELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbEMsQ0FBQyxFQUFFO1lBQ0gsSUFBSSxDQUFDLHdCQUF3QixHQUFHLElBQUksS0FBSyxFQUFVLENBQUM7WUFDcEQsTUFBQSx1QkFBdUIsQ0FBQyx1QkFBdUIsMENBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUMzRCxJQUFJLENBQUMsd0JBQXdCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3hDLENBQUMsRUFBRTtTQUNKO0lBQ0gsQ0FBQztJQUVELElBQUksT0FBTztRQUNULE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN2QixDQUFDO0lBRUQsSUFBSSxPQUFPO1FBQ1QsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxJQUFJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdkIsQ0FBQztJQUVELElBQUksY0FBYztRQUNoQixPQUFPLElBQUksQ0FBQyxlQUFlLENBQUM7SUFDOUIsQ0FBQztJQUVELElBQUksaUJBQWlCO1FBQ25CLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDO0lBQ2pDLENBQUM7SUFFRCxJQUFJLHVCQUF1QjtRQUN6QixPQUFPLElBQUksQ0FBQyx3QkFBd0IsQ0FBQztJQUN2QyxDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1Byb2Nlc3NEZXRhaWxzfSBmcm9tICcuL3Byb2Nlc3MtZGV0YWlscyc7XG5cbmV4cG9ydCBjbGFzcyBQcm9jZXNzT2ZmZXJpbmcge1xuICBwcml2YXRlIHJlYWRvbmx5IF9zZXJ2aWNlOiBzdHJpbmc7XG4gIHByaXZhdGUgcmVhZG9ubHkgX3ZlcnNpb246IHN0cmluZztcbiAgcHJpdmF0ZSByZWFkb25seSBfcHJvY2VzczogUHJvY2Vzc0RldGFpbHM7XG4gIHByaXZhdGUgcmVhZG9ubHkgX3Byb2Nlc3NWZXJzaW9uOiBzdHJpbmc7XG4gIHByaXZhdGUgcmVhZG9ubHkgX2pvYkNvbnRyb2xPcHRpb25zOiBzdHJpbmdbXTtcbiAgcHJpdmF0ZSByZWFkb25seSBfb3V0cHV0VHJhbnNtaXNzaW9uTW9kZXM6IHN0cmluZ1tdO1xuXG4gIGNvbnN0cnVjdG9yKHByb2Nlc3NPZmZlcmluZ1Jlc3BvbnNlOiBhbnkpIHtcbiAgICBpZiAocHJvY2Vzc09mZmVyaW5nUmVzcG9uc2UgIT0gbnVsbCl7XG4gICAgICB0aGlzLl9zZXJ2aWNlID0gcHJvY2Vzc09mZmVyaW5nUmVzcG9uc2Uuc2VydmljZTtcbiAgICAgIHRoaXMuX3ZlcnNpb24gPSBwcm9jZXNzT2ZmZXJpbmdSZXNwb25zZS52ZXJzaW9uO1xuICAgICAgdGhpcy5fcHJvY2VzcyA9IG5ldyBQcm9jZXNzRGV0YWlscyhwcm9jZXNzT2ZmZXJpbmdSZXNwb25zZS5wcm9jZXNzKTtcbiAgICAgIHRoaXMuX3Byb2Nlc3NWZXJzaW9uID0gcHJvY2Vzc09mZmVyaW5nUmVzcG9uc2UucHJvY2Vzc1ZlcnNpb247XG4gICAgICB0aGlzLl9qb2JDb250cm9sT3B0aW9ucyA9IG5ldyBBcnJheTxzdHJpbmc+KCk7XG4gICAgICBwcm9jZXNzT2ZmZXJpbmdSZXNwb25zZS5qb2JDb250cm9sT3B0aW9ucz8uZm9yRWFjaChlID0+IHtcbiAgICAgICAgdGhpcy5fam9iQ29udHJvbE9wdGlvbnMucHVzaChlKTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5fb3V0cHV0VHJhbnNtaXNzaW9uTW9kZXMgPSBuZXcgQXJyYXk8c3RyaW5nPigpO1xuICAgICAgcHJvY2Vzc09mZmVyaW5nUmVzcG9uc2Uub3V0cHV0VHJhbnNtaXNzaW9uTW9kZXM/LmZvckVhY2goZSA9PiB7XG4gICAgICAgIHRoaXMuX291dHB1dFRyYW5zbWlzc2lvbk1vZGVzLnB1c2goZSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBnZXQgc2VydmljZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9zZXJ2aWNlO1xuICB9XG5cbiAgZ2V0IHZlcnNpb24oKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fdmVyc2lvbjtcbiAgfVxuXG4gIGdldCBwcm9jZXNzKCk6IFByb2Nlc3NEZXRhaWxzIHtcbiAgICByZXR1cm4gdGhpcy5fcHJvY2VzcztcbiAgfVxuXG4gIGdldCBwcm9jZXNzVmVyc2lvbigpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9wcm9jZXNzVmVyc2lvbjtcbiAgfVxuXG4gIGdldCBqb2JDb250cm9sT3B0aW9ucygpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIHRoaXMuX2pvYkNvbnRyb2xPcHRpb25zO1xuICB9XG5cbiAgZ2V0IG91dHB1dFRyYW5zbWlzc2lvbk1vZGVzKCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gdGhpcy5fb3V0cHV0VHJhbnNtaXNzaW9uTW9kZXM7XG4gIH1cbn1cbiJdfQ==