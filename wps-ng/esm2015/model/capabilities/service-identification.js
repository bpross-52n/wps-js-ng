export class ServiceIdentification {
    constructor(serviceIdentificationJson) {
        var _a, _b;
        if (serviceIdentificationJson != null) {
            this._title = serviceIdentificationJson.title;
            this._abstractValue = serviceIdentificationJson.abstractValue;
            this._keywords = new Array();
            (_a = serviceIdentificationJson.keywords) === null || _a === void 0 ? void 0 : _a.forEach((e) => {
                this._keywords.push(e);
            });
            this._serviceType = serviceIdentificationJson.serviceType;
            this._serviceTypeVersions = new Array();
            (_b = serviceIdentificationJson.serviceTypeVersions) === null || _b === void 0 ? void 0 : _b.forEach((e) => {
                this._serviceTypeVersions.push(e);
            });
            this._fees = serviceIdentificationJson.fees;
            this._accessConstraints = serviceIdentificationJson.accessConstraints;
        }
    }
    get title() {
        return this._title;
    }
    get abstractValue() {
        return this._abstractValue;
    }
    get keywords() {
        return this._keywords;
    }
    get serviceType() {
        return this._serviceType;
    }
    get serviceTypeVersions() {
        return this._serviceTypeVersions;
    }
    get fees() {
        return this._fees;
    }
    get accessConstraints() {
        return this._accessConstraints;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZS1pZGVudGlmaWNhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3dwcy1uZy9zcmMvbW9kZWwvY2FwYWJpbGl0aWVzL3NlcnZpY2UtaWRlbnRpZmljYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxPQUFPLHFCQUFxQjtJQVVoQyxZQUFZLHlCQUE4Qjs7UUFDeEMsSUFBSSx5QkFBeUIsSUFBSSxJQUFJLEVBQUM7WUFDcEMsSUFBSSxDQUFDLE1BQU0sR0FBRyx5QkFBeUIsQ0FBQyxLQUFLLENBQUM7WUFDOUMsSUFBSSxDQUFDLGNBQWMsR0FBRyx5QkFBeUIsQ0FBQyxhQUFhLENBQUM7WUFDOUQsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLEtBQUssRUFBVSxDQUFDO1lBQ3JDLE1BQUEseUJBQXlCLENBQUMsUUFBUSwwQ0FBRSxPQUFPLENBQUUsQ0FBQyxDQUFTLEVBQUUsRUFBRTtnQkFDekQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDekIsQ0FBQyxFQUFFO1lBQ0gsSUFBSSxDQUFDLFlBQVksR0FBRyx5QkFBeUIsQ0FBQyxXQUFXLENBQUM7WUFDMUQsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksS0FBSyxFQUFVLENBQUM7WUFDaEQsTUFBQSx5QkFBeUIsQ0FBQyxtQkFBbUIsMENBQUUsT0FBTyxDQUFFLENBQUMsQ0FBUyxFQUFFLEVBQUU7Z0JBQ3BFLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDcEMsQ0FBQyxFQUFFO1lBQ0gsSUFBSSxDQUFDLEtBQUssR0FBSSx5QkFBeUIsQ0FBQyxJQUFJLENBQUM7WUFDN0MsSUFBSSxDQUFDLGtCQUFrQixHQUFHLHlCQUF5QixDQUFDLGlCQUFpQixDQUFDO1NBQ3ZFO0lBQ0gsQ0FBQztJQUVELElBQUksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNyQixDQUFDO0lBRUQsSUFBSSxhQUFhO1FBQ2YsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO0lBQzdCLENBQUM7SUFFRCxJQUFJLFFBQVE7UUFDVixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDeEIsQ0FBQztJQUVELElBQUksV0FBVztRQUNiLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztJQUMzQixDQUFDO0lBRUQsSUFBSSxtQkFBbUI7UUFDckIsT0FBTyxJQUFJLENBQUMsb0JBQW9CLENBQUM7SUFDbkMsQ0FBQztJQUVELElBQUksSUFBSTtRQUNOLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNwQixDQUFDO0lBRUQsSUFBSSxpQkFBaUI7UUFDbkIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUM7SUFDakMsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFNlcnZpY2VJZGVudGlmaWNhdGlvbiB7XG5cbiAgcHJpdmF0ZSByZWFkb25seSBfdGl0bGU6IHN0cmluZztcbiAgcHJpdmF0ZSByZWFkb25seSBfYWJzdHJhY3RWYWx1ZTogc3RyaW5nO1xuICBwcml2YXRlIHJlYWRvbmx5IF9rZXl3b3Jkczogc3RyaW5nW107XG4gIHByaXZhdGUgcmVhZG9ubHkgX3NlcnZpY2VUeXBlOiBzdHJpbmc7XG4gIHByaXZhdGUgcmVhZG9ubHkgX3NlcnZpY2VUeXBlVmVyc2lvbnM6IHN0cmluZ1tdO1xuICBwcml2YXRlIHJlYWRvbmx5IF9mZWVzOiBzdHJpbmc7XG4gIHByaXZhdGUgcmVhZG9ubHkgX2FjY2Vzc0NvbnN0cmFpbnRzOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3Ioc2VydmljZUlkZW50aWZpY2F0aW9uSnNvbjogYW55KSB7XG4gICAgaWYgKHNlcnZpY2VJZGVudGlmaWNhdGlvbkpzb24gIT0gbnVsbCl7XG4gICAgICB0aGlzLl90aXRsZSA9IHNlcnZpY2VJZGVudGlmaWNhdGlvbkpzb24udGl0bGU7XG4gICAgICB0aGlzLl9hYnN0cmFjdFZhbHVlID0gc2VydmljZUlkZW50aWZpY2F0aW9uSnNvbi5hYnN0cmFjdFZhbHVlO1xuICAgICAgdGhpcy5fa2V5d29yZHMgPSBuZXcgQXJyYXk8c3RyaW5nPigpO1xuICAgICAgc2VydmljZUlkZW50aWZpY2F0aW9uSnNvbi5rZXl3b3Jkcz8uZm9yRWFjaCggKGU6IHN0cmluZykgPT4ge1xuICAgICAgICB0aGlzLl9rZXl3b3Jkcy5wdXNoKGUpO1xuICAgICAgfSk7XG4gICAgICB0aGlzLl9zZXJ2aWNlVHlwZSA9IHNlcnZpY2VJZGVudGlmaWNhdGlvbkpzb24uc2VydmljZVR5cGU7XG4gICAgICB0aGlzLl9zZXJ2aWNlVHlwZVZlcnNpb25zID0gbmV3IEFycmF5PHN0cmluZz4oKTtcbiAgICAgIHNlcnZpY2VJZGVudGlmaWNhdGlvbkpzb24uc2VydmljZVR5cGVWZXJzaW9ucz8uZm9yRWFjaCggKGU6IHN0cmluZykgPT4ge1xuICAgICAgICB0aGlzLl9zZXJ2aWNlVHlwZVZlcnNpb25zLnB1c2goZSk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuX2ZlZXMgPSAgc2VydmljZUlkZW50aWZpY2F0aW9uSnNvbi5mZWVzO1xuICAgICAgdGhpcy5fYWNjZXNzQ29uc3RyYWludHMgPSBzZXJ2aWNlSWRlbnRpZmljYXRpb25Kc29uLmFjY2Vzc0NvbnN0cmFpbnRzO1xuICAgIH1cbiAgfVxuXG4gIGdldCB0aXRsZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl90aXRsZTtcbiAgfVxuXG4gIGdldCBhYnN0cmFjdFZhbHVlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2Fic3RyYWN0VmFsdWU7XG4gIH1cblxuICBnZXQga2V5d29yZHMoKTogc3RyaW5nW10ge1xuICAgIHJldHVybiB0aGlzLl9rZXl3b3JkcztcbiAgfVxuXG4gIGdldCBzZXJ2aWNlVHlwZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9zZXJ2aWNlVHlwZTtcbiAgfVxuXG4gIGdldCBzZXJ2aWNlVHlwZVZlcnNpb25zKCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gdGhpcy5fc2VydmljZVR5cGVWZXJzaW9ucztcbiAgfVxuXG4gIGdldCBmZWVzKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2ZlZXM7XG4gIH1cblxuICBnZXQgYWNjZXNzQ29uc3RyYWludHMoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fYWNjZXNzQ29uc3RyYWludHM7XG4gIH1cbn1cbiJdfQ==