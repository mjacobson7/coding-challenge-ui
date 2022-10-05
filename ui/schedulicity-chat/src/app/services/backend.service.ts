import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest, HttpErrorResponse, HttpEventType, HttpResponse, HttpParams } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BackendService {
  private baseUrl = 'http://localhost:5000';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application-json',
    })
  };

  constructor(private http: HttpClient) { }

  index(uri: string): Observable<any> {
    return this.http.get(this.baseUrl + uri, this.httpOptions).pipe(
      catchError((err: HttpErrorResponse) => {
        return throwError(err)
      }
      ))
  }

  show(uri: string, id: number, queryString?: string): Observable<any> {
    return this.http.get(this.baseUrl + uri + '/' + id + queryString, this.httpOptions).pipe(
      catchError((err: HttpErrorResponse) => {
        return throwError(err)
      }
      ))
  }

  create(uri: string, data: any): Observable<any> {
    return this.http.post(this.baseUrl + uri, data, this.httpOptions).pipe(
      catchError((err: HttpErrorResponse) => throwError(err)
      ));
  }

  update(uri: string, id: number, data: any) { }

  delete(uri: string, id: number) { }
}
