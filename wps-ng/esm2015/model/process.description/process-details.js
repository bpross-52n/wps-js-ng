import { Input } from './input';
import { Output } from './output';
export class ProcessDetails {
    constructor(processResponse) {
        var _a, _b;
        if (processResponse != null) {
            this._title = processResponse.title;
            this._abstractValue = processResponse.abstractValue;
            this._identifier = processResponse.identifier;
            this._inputs = new Array();
            (_a = processResponse.inputs) === null || _a === void 0 ? void 0 : _a.forEach(e => {
                this._inputs.push(new Input(e));
            });
            this._outputs = new Array();
            (_b = processResponse.outputs) === null || _b === void 0 ? void 0 : _b.forEach(e => {
                this._outputs.push(new Output(e));
            });
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
    get inputs() {
        return this._inputs;
    }
    get outputs() {
        return this._outputs;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvY2Vzcy1kZXRhaWxzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvd3BzLW5nL3NyYy9tb2RlbC9wcm9jZXNzLmRlc2NyaXB0aW9uL3Byb2Nlc3MtZGV0YWlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sU0FBUyxDQUFDO0FBQ2hDLE9BQU8sRUFBQyxNQUFNLEVBQUMsTUFBTSxVQUFVLENBQUM7QUFFaEMsTUFBTSxPQUFPLGNBQWM7SUFRekIsWUFBWSxlQUFvQjs7UUFDOUIsSUFBSSxlQUFlLElBQUksSUFBSSxFQUFDO1lBQzFCLElBQUksQ0FBQyxNQUFNLEdBQUcsZUFBZSxDQUFDLEtBQUssQ0FBQztZQUNwQyxJQUFJLENBQUMsY0FBYyxHQUFHLGVBQWUsQ0FBQyxhQUFhLENBQUM7WUFDcEQsSUFBSSxDQUFDLFdBQVcsR0FBRyxlQUFlLENBQUMsVUFBVSxDQUFDO1lBQzlDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxLQUFLLEVBQVMsQ0FBQztZQUNsQyxNQUFBLGVBQWUsQ0FBQyxNQUFNLDBDQUFFLE9BQU8sQ0FBRSxDQUFDLENBQUMsRUFBRTtnQkFDbkMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNsQyxDQUFDLEVBQUU7WUFDSCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksS0FBSyxFQUFVLENBQUM7WUFDcEMsTUFBQSxlQUFlLENBQUMsT0FBTywwQ0FBRSxPQUFPLENBQUUsQ0FBQyxDQUFDLEVBQUU7Z0JBQ3BDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDcEMsQ0FBQyxFQUFFO1NBQ0o7SUFDSCxDQUFDO0lBRUQsSUFBSSxLQUFLO1FBQ1AsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3JCLENBQUM7SUFFRCxJQUFJLGFBQWE7UUFDZixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7SUFDN0IsQ0FBQztJQUVELElBQUksVUFBVTtRQUNaLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUMxQixDQUFDO0lBRUQsSUFBSSxNQUFNO1FBQ1IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3RCLENBQUM7SUFFRCxJQUFJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdkIsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5wdXQgfSBmcm9tICcuL2lucHV0JztcbmltcG9ydCB7T3V0cHV0fSBmcm9tICcuL291dHB1dCc7XG5cbmV4cG9ydCBjbGFzcyBQcm9jZXNzRGV0YWlscyB7XG4gIHByaXZhdGUgcmVhZG9ubHkgX3RpdGxlOiBzdHJpbmc7XG4gIHByaXZhdGUgcmVhZG9ubHkgX2Fic3RyYWN0VmFsdWU6IHN0cmluZztcbiAgcHJpdmF0ZSByZWFkb25seSBfaWRlbnRpZmllcjogc3RyaW5nO1xuICBwcml2YXRlIHJlYWRvbmx5IF9pbnB1dHM6IElucHV0W107XG4gIHByaXZhdGUgcmVhZG9ubHkgX291dHB1dHM6IE91dHB1dFtdO1xuXG5cbiAgY29uc3RydWN0b3IocHJvY2Vzc1Jlc3BvbnNlOiBhbnkpIHtcbiAgICBpZiAocHJvY2Vzc1Jlc3BvbnNlICE9IG51bGwpe1xuICAgICAgdGhpcy5fdGl0bGUgPSBwcm9jZXNzUmVzcG9uc2UudGl0bGU7XG4gICAgICB0aGlzLl9hYnN0cmFjdFZhbHVlID0gcHJvY2Vzc1Jlc3BvbnNlLmFic3RyYWN0VmFsdWU7XG4gICAgICB0aGlzLl9pZGVudGlmaWVyID0gcHJvY2Vzc1Jlc3BvbnNlLmlkZW50aWZpZXI7XG4gICAgICB0aGlzLl9pbnB1dHMgPSBuZXcgQXJyYXk8SW5wdXQ+KCk7XG4gICAgICBwcm9jZXNzUmVzcG9uc2UuaW5wdXRzPy5mb3JFYWNoKCBlID0+IHtcbiAgICAgICAgdGhpcy5faW5wdXRzLnB1c2gobmV3IElucHV0KGUpKTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5fb3V0cHV0cyA9IG5ldyBBcnJheTxPdXRwdXQ+KCk7XG4gICAgICBwcm9jZXNzUmVzcG9uc2Uub3V0cHV0cz8uZm9yRWFjaCggZSA9PiB7XG4gICAgICAgIHRoaXMuX291dHB1dHMucHVzaChuZXcgT3V0cHV0KGUpKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGdldCB0aXRsZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl90aXRsZTtcbiAgfVxuXG4gIGdldCBhYnN0cmFjdFZhbHVlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2Fic3RyYWN0VmFsdWU7XG4gIH1cblxuICBnZXQgaWRlbnRpZmllcigpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9pZGVudGlmaWVyO1xuICB9XG5cbiAgZ2V0IGlucHV0cygpOiBJbnB1dFtdIHtcbiAgICByZXR1cm4gdGhpcy5faW5wdXRzO1xuICB9XG5cbiAgZ2V0IG91dHB1dHMoKTogT3V0cHV0W10ge1xuICAgIHJldHVybiB0aGlzLl9vdXRwdXRzO1xuICB9XG59XG4iXX0=