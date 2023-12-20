import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FundService {
  constructor(private http: HttpClient) { }

  getFunds(){
    return this.http.get<number>(environment.apiUrl);
  }

  saveFunds(fund:any){
    return this.http.post(environment.apiUrl, fund);
  }

}
