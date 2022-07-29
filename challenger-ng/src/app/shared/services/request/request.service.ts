import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
// improves tree shacking
import { map } from 'rxjs/internal/operators/map';
import { catchError } from 'rxjs/internal/operators/catchError';
import { of } from 'rxjs/internal/observable/of';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  constructor(private http: HttpClient) {}

  post(endpoint: string, object: any) {
    const options = this.getOptions();
    return this.http.post(endpoint, object, options).pipe(catchError(this.handleError.bind(this)));
  }

  get(endpoint: string) {
    const options = this.getOptions();
    return this.http.get(endpoint, options).pipe(catchError(this.handleError.bind(this)));
  }

  delete(endpoint: string) {
    const options = this.getOptions();
    return this.http.delete(endpoint, options).pipe(catchError(this.handleError.bind(this)));
  }

  put(endpoint: string, object: any) {
    const options = this.getOptions();
    return this.http.put(endpoint, object, options).pipe(catchError(this.handleError.bind(this)));
  }

  // Private methods
  private getOptions() {
    return {
      headers: new HttpHeaders().set('Authorization', `Client-ID ${environment.unsplash.accessKey}`)
    };
  }

  private handleError({ error: { errors } }: HttpErrorResponse) {
    return of({ type: 'error', errors });
  }
}
