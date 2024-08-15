import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class TryService {

  constructor(private _HttpClient: HttpClient) { }

  getDoctors(data: object): Observable<any> {
    return this._HttpClient.post('https://imake-app.com:4001/api/doctors/doctorFilter', data)
  }
}
