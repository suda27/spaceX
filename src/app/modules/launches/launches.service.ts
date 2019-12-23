import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators'
import { Launch } from 'src/app/models/launch';

@Injectable({
  providedIn: 'root'
})
export class LaunchesService {

  constructor(private http: HttpClient) { }

  private allLaunchApi = 'https://api.spacexdata.com/v3/launches';
  private nextLaunchApi = 'https://api.spacexdata.com/v3/launches/next';
  private pastLaunchApi = 'https://api.spacexdata.com/v3/launches/past';
  private upcomingLaunchApi = 'https://api.spacexdata.com/v3/launches/upcoming';
  private latestLaunchApi = 'https://api.spacexdata.com/v3/launches/latest';


  getNextLaunchInfo(): Observable<Launch> {
    return this.http.get<Launch>(this.nextLaunchApi).pipe(
      tap(data => console.log('All : ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  getpastLaunchInfo(): Observable<Launch[]> {
    return this.http.get<Launch[]>(this.pastLaunchApi).pipe(
      tap(data => console.log('All : ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  getUpcomingLaunchInfo(): Observable<Launch> {
    return this.http.get<Launch>(this.upcomingLaunchApi).pipe(
      tap(data => console.log('All : ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  getLatestLaunchInfo(): Observable<Launch> {
    return this.http.get<Launch>(this.latestLaunchApi).pipe(
      tap(data => console.log('All : ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }
  getAllLaunchInfo(): Observable<Launch[]> {
    return this.http.get<Launch[]>(this.allLaunchApi).pipe(
      tap(data => console.log('All : ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  getSingleLaunchInfo(flightNumber: number): Observable<Launch> {
    return this.http.get<Launch>(this.allLaunchApi + '/' + flightNumber).pipe(
      tap(data => console.log('All : ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }


  private handleError(err: HttpErrorResponse) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
