export class ComplexDataInput {
    /**
     * the following parameters are mandatory: identifier and
     * complexPayload
     *
     * the rest might be set to 'undefined'!
     *
     * @identifier input-request identifier
     * @mimeType MIME type of the input-request; may be 'undefined'
     * @schema reference to a schema; may be 'undefined'
     * @encoding encoding; may be 'undefined'
     * @complexPayload the complex payload (XML tags) as String
     * @asReference boolean, either "true" or "false", indicating
     *              whether parameter body contains a URL as reference
     *              to an external body or the actual POST body
     */
    constructor(identifier, mimeType, schema, encoding, asReference = false, complexPayload) {
        this.type = 'complex';
        this.identifier = identifier;
        this.mimeType = mimeType;
        this.schema = schema;
        this.encoding = encoding;
        this.asReference = asReference;
        this.complexPayload = complexPayload;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGxleC1kYXRhLWlucHV0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvd3BzLW5nL3NyYy9tb2RlbC9leGVjdXRlLnByb2Nlc3MvcmVxdWVzdC9pbnB1dC9jb21wbGV4LWRhdGEtaW5wdXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsTUFBTSxPQUFPLGdCQUFnQjtJQVMzQjs7Ozs7Ozs7Ozs7Ozs7T0FjRztJQUdILFlBQVksVUFBa0IsRUFBRSxRQUFnQixFQUNwQyxNQUFjLEVBQUUsUUFBZ0IsRUFDaEMsY0FBdUIsS0FBSyxFQUFFLGNBQW1CO1FBQzNELElBQUksQ0FBQyxJQUFJLEdBQUcsU0FBUyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1FBQzdCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1FBQy9CLElBQUksQ0FBQyxjQUFjLEdBQUcsY0FBYyxDQUFDO0lBQ3ZDLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RGF0YUlucHV0fSBmcm9tICcuL2RhdGEtaW5wdXQnO1xuXG5leHBvcnQgY2xhc3MgQ29tcGxleERhdGFJbnB1dCBpbXBsZW1lbnRzIERhdGFJbnB1dHtcbiAgdHlwZTogc3RyaW5nO1xuICBpZGVudGlmaWVyOiBzdHJpbmc7XG4gIG1pbWVUeXBlOiBzdHJpbmc7XG4gIHNjaGVtYTogc3RyaW5nO1xuICBlbmNvZGluZzogc3RyaW5nO1xuICBhc1JlZmVyZW5jZTogYm9vbGVhbjtcbiAgY29tcGxleFBheWxvYWQ6IGFueTtcblxuICAvKipcbiAgICogdGhlIGZvbGxvd2luZyBwYXJhbWV0ZXJzIGFyZSBtYW5kYXRvcnk6IGlkZW50aWZpZXIgYW5kXG4gICAqIGNvbXBsZXhQYXlsb2FkXG4gICAqXG4gICAqIHRoZSByZXN0IG1pZ2h0IGJlIHNldCB0byAndW5kZWZpbmVkJyFcbiAgICpcbiAgICogQGlkZW50aWZpZXIgaW5wdXQtcmVxdWVzdCBpZGVudGlmaWVyXG4gICAqIEBtaW1lVHlwZSBNSU1FIHR5cGUgb2YgdGhlIGlucHV0LXJlcXVlc3Q7IG1heSBiZSAndW5kZWZpbmVkJ1xuICAgKiBAc2NoZW1hIHJlZmVyZW5jZSB0byBhIHNjaGVtYTsgbWF5IGJlICd1bmRlZmluZWQnXG4gICAqIEBlbmNvZGluZyBlbmNvZGluZzsgbWF5IGJlICd1bmRlZmluZWQnXG4gICAqIEBjb21wbGV4UGF5bG9hZCB0aGUgY29tcGxleCBwYXlsb2FkIChYTUwgdGFncykgYXMgU3RyaW5nXG4gICAqIEBhc1JlZmVyZW5jZSBib29sZWFuLCBlaXRoZXIgXCJ0cnVlXCIgb3IgXCJmYWxzZVwiLCBpbmRpY2F0aW5nXG4gICAqICAgICAgICAgICAgICB3aGV0aGVyIHBhcmFtZXRlciBib2R5IGNvbnRhaW5zIGEgVVJMIGFzIHJlZmVyZW5jZVxuICAgKiAgICAgICAgICAgICAgdG8gYW4gZXh0ZXJuYWwgYm9keSBvciB0aGUgYWN0dWFsIFBPU1QgYm9keVxuICAgKi9cblxuXG4gIGNvbnN0cnVjdG9yKGlkZW50aWZpZXI6IHN0cmluZywgbWltZVR5cGU6IHN0cmluZyxcbiAgICAgICAgICAgICAgc2NoZW1hOiBzdHJpbmcsIGVuY29kaW5nOiBzdHJpbmcsXG4gICAgICAgICAgICAgIGFzUmVmZXJlbmNlOiBib29sZWFuID0gZmFsc2UsIGNvbXBsZXhQYXlsb2FkOiBhbnkpIHtcbiAgICB0aGlzLnR5cGUgPSAnY29tcGxleCc7XG4gICAgdGhpcy5pZGVudGlmaWVyID0gaWRlbnRpZmllcjtcbiAgICB0aGlzLm1pbWVUeXBlID0gbWltZVR5cGU7XG4gICAgdGhpcy5zY2hlbWEgPSBzY2hlbWE7XG4gICAgdGhpcy5lbmNvZGluZyA9IGVuY29kaW5nO1xuICAgIHRoaXMuYXNSZWZlcmVuY2UgPSBhc1JlZmVyZW5jZTtcbiAgICB0aGlzLmNvbXBsZXhQYXlsb2FkID0gY29tcGxleFBheWxvYWQ7XG4gIH1cbn1cbiJdfQ==