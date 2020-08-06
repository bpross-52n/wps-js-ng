export class HTTP {
    constructor(HTTPJson) {
        if (HTTPJson != null) {
            this._name = HTTPJson.name;
            this._get = HTTPJson.get;
            this._post = HTTPJson.post;
        }
    }
    get name() {
        return this._name;
    }
    get get() {
        return this._get;
    }
    get post() {
        return this._post;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3dwcy1uZy9zcmMvbW9kZWwvY2FwYWJpbGl0aWVzL2h0dHAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxPQUFPLElBQUk7SUFNZixZQUFZLFFBQWE7UUFDdkIsSUFBSSxRQUFRLElBQUksSUFBSSxFQUNwQjtZQUNFLElBQUksQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQztZQUMzQixJQUFJLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUM7WUFDekIsSUFBSSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDO1NBQzVCO0lBQ0gsQ0FBQztJQUVELElBQUksSUFBSTtRQUNOLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNwQixDQUFDO0lBRUQsSUFBSSxHQUFHO1FBQ0wsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ25CLENBQUM7SUFFRCxJQUFJLElBQUk7UUFDTixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDcEIsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIEhUVFAge1xuXG4gIHByaXZhdGUgcmVhZG9ubHkgX25hbWU6IHN0cmluZztcbiAgcHJpdmF0ZSByZWFkb25seSBfZ2V0OiBzdHJpbmc7XG4gIHByaXZhdGUgcmVhZG9ubHkgX3Bvc3Q6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihIVFRQSnNvbjogYW55KSB7XG4gICAgaWYgKEhUVFBKc29uICE9IG51bGwpXG4gICAge1xuICAgICAgdGhpcy5fbmFtZSA9IEhUVFBKc29uLm5hbWU7XG4gICAgICB0aGlzLl9nZXQgPSBIVFRQSnNvbi5nZXQ7XG4gICAgICB0aGlzLl9wb3N0ID0gSFRUUEpzb24ucG9zdDtcbiAgICB9XG4gIH1cblxuICBnZXQgbmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9uYW1lO1xuICB9XG5cbiAgZ2V0IGdldCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9nZXQ7XG4gIH1cblxuICBnZXQgcG9zdCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9wb3N0O1xuICB9XG59XG4iXX0=