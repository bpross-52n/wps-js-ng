export class Status {
    constructor(statusJson) {
        if (statusJson != null) {
            this._creationTime = statusJson.creationTime;
            this._info = statusJson.info;
        }
    }
    get creationTime() {
        return this._creationTime;
    }
    get info() {
        return this._info;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdHVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvd3BzLW5nL3NyYy9tb2RlbC9leGVjdXRlLnByb2Nlc3MvcmVzcG9uc2Uvc3RhdHVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE1BQU0sT0FBTyxNQUFNO0lBSWpCLFlBQVksVUFBZTtRQUN6QixJQUFJLFVBQVUsSUFBSSxJQUFJLEVBQUM7WUFDckIsSUFBSSxDQUFDLGFBQWEsR0FBRyxVQUFVLENBQUMsWUFBWSxDQUFDO1lBQzdDLElBQUksQ0FBQyxLQUFLLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQztTQUM5QjtJQUNILENBQUM7SUFFRCxJQUFJLFlBQVk7UUFDZCxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDNUIsQ0FBQztJQUVELElBQUksSUFBSTtRQUNOLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNwQixDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJcbmV4cG9ydCBjbGFzcyBTdGF0dXMge1xuICBwcml2YXRlIHJlYWRvbmx5IF9jcmVhdGlvblRpbWU6IERhdGU7XG4gIHByaXZhdGUgcmVhZG9ubHkgX2luZm86IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihzdGF0dXNKc29uOiBhbnkpIHtcbiAgICBpZiAoc3RhdHVzSnNvbiAhPSBudWxsKXtcbiAgICAgIHRoaXMuX2NyZWF0aW9uVGltZSA9IHN0YXR1c0pzb24uY3JlYXRpb25UaW1lO1xuICAgICAgdGhpcy5faW5mbyA9IHN0YXR1c0pzb24uaW5mbztcbiAgICB9XG4gIH1cblxuICBnZXQgY3JlYXRpb25UaW1lKCk6IERhdGUge1xuICAgIHJldHVybiB0aGlzLl9jcmVhdGlvblRpbWU7XG4gIH1cblxuICBnZXQgaW5mbygpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9pbmZvO1xuICB9XG59XG4iXX0=