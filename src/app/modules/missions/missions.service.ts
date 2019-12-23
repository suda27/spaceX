import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators'
import { Mission } from 'src/app/models/mission';


@Injectable({
  providedIn: 'root'
})
export class MissionsService {

  constructor(private http: HttpClient) { }

  private allMissionApi = 'https://api.spacexdata.com/v3/missions';

  getAllMisionsInfo(): Observable<Mission[]> {
    console.log('called ')
    return this.http.get<Mission[]>(this.allMissionApi).pipe(
      tap(data => console.log('All : ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  getSingleMisionsInfo(mission_id: string): Observable<Mission> {
    return this.http.get<Mission>(this.allMissionApi + '/' + mission_id).pipe(
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
