import { Format } from './format';
export class BBoxData {
    constructor(bboxDataResponse) {
        var _a, _b;
        if (bboxDataResponse != null) {
            this._formats = new Array();
            (_a = bboxDataResponse.formats) === null || _a === void 0 ? void 0 : _a.forEach(e => {
                this._formats.push(new Format(e));
            });
            this._supportedCRSs = new Array();
            (_b = bboxDataResponse.supportedCRSs) === null || _b === void 0 ? void 0 : _b.forEach(e => {
                this._supportedCRSs.push(e);
            });
        }
    }
    get supportedCRSs() {
        return this._supportedCRSs;
    }
    get formats() {
        return this._formats;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYi1ib3gtZGF0YS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3dwcy1uZy9zcmMvbW9kZWwvcHJvY2Vzcy5kZXNjcmlwdGlvbi9iLWJveC1kYXRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxNQUFNLEVBQUMsTUFBTSxVQUFVLENBQUM7QUFFaEMsTUFBTSxPQUFPLFFBQVE7SUFJbkIsWUFBWSxnQkFBcUI7O1FBQy9CLElBQUksZ0JBQWdCLElBQUksSUFBSSxFQUFDO1lBQzNCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxLQUFLLEVBQVUsQ0FBQztZQUNwQyxNQUFBLGdCQUFnQixDQUFDLE9BQU8sMENBQUUsT0FBTyxDQUFFLENBQUMsQ0FBQyxFQUFFO2dCQUNyQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3BDLENBQUMsRUFBRTtZQUVILElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxLQUFLLEVBQVUsQ0FBQztZQUMxQyxNQUFBLGdCQUFnQixDQUFDLGFBQWEsMENBQUUsT0FBTyxDQUFFLENBQUMsQ0FBQyxFQUFFO2dCQUMzQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM5QixDQUFDLEVBQUU7U0FDSjtJQUNILENBQUM7SUFHRCxJQUFJLGFBQWE7UUFDZixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7SUFDN0IsQ0FBQztJQUVELElBQUksT0FBTztRQUNULE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN2QixDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0Zvcm1hdH0gZnJvbSAnLi9mb3JtYXQnO1xuXG5leHBvcnQgY2xhc3MgQkJveERhdGEge1xuICBwcml2YXRlIHJlYWRvbmx5IF9mb3JtYXRzOiBGb3JtYXRbXTtcbiAgcHJpdmF0ZSByZWFkb25seSBfc3VwcG9ydGVkQ1JTczogc3RyaW5nW107XG5cbiAgY29uc3RydWN0b3IoYmJveERhdGFSZXNwb25zZTogYW55KSB7XG4gICAgaWYgKGJib3hEYXRhUmVzcG9uc2UgIT0gbnVsbCl7XG4gICAgICB0aGlzLl9mb3JtYXRzID0gbmV3IEFycmF5PEZvcm1hdD4oKTtcbiAgICAgIGJib3hEYXRhUmVzcG9uc2UuZm9ybWF0cz8uZm9yRWFjaCggZSA9PiB7XG4gICAgICAgIHRoaXMuX2Zvcm1hdHMucHVzaChuZXcgRm9ybWF0KGUpKTtcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLl9zdXBwb3J0ZWRDUlNzID0gbmV3IEFycmF5PHN0cmluZz4oKTtcbiAgICAgIGJib3hEYXRhUmVzcG9uc2Uuc3VwcG9ydGVkQ1JTcz8uZm9yRWFjaCggZSA9PiB7XG4gICAgICAgIHRoaXMuX3N1cHBvcnRlZENSU3MucHVzaChlKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG5cbiAgZ2V0IHN1cHBvcnRlZENSU3MoKTogc3RyaW5nW10ge1xuICAgIHJldHVybiB0aGlzLl9zdXBwb3J0ZWRDUlNzO1xuICB9XG5cbiAgZ2V0IGZvcm1hdHMoKTogRm9ybWF0W10ge1xuICAgIHJldHVybiB0aGlzLl9mb3JtYXRzO1xuICB9XG59XG4iXX0=