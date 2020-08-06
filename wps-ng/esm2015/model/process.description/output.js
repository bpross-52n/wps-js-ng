import { ComplexData } from './complex-data';
import { LiteralData } from './literal-data';
import { BBoxData } from './b-box-data';
export class Output {
    constructor(outputResponse) {
        if (outputResponse != null) {
            this._title = outputResponse.title;
            this._abstractValue = outputResponse.abstractValue;
            this._identifier = outputResponse.identifier;
            if (outputResponse.literalData !== undefined) {
                this._literalData = new LiteralData(outputResponse.literalData);
            }
            if (outputResponse.complexData !== undefined) {
                this._complexData = new ComplexData(outputResponse.complexData);
            }
            if (outputResponse.boundingBoxData !== undefined) {
                this._bboxData = new BBoxData(outputResponse.boundingBoxData);
            }
        }
    }
    get title() {
        return this._title;
    }
    get abstractValue() {
        return this._abstractValue;
    }
    get identifier() {
        return this._identifier;
    }
    get complexData() {
        return this._complexData;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3V0cHV0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvd3BzLW5nL3NyYy9tb2RlbC9wcm9jZXNzLmRlc2NyaXB0aW9uL291dHB1dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxjQUFjLENBQUM7QUFFdEMsTUFBTSxPQUFPLE1BQU07SUFRakIsWUFBWSxjQUFtQjtRQUM3QixJQUFJLGNBQWMsSUFBSSxJQUFJLEVBQUM7WUFFekIsSUFBSSxDQUFDLE1BQU0sR0FBRyxjQUFjLENBQUMsS0FBSyxDQUFDO1lBQ25DLElBQUksQ0FBQyxjQUFjLEdBQUcsY0FBYyxDQUFDLGFBQWEsQ0FBQztZQUNuRCxJQUFJLENBQUMsV0FBVyxHQUFHLGNBQWMsQ0FBQyxVQUFVLENBQUM7WUFFN0MsSUFBSSxjQUFjLENBQUMsV0FBVyxLQUFLLFNBQVMsRUFBRTtnQkFDNUMsSUFBSSxDQUFDLFlBQVksR0FBSSxJQUFJLFdBQVcsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUM7YUFDbEU7WUFDRCxJQUFJLGNBQWMsQ0FBQyxXQUFXLEtBQUssU0FBUyxFQUFFO2dCQUM1QyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksV0FBVyxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQzthQUNqRTtZQUNELElBQUksY0FBYyxDQUFDLGVBQWUsS0FBSyxTQUFTLEVBQUU7Z0JBQ2hELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxRQUFRLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQyxDQUFDO2FBQy9EO1NBQ0Y7SUFDSCxDQUFDO0lBRUQsSUFBSSxLQUFLO1FBQ1AsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3JCLENBQUM7SUFFRCxJQUFJLGFBQWE7UUFDZixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7SUFDN0IsQ0FBQztJQUVELElBQUksVUFBVTtRQUNaLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUMxQixDQUFDO0lBRUQsSUFBSSxXQUFXO1FBQ2IsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQzNCLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBsZXhEYXRhIH0gZnJvbSAnLi9jb21wbGV4LWRhdGEnO1xuaW1wb3J0IHtMaXRlcmFsRGF0YX0gZnJvbSAnLi9saXRlcmFsLWRhdGEnO1xuaW1wb3J0IHtCQm94RGF0YX0gZnJvbSAnLi9iLWJveC1kYXRhJztcblxuZXhwb3J0IGNsYXNzIE91dHB1dCB7XG4gIHByaXZhdGUgcmVhZG9ubHkgX3RpdGxlOiBzdHJpbmc7XG4gIHByaXZhdGUgcmVhZG9ubHkgX2Fic3RyYWN0VmFsdWU6IHN0cmluZztcbiAgcHJpdmF0ZSByZWFkb25seSBfaWRlbnRpZmllcjogc3RyaW5nO1xuICBwcml2YXRlIHJlYWRvbmx5IF9jb21wbGV4RGF0YTogQ29tcGxleERhdGE7XG4gIHByaXZhdGUgcmVhZG9ubHkgX2xpdGVyYWxEYXRhOiBMaXRlcmFsRGF0YTtcbiAgcHJpdmF0ZSByZWFkb25seSBfYmJveERhdGE6IEJCb3hEYXRhO1xuXG4gIGNvbnN0cnVjdG9yKG91dHB1dFJlc3BvbnNlOiBhbnkpIHtcbiAgICBpZiAob3V0cHV0UmVzcG9uc2UgIT0gbnVsbCl7XG5cbiAgICAgIHRoaXMuX3RpdGxlID0gb3V0cHV0UmVzcG9uc2UudGl0bGU7XG4gICAgICB0aGlzLl9hYnN0cmFjdFZhbHVlID0gb3V0cHV0UmVzcG9uc2UuYWJzdHJhY3RWYWx1ZTtcbiAgICAgIHRoaXMuX2lkZW50aWZpZXIgPSBvdXRwdXRSZXNwb25zZS5pZGVudGlmaWVyO1xuXG4gICAgICBpZiAob3V0cHV0UmVzcG9uc2UubGl0ZXJhbERhdGEgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLl9saXRlcmFsRGF0YSA9ICBuZXcgTGl0ZXJhbERhdGEob3V0cHV0UmVzcG9uc2UubGl0ZXJhbERhdGEpO1xuICAgICAgfVxuICAgICAgaWYgKG91dHB1dFJlc3BvbnNlLmNvbXBsZXhEYXRhICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5fY29tcGxleERhdGEgPSBuZXcgQ29tcGxleERhdGEob3V0cHV0UmVzcG9uc2UuY29tcGxleERhdGEpO1xuICAgICAgfVxuICAgICAgaWYgKG91dHB1dFJlc3BvbnNlLmJvdW5kaW5nQm94RGF0YSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuX2Jib3hEYXRhID0gbmV3IEJCb3hEYXRhKG91dHB1dFJlc3BvbnNlLmJvdW5kaW5nQm94RGF0YSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZ2V0IHRpdGxlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3RpdGxlO1xuICB9XG5cbiAgZ2V0IGFic3RyYWN0VmFsdWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fYWJzdHJhY3RWYWx1ZTtcbiAgfVxuXG4gIGdldCBpZGVudGlmaWVyKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2lkZW50aWZpZXI7XG4gIH1cblxuICBnZXQgY29tcGxleERhdGEoKTogQ29tcGxleERhdGEge1xuICAgIHJldHVybiB0aGlzLl9jb21wbGV4RGF0YTtcbiAgfVxufVxuIl19