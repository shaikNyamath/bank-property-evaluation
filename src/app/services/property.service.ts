import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {
  private apiUrl = 'http://localhost:8080/api/evaluations';

  constructor(private http: HttpClient) { }

  createEvaluation(evaluation: any): Observable<any> {
    return this.http.post(this.apiUrl, evaluation);
  }

  searchEvaluations(reference: string, fosReference: string, date: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/search`, {
      params: {
        reference,
        fosReference,
        date
      }
    });
  }
}
