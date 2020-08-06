import { LiteralData } from './literal-data';
import { ComplexData } from './complex-data';
import { BBoxData } from './b-box-data';
export class Input {
    constructor(inputResponse) {
        if (inputResponse != null) {
            this._title = inputResponse.title;
            this._abstractValue = inputResponse.abstractValue;
            this._identifier = inputResponse.identifier;
            this._minOccurs = inputResponse.minOccurs;
            this._maxOccurs = inputResponse.maxOccurs;
            if (inputResponse.literalData !== undefined) {
                this._literalData = new LiteralData(inputResponse.literalData);
            }
            else if (inputResponse.complexData !== undefined) {
                this._complexData = new ComplexData(inputResponse.complexData);
            }
            else if (inputResponse.boundingBoxData !== undefined) {
                this._bboxData = new BBoxData(inputResponse.boundingBoxData);
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
    get minOccurs() {
        return this._minOccurs;
    }
    get maxOccurs() {
        return this._maxOccurs;
    }
    get literalData() {
        return this._literalData;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy93cHMtbmcvc3JjL21vZGVsL3Byb2Nlc3MuZGVzY3JpcHRpb24vaW5wdXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sY0FBYyxDQUFDO0FBRXRDLE1BQU0sT0FBTyxLQUFLO0lBVWhCLFlBQVksYUFBa0I7UUFDNUIsSUFBSSxhQUFhLElBQUksSUFBSSxFQUFDO1lBQ3hCLElBQUksQ0FBQyxNQUFNLEdBQUcsYUFBYSxDQUFDLEtBQUssQ0FBQztZQUNsQyxJQUFJLENBQUMsY0FBYyxHQUFHLGFBQWEsQ0FBQyxhQUFhLENBQUM7WUFDbEQsSUFBSSxDQUFDLFdBQVcsR0FBRyxhQUFhLENBQUMsVUFBVSxDQUFDO1lBQzVDLElBQUksQ0FBQyxVQUFVLEdBQUcsYUFBYSxDQUFDLFNBQVMsQ0FBQztZQUMxQyxJQUFJLENBQUMsVUFBVSxHQUFHLGFBQWEsQ0FBQyxTQUFTLENBQUM7WUFDMUMsSUFBSSxhQUFhLENBQUMsV0FBVyxLQUFLLFNBQVMsRUFBRTtnQkFDM0MsSUFBSSxDQUFDLFlBQVksR0FBSSxJQUFJLFdBQVcsQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLENBQUM7YUFDakU7aUJBQ0ksSUFBSSxhQUFhLENBQUMsV0FBVyxLQUFLLFNBQVMsRUFBRTtnQkFDaEQsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLFdBQVcsQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLENBQUM7YUFDaEU7aUJBQ0ksSUFBSSxhQUFhLENBQUMsZUFBZSxLQUFLLFNBQVMsRUFBRTtnQkFDcEQsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLFFBQVEsQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDLENBQUM7YUFDOUQ7U0FDRjtJQUNILENBQUM7SUFFRCxJQUFJLEtBQUs7UUFDUCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckIsQ0FBQztJQUVELElBQUksYUFBYTtRQUNmLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztJQUM3QixDQUFDO0lBRUQsSUFBSSxVQUFVO1FBQ1osT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzFCLENBQUM7SUFFRCxJQUFJLFNBQVM7UUFDWCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDekIsQ0FBQztJQUVELElBQUksU0FBUztRQUNYLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN6QixDQUFDO0lBRUQsSUFBSSxXQUFXO1FBQ2IsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQzNCLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TGl0ZXJhbERhdGF9IGZyb20gJy4vbGl0ZXJhbC1kYXRhJztcbmltcG9ydCB7Q29tcGxleERhdGF9IGZyb20gJy4vY29tcGxleC1kYXRhJztcbmltcG9ydCB7QkJveERhdGF9IGZyb20gJy4vYi1ib3gtZGF0YSc7XG5cbmV4cG9ydCBjbGFzcyBJbnB1dCB7XG4gIHByaXZhdGUgcmVhZG9ubHkgX3RpdGxlOiBzdHJpbmc7XG4gIHByaXZhdGUgcmVhZG9ubHkgX2Fic3RyYWN0VmFsdWU6IHN0cmluZztcbiAgcHJpdmF0ZSByZWFkb25seSBfaWRlbnRpZmllcjogc3RyaW5nO1xuICBwcml2YXRlIHJlYWRvbmx5IF9taW5PY2N1cnM6IHN0cmluZztcbiAgcHJpdmF0ZSByZWFkb25seSBfbWF4T2NjdXJzOiBzdHJpbmc7XG4gIHByaXZhdGUgcmVhZG9ubHkgX2xpdGVyYWxEYXRhOiBMaXRlcmFsRGF0YTtcbiAgcHJpdmF0ZSByZWFkb25seSBfY29tcGxleERhdGE6IENvbXBsZXhEYXRhO1xuICBwcml2YXRlIHJlYWRvbmx5IF9iYm94RGF0YTogQkJveERhdGE7XG5cbiAgY29uc3RydWN0b3IoaW5wdXRSZXNwb25zZTogYW55KSB7XG4gICAgaWYgKGlucHV0UmVzcG9uc2UgIT0gbnVsbCl7XG4gICAgICB0aGlzLl90aXRsZSA9IGlucHV0UmVzcG9uc2UudGl0bGU7XG4gICAgICB0aGlzLl9hYnN0cmFjdFZhbHVlID0gaW5wdXRSZXNwb25zZS5hYnN0cmFjdFZhbHVlO1xuICAgICAgdGhpcy5faWRlbnRpZmllciA9IGlucHV0UmVzcG9uc2UuaWRlbnRpZmllcjtcbiAgICAgIHRoaXMuX21pbk9jY3VycyA9IGlucHV0UmVzcG9uc2UubWluT2NjdXJzO1xuICAgICAgdGhpcy5fbWF4T2NjdXJzID0gaW5wdXRSZXNwb25zZS5tYXhPY2N1cnM7XG4gICAgICBpZiAoaW5wdXRSZXNwb25zZS5saXRlcmFsRGF0YSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuX2xpdGVyYWxEYXRhID0gIG5ldyBMaXRlcmFsRGF0YShpbnB1dFJlc3BvbnNlLmxpdGVyYWxEYXRhKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKGlucHV0UmVzcG9uc2UuY29tcGxleERhdGEgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLl9jb21wbGV4RGF0YSA9IG5ldyBDb21wbGV4RGF0YShpbnB1dFJlc3BvbnNlLmNvbXBsZXhEYXRhKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKGlucHV0UmVzcG9uc2UuYm91bmRpbmdCb3hEYXRhICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5fYmJveERhdGEgPSBuZXcgQkJveERhdGEoaW5wdXRSZXNwb25zZS5ib3VuZGluZ0JveERhdGEpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGdldCB0aXRsZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl90aXRsZTtcbiAgfVxuXG4gIGdldCBhYnN0cmFjdFZhbHVlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2Fic3RyYWN0VmFsdWU7XG4gIH1cblxuICBnZXQgaWRlbnRpZmllcigpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9pZGVudGlmaWVyO1xuICB9XG5cbiAgZ2V0IG1pbk9jY3VycygpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9taW5PY2N1cnM7XG4gIH1cblxuICBnZXQgbWF4T2NjdXJzKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX21heE9jY3VycztcbiAgfVxuXG4gIGdldCBsaXRlcmFsRGF0YSgpOiBMaXRlcmFsRGF0YSB7XG4gICAgcmV0dXJuIHRoaXMuX2xpdGVyYWxEYXRhO1xuICB9XG59XG4iXX0=