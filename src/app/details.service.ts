import { Injectable } from '@angular/core';
import { weatherDetails } from './weather';

@Injectable()
export class DetailsService {

  public details=weatherDetails;
  constructor() { }
   getWeather(city)
   {
    for(let det of this.details)
    {
       if(city==det.city)
       return det;
    }
    return null;
   }
   
}
