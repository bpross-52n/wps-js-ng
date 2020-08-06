export class LiteralDataInput {
    /**
     * the following parameters are mandatory: identifier and value
     *
     * the rest might be set to 'undefined'!
     *
     * @identifier input-request identifier
     * @dataType data type of the input-request; may be 'undefined'
     * @uom unit of measure; may be 'undefined'
     * @value the literal value of the input-request
     */
    constructor(identifier, dataType, uom, value) {
        this.type = 'literal';
        this.identifier = identifier;
        this.dataType = dataType;
        this.uom = uom;
        this.value = value;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGl0ZXJhbC1kYXRhLWlucHV0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvd3BzLW5nL3NyYy9tb2RlbC9leGVjdXRlLnByb2Nlc3MvcmVxdWVzdC9pbnB1dC9saXRlcmFsLWRhdGEtaW5wdXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsTUFBTSxPQUFPLGdCQUFnQjtJQU8zQjs7Ozs7Ozs7O09BU0c7SUFDSCxZQUFZLFVBQWtCLEVBQUUsUUFBZ0IsRUFBRSxHQUFXLEVBQUUsS0FBYTtRQUMxRSxJQUFJLENBQUMsSUFBSSxHQUFHLFNBQVMsQ0FBQztRQUN0QixJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztRQUM3QixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNmLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3JCLENBQUM7Q0FFRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RGF0YUlucHV0fSBmcm9tICcuL2RhdGEtaW5wdXQnO1xuXG5leHBvcnQgY2xhc3MgTGl0ZXJhbERhdGFJbnB1dCBpbXBsZW1lbnRzIERhdGFJbnB1dHtcbiAgdHlwZTogc3RyaW5nO1xuICBpZGVudGlmaWVyOiBzdHJpbmc7XG4gIGRhdGFUeXBlOiBzdHJpbmc7XG4gIHVvbTogc3RyaW5nO1xuICB2YWx1ZTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiB0aGUgZm9sbG93aW5nIHBhcmFtZXRlcnMgYXJlIG1hbmRhdG9yeTogaWRlbnRpZmllciBhbmQgdmFsdWVcbiAgICpcbiAgICogdGhlIHJlc3QgbWlnaHQgYmUgc2V0IHRvICd1bmRlZmluZWQnIVxuICAgKlxuICAgKiBAaWRlbnRpZmllciBpbnB1dC1yZXF1ZXN0IGlkZW50aWZpZXJcbiAgICogQGRhdGFUeXBlIGRhdGEgdHlwZSBvZiB0aGUgaW5wdXQtcmVxdWVzdDsgbWF5IGJlICd1bmRlZmluZWQnXG4gICAqIEB1b20gdW5pdCBvZiBtZWFzdXJlOyBtYXkgYmUgJ3VuZGVmaW5lZCdcbiAgICogQHZhbHVlIHRoZSBsaXRlcmFsIHZhbHVlIG9mIHRoZSBpbnB1dC1yZXF1ZXN0XG4gICAqL1xuICBjb25zdHJ1Y3RvcihpZGVudGlmaWVyOiBzdHJpbmcsIGRhdGFUeXBlOiBzdHJpbmcsIHVvbTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy50eXBlID0gJ2xpdGVyYWwnO1xuICAgIHRoaXMuaWRlbnRpZmllciA9IGlkZW50aWZpZXI7XG4gICAgdGhpcy5kYXRhVHlwZSA9IGRhdGFUeXBlO1xuICAgIHRoaXMudW9tID0gdW9tO1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgfVxuXG59XG4iXX0=