import { Inject, Injectable } from '@angular/core'
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http'
import { Observable, throwError } from 'rxjs'
import { take, catchError } from 'rxjs/operators'
import { WebServiceUrl } from '../../core/web-service-token'
import { Food } from '../../core/model/food'
import { ApplicationConfig } from 'src/app/core/config/application.config'
import { Pagination } from 'src/app/core/model/pagination'

@Injectable({
  providedIn: 'root',
})
export class FoodsService {
  private endPoint: string = `${this.webServiceUrl}/v1/foods`

  constructor(private http: HttpClient, @Inject(WebServiceUrl) private webServiceUrl: ApplicationConfig) {}

  handleError(error: HttpErrorResponse) {
    return throwError(error)
  }

  getFoods(page: number, limit: number, search?: string): Observable<Pagination<Food>> {
    let params = new HttpParams()
    params = params.append('page', page.toString())
    params = params.append('limit', limit.toString())
    if (search) {
      params = params.append('search', search)
    }
    return this.http.get<any>(`${this.endPoint}/index`, { params }).pipe(take(1), catchError(this.handleError))
  }

  getFood(id: number): Observable<Food> {
    return this.http.get<Food>(`${this.endPoint}/${id}`).pipe(take(1), catchError(this.handleError))
  }

  createFood(food: Food): Observable<any> {
    return this.http.post<any>(this.endPoint, food).pipe(take(1), catchError(this.handleError))
  }

  updateFood(id: number, food: Food): Observable<any> {
    return this.http.put<any>(`${this.endPoint}/${id}`, food).pipe(take(1), catchError(this.handleError))
  }

  deleteMultipleFoods(ids: string): Observable<any> {
    let params = new HttpParams()
    params = params.append('foodIds', ids)
    return this.http.delete<any>(`${this.endPoint}`, { params }).pipe(take(1), catchError(this.handleError))
  }
}
