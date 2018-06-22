import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  login(user: string, password: string): Observable<any> {
    /* return this.http
      .post<any>(`${environment.API}2/user/store/84009900/current-user?languageId=-5&appId=1`, {
        username: user,
        password: password
      }, this.httpOptions)
      .pipe(
        map(data => {
          console.log('auth data', data);
          return data.data;
        })
      ); */

    return this.http
      .post<any>(`${environment.API}2/user/store/84009900/identity`, {
        username: user,
        password: password
      }, this.httpOptions)
      .pipe(
        map(data => {
          console.log('auth data', data);
          return data.data;
        })
      );
    /* return this.http
      .get<any>(`${environment.API}2/catalog/store/84009900/80209919/category?languageId=-5&typeCatalog=1&appId=1`)
      .pipe(
        map(data => {
          console.log('auth data', data);
          return data.data;
        })
      ); */
     /* return this.http
       .get<any>(`${environment.API}2/catalog/store/84009900?languageId=-5&appId=1`)
       .pipe(
         map(data => {
           console.log('auth data', data);
           return data.data;
         })
       ); */
  }
}
