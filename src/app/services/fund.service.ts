import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FundService {
  private url:string = "http://localhost:8080/api/v1/funds";
  constructor(private http: HttpClient) { }

  getFunds(){
    return this.http.get<number>(this.url);
  }
}
