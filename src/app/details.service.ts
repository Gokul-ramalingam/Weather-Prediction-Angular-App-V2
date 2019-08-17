import { Injectable } from '@angular/core';
import { Weather } from './weather-data'
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw'

@Injectable()
export class DetailsService {

  public details : Weather[];
  constructor(private http: HttpClient) { }
   getWeather(city : String): Observable<Weather>
   {
      return this.http.get<Weather>('http://localhost:8080/weather/get?city='+city)  
      .catch(this.errorHandler);   
   }

   errorHandler(error:HttpErrorResponse){
      return Observable.throw(error.message||null);
}
}

