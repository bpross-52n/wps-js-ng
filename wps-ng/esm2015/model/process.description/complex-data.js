import { Format } from './format';
export class ComplexData {
    constructor(complexDataResponse) {
        var _a;
        if (complexDataResponse != null) {
            this._formats = new Array();
            (_a = complexDataResponse.formats) === null || _a === void 0 ? void 0 : _a.forEach(e => {
                this._formats.push(new Format(e));
            });
        }
    }
    get formats() {
        return this._formats;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGxleC1kYXRhLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvd3BzLW5nL3NyYy9tb2RlbC9wcm9jZXNzLmRlc2NyaXB0aW9uL2NvbXBsZXgtZGF0YS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsTUFBTSxFQUFDLE1BQU0sVUFBVSxDQUFDO0FBRWhDLE1BQU0sT0FBTyxXQUFXO0lBR3RCLFlBQVksbUJBQXdCOztRQUNsQyxJQUFJLG1CQUFtQixJQUFJLElBQUksRUFBQztZQUM5QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksS0FBSyxFQUFVLENBQUM7WUFDcEMsTUFBQSxtQkFBbUIsQ0FBQyxPQUFPLDBDQUFFLE9BQU8sQ0FBRSxDQUFDLENBQUMsRUFBRTtnQkFDeEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNwQyxDQUFDLEVBQUU7U0FDSjtJQUNILENBQUM7SUFFRCxJQUFJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdkIsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtGb3JtYXR9IGZyb20gJy4vZm9ybWF0JztcblxuZXhwb3J0IGNsYXNzIENvbXBsZXhEYXRhIHtcbiAgcHJpdmF0ZSByZWFkb25seSBfZm9ybWF0czogRm9ybWF0W107XG5cbiAgY29uc3RydWN0b3IoY29tcGxleERhdGFSZXNwb25zZTogYW55KSB7XG4gICAgaWYgKGNvbXBsZXhEYXRhUmVzcG9uc2UgIT0gbnVsbCl7XG4gICAgICB0aGlzLl9mb3JtYXRzID0gbmV3IEFycmF5PEZvcm1hdD4oKTtcbiAgICAgIGNvbXBsZXhEYXRhUmVzcG9uc2UuZm9ybWF0cz8uZm9yRWFjaCggZSA9PiB7XG4gICAgICAgIHRoaXMuX2Zvcm1hdHMucHVzaChuZXcgRm9ybWF0KGUpKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGdldCBmb3JtYXRzKCk6IEZvcm1hdFtdIHtcbiAgICByZXR1cm4gdGhpcy5fZm9ybWF0cztcbiAgfVxufVxuXG4iXX0=