export class ComplexDataOutput {
    /**
     * the following parameters are mandatory: identifier
     *
     * the rest might be set to 'undefined'!
     *
     * @identifier output-request identifier
     * @mimeType MIME type of the input; may be 'undefined'
     * @schema reference to a schema; may be 'undefined'
     * @encoding encoding; may be 'undefined'
     * @uom unit of measure; may be 'undefined'
     * @asReference boolean, "true" or "false"
     * @title new title
     * @abstractValue new description as text of the 'Abstract' element
     * 				  of the response document
     * @transmission either "value" or "reference"
     */
    constructor(identifier, mimeType, schema, encoding, uom, asReference = false, title, abstractValue, value, transmission) {
        this.type = 'complex';
        this.identifier = identifier;
        this.mimeType = mimeType;
        this.schema = schema;
        this.encoding = encoding;
        this.uom = uom;
        this.asReference = asReference;
        this.title = title;
        this.abstractValue = abstractValue;
        this.value = value;
        if (transmission === undefined) {
            this.transmission = 'value';
        }
        else {
            this.transmission = transmission;
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGxleC1kYXRhLW91dHB1dC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3dwcy1uZy9zcmMvbW9kZWwvZXhlY3V0ZS5wcm9jZXNzL3JlcXVlc3Qvb3V0cHV0L2NvbXBsZXgtZGF0YS1vdXRwdXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsTUFBTSxPQUFPLGlCQUFpQjtJQWE1Qjs7Ozs7Ozs7Ozs7Ozs7O09BZUc7SUFHSCxZQUFZLFVBQWtCLEVBQUUsUUFBZ0IsRUFBRSxNQUFjLEVBQUUsUUFBZ0IsRUFDdEUsR0FBVyxFQUFFLGNBQXVCLEtBQUssRUFBRSxLQUFhLEVBQUUsYUFBa0IsRUFBRSxLQUFXLEVBQUUsWUFBcUI7UUFDMUgsSUFBSSxDQUFDLElBQUksR0FBRyxTQUFTLENBQUM7UUFDdEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7UUFDN0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDZixJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztRQUMvQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztRQUNuQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLFlBQVksS0FBSyxTQUFTLEVBQUU7WUFDOUIsSUFBSSxDQUFDLFlBQVksR0FBRyxPQUFPLENBQUM7U0FDN0I7YUFDSTtZQUNILElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO1NBQ2xDO0lBQ0gsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEYXRhT3V0cHV0fSBmcm9tICcuL2RhdGEtb3V0cHV0JztcblxuZXhwb3J0IGNsYXNzIENvbXBsZXhEYXRhT3V0cHV0IGltcGxlbWVudHMgIERhdGFPdXRwdXQge1xuICB0eXBlOiBzdHJpbmc7XG4gIGlkZW50aWZpZXI6IHN0cmluZztcbiAgbWltZVR5cGU6IHN0cmluZztcbiAgc2NoZW1hOiBzdHJpbmc7XG4gIGVuY29kaW5nOiBzdHJpbmc7XG4gIHVvbTogc3RyaW5nO1xuICBhc1JlZmVyZW5jZTogYm9vbGVhbjtcbiAgdGl0bGU6IHN0cmluZztcbiAgYWJzdHJhY3RWYWx1ZTogYW55O1xuICB2YWx1ZTogYW55O1xuICB0cmFuc21pc3Npb246IHN0cmluZztcblxuICAvKipcbiAgICogdGhlIGZvbGxvd2luZyBwYXJhbWV0ZXJzIGFyZSBtYW5kYXRvcnk6IGlkZW50aWZpZXJcbiAgICpcbiAgICogdGhlIHJlc3QgbWlnaHQgYmUgc2V0IHRvICd1bmRlZmluZWQnIVxuICAgKlxuICAgKiBAaWRlbnRpZmllciBvdXRwdXQtcmVxdWVzdCBpZGVudGlmaWVyXG4gICAqIEBtaW1lVHlwZSBNSU1FIHR5cGUgb2YgdGhlIGlucHV0OyBtYXkgYmUgJ3VuZGVmaW5lZCdcbiAgICogQHNjaGVtYSByZWZlcmVuY2UgdG8gYSBzY2hlbWE7IG1heSBiZSAndW5kZWZpbmVkJ1xuICAgKiBAZW5jb2RpbmcgZW5jb2Rpbmc7IG1heSBiZSAndW5kZWZpbmVkJ1xuICAgKiBAdW9tIHVuaXQgb2YgbWVhc3VyZTsgbWF5IGJlICd1bmRlZmluZWQnXG4gICAqIEBhc1JlZmVyZW5jZSBib29sZWFuLCBcInRydWVcIiBvciBcImZhbHNlXCJcbiAgICogQHRpdGxlIG5ldyB0aXRsZVxuICAgKiBAYWJzdHJhY3RWYWx1ZSBuZXcgZGVzY3JpcHRpb24gYXMgdGV4dCBvZiB0aGUgJ0Fic3RyYWN0JyBlbGVtZW50XG4gICAqIFx0XHRcdFx0ICBvZiB0aGUgcmVzcG9uc2UgZG9jdW1lbnRcbiAgICogQHRyYW5zbWlzc2lvbiBlaXRoZXIgXCJ2YWx1ZVwiIG9yIFwicmVmZXJlbmNlXCJcbiAgICovXG5cblxuICBjb25zdHJ1Y3RvcihpZGVudGlmaWVyOiBzdHJpbmcsIG1pbWVUeXBlOiBzdHJpbmcsIHNjaGVtYTogc3RyaW5nLCBlbmNvZGluZzogc3RyaW5nLFxuICAgICAgICAgICAgICB1b206IHN0cmluZywgYXNSZWZlcmVuY2U6IGJvb2xlYW4gPSBmYWxzZSwgdGl0bGU6IHN0cmluZywgYWJzdHJhY3RWYWx1ZTogYW55LCB2YWx1ZT86IGFueSwgdHJhbnNtaXNzaW9uPzogc3RyaW5nKSB7XG4gICAgdGhpcy50eXBlID0gJ2NvbXBsZXgnO1xuICAgIHRoaXMuaWRlbnRpZmllciA9IGlkZW50aWZpZXI7XG4gICAgdGhpcy5taW1lVHlwZSA9IG1pbWVUeXBlO1xuICAgIHRoaXMuc2NoZW1hID0gc2NoZW1hO1xuICAgIHRoaXMuZW5jb2RpbmcgPSBlbmNvZGluZztcbiAgICB0aGlzLnVvbSA9IHVvbTtcbiAgICB0aGlzLmFzUmVmZXJlbmNlID0gYXNSZWZlcmVuY2U7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuYWJzdHJhY3RWYWx1ZSA9IGFic3RyYWN0VmFsdWU7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIGlmICh0cmFuc21pc3Npb24gPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy50cmFuc21pc3Npb24gPSAndmFsdWUnO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMudHJhbnNtaXNzaW9uID0gdHJhbnNtaXNzaW9uO1xuICAgIH1cbiAgfVxufVxuIl19