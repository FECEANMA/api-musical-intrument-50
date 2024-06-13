import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InstrumentService {
  API_URL: string = 'http://localhost:3000/instruments';
  constructor(private httpClient: HttpClient) { }

  getInstruments():Observable<any>{
    return this.httpClient.get(this.API_URL).pipe(res=> res);
  }
}
