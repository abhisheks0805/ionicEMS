/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})

export class IonicRestService {
  public BASEURL = 'https://ems-xuwudawei.herokuapp.com';

  httpHeader = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  postData(data): Observable<any> {
    return this.http
      .post<any>(this.BASEURL + '/api/employee/create', data, this.httpHeader)
      .pipe(catchError(this.handleError<any>('Cannot Post Data')));
  }

  getData(): Observable<any> {
    return this.http.get(this.BASEURL + '/api/employee/get-all').pipe(
      tap((_) => console.log(`Data Fetched `)),
      catchError(this.handleError<any>('Cannot Get Data'))
    );
  }

  // getStudentList(): Observable<Student[]> {
  //   return this.http.get<Student[]>('api-goes-here/').pipe(
  //     tap((Student) => console.log('Student fetched!')),
  //     catchError(this.handleError<Student[]>('Get student', []))
  //   );
  // }

  // updateStudent(id, student: Student): Observable<any> {
  //   return this.http.put('api-goes-here/' + id, student, this.httpHeader).pipe(
  //     tap((_) => console.log(`Student updated: ${id}`)),
  //     catchError(this.handleError<Student[]>('Update student'))
  //   );
  // }

  // deleteStudent(id): Observable<Student[]> {
  //   return this.http
  //     .delete<Student[]>('api-goes-here/' + id, this.httpHeader)
  //     .pipe(
  //       tap((_) => console.log(`Student deleted: ${id}`)),
  //       catchError(this.handleError<Student[]>('Delete student'))
  //     );
  // }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
