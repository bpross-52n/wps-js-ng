import { Format } from './format';
import { LiteralDataDomains } from './literal-data-domains';
export class LiteralData {
    constructor(literalDataResponse) {
        var _a, _b;
        if (literalDataResponse != null) {
            this._formats = new Array();
            (_a = literalDataResponse.formats) === null || _a === void 0 ? void 0 : _a.forEach(e => {
                this._formats.push(new Format(e));
            });
            this._literalDataDomains = new Array();
            (_b = literalDataResponse.literalDataDomains) === null || _b === void 0 ? void 0 : _b.forEach(e => {
                this._literalDataDomains.push(new LiteralDataDomains(e));
            });
        }
    }
    get literalDataDomains() {
        return this._literalDataDomains;
    }
    get formats() {
        return this._formats;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGl0ZXJhbC1kYXRhLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvd3BzLW5nL3NyYy9tb2RlbC9wcm9jZXNzLmRlc2NyaXB0aW9uL2xpdGVyYWwtZGF0YS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsTUFBTSxFQUFDLE1BQU0sVUFBVSxDQUFDO0FBQ2hDLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBRTFELE1BQU0sT0FBTyxXQUFXO0lBSXRCLFlBQVksbUJBQXdCOztRQUNsQyxJQUFJLG1CQUFtQixJQUFJLElBQUksRUFBQztZQUM5QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksS0FBSyxFQUFVLENBQUM7WUFDcEMsTUFBQSxtQkFBbUIsQ0FBQyxPQUFPLDBDQUFFLE9BQU8sQ0FBRSxDQUFDLENBQUMsRUFBRTtnQkFDeEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNwQyxDQUFDLEVBQUU7WUFDSCxJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxLQUFLLEVBQXNCLENBQUM7WUFDM0QsTUFBQSxtQkFBbUIsQ0FBQyxrQkFBa0IsMENBQUUsT0FBTyxDQUFFLENBQUMsQ0FBQyxFQUFFO2dCQUNuRCxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLElBQUksa0JBQWtCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMzRCxDQUFDLEVBQUU7U0FDSjtJQUVILENBQUM7SUFDRCxJQUFJLGtCQUFrQjtRQUNwQixPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQztJQUNsQyxDQUFDO0lBRUQsSUFBSSxPQUFPO1FBQ1QsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3ZCLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Rm9ybWF0fSBmcm9tICcuL2Zvcm1hdCc7XG5pbXBvcnQge0xpdGVyYWxEYXRhRG9tYWluc30gZnJvbSAnLi9saXRlcmFsLWRhdGEtZG9tYWlucyc7XG5cbmV4cG9ydCBjbGFzcyBMaXRlcmFsRGF0YSB7XG4gIHByaXZhdGUgcmVhZG9ubHkgX2xpdGVyYWxEYXRhRG9tYWluczogTGl0ZXJhbERhdGFEb21haW5zW107XG4gIHByaXZhdGUgcmVhZG9ubHkgX2Zvcm1hdHM6IEZvcm1hdFtdO1xuXG4gIGNvbnN0cnVjdG9yKGxpdGVyYWxEYXRhUmVzcG9uc2U6IGFueSkge1xuICAgIGlmIChsaXRlcmFsRGF0YVJlc3BvbnNlICE9IG51bGwpe1xuICAgICAgdGhpcy5fZm9ybWF0cyA9IG5ldyBBcnJheTxGb3JtYXQ+KCk7XG4gICAgICBsaXRlcmFsRGF0YVJlc3BvbnNlLmZvcm1hdHM/LmZvckVhY2goIGUgPT4ge1xuICAgICAgICB0aGlzLl9mb3JtYXRzLnB1c2gobmV3IEZvcm1hdChlKSk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuX2xpdGVyYWxEYXRhRG9tYWlucyA9IG5ldyBBcnJheTxMaXRlcmFsRGF0YURvbWFpbnM+KCk7XG4gICAgICBsaXRlcmFsRGF0YVJlc3BvbnNlLmxpdGVyYWxEYXRhRG9tYWlucz8uZm9yRWFjaCggZSA9PiB7XG4gICAgICAgIHRoaXMuX2xpdGVyYWxEYXRhRG9tYWlucy5wdXNoKG5ldyBMaXRlcmFsRGF0YURvbWFpbnMoZSkpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gIH1cbiAgZ2V0IGxpdGVyYWxEYXRhRG9tYWlucygpOiBMaXRlcmFsRGF0YURvbWFpbnNbXSB7XG4gICAgcmV0dXJuIHRoaXMuX2xpdGVyYWxEYXRhRG9tYWlucztcbiAgfVxuXG4gIGdldCBmb3JtYXRzKCk6IEZvcm1hdFtdIHtcbiAgICByZXR1cm4gdGhpcy5fZm9ybWF0cztcbiAgfVxufVxuIl19