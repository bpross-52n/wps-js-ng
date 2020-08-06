export class Format {
    constructor(formatResponse) {
        if (formatResponse != null) {
            this._mimeType = formatResponse.mimeType;
            this._encoding = formatResponse.encoding;
            this._schema = formatResponse.schema;
        }
    }
    get mimeType() {
        return this._mimeType;
    }
    get encoding() {
        return this._encoding;
    }
    get schema() {
        return this._schema;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvd3BzLW5nL3NyYy9tb2RlbC9wcm9jZXNzLmRlc2NyaXB0aW9uL2Zvcm1hdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLE9BQU8sTUFBTTtJQUtqQixZQUFZLGNBQW1CO1FBQzdCLElBQUssY0FBYyxJQUFJLElBQUksRUFBQztZQUMxQixJQUFJLENBQUMsU0FBUyxHQUFHLGNBQWMsQ0FBQyxRQUFRLENBQUM7WUFDekMsSUFBSSxDQUFDLFNBQVMsR0FBRyxjQUFjLENBQUMsUUFBUSxDQUFDO1lBQ3pDLElBQUksQ0FBQyxPQUFPLEdBQUcsY0FBYyxDQUFDLE1BQU0sQ0FBQztTQUN0QztJQUNILENBQUM7SUFFRCxJQUFJLFFBQVE7UUFDVixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDeEIsQ0FBQztJQUVELElBQUksUUFBUTtRQUNWLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN4QixDQUFDO0lBRUQsSUFBSSxNQUFNO1FBQ1IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3RCLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBGb3JtYXQge1xuICBwcml2YXRlIHJlYWRvbmx5IF9taW1lVHlwZTogc3RyaW5nO1xuICBwcml2YXRlIHJlYWRvbmx5IF9lbmNvZGluZzogc3RyaW5nO1xuICBwcml2YXRlIHJlYWRvbmx5IF9zY2hlbWE6IHN0cmluZztcblxuICBjb25zdHJ1Y3Rvcihmb3JtYXRSZXNwb25zZTogYW55KSB7XG4gICAgaWYgKCBmb3JtYXRSZXNwb25zZSAhPSBudWxsKXtcbiAgICAgIHRoaXMuX21pbWVUeXBlID0gZm9ybWF0UmVzcG9uc2UubWltZVR5cGU7XG4gICAgICB0aGlzLl9lbmNvZGluZyA9IGZvcm1hdFJlc3BvbnNlLmVuY29kaW5nO1xuICAgICAgdGhpcy5fc2NoZW1hID0gZm9ybWF0UmVzcG9uc2Uuc2NoZW1hO1xuICAgIH1cbiAgfVxuXG4gIGdldCBtaW1lVHlwZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9taW1lVHlwZTtcbiAgfVxuXG4gIGdldCBlbmNvZGluZygpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9lbmNvZGluZztcbiAgfVxuXG4gIGdldCBzY2hlbWEoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fc2NoZW1hO1xuICB9XG59XG4iXX0=