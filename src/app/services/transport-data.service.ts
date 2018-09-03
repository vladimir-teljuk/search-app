import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class TransportDataService {

    constructor(private http: HttpClient) {
    }

    public getSearchPage(url): Observable<any> {
        return this.http.get(url);
    }


}
