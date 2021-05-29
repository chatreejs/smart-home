import { Inject, Injectable } from '@angular/core'
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Observable, throwError } from 'rxjs'
import { take, catchError } from 'rxjs/operators'
import { WEB_SERVICE_CONFIG } from '../provider-name-token'
import { WebServiceConfig } from '../web-service-config'
import { Food } from '../model/food'

@Injectable({
  providedIn: 'root',
})
export class FoodsService {
  private endPoint: string = this.webServiceConfig.webServiceUrl + '/v1/foods'

  constructor(private http: HttpClient, @Inject(WEB_SERVICE_CONFIG) private webServiceConfig: WebServiceConfig) {}

  handleError(error: HttpErrorResponse) {
    return throwError(error)
  }

  getFoods(): Observable<Food[]> {
    return this.http.get<Food[]>(this.endPoint).pipe(take(1), catchError(this.handleError))
  }
}
