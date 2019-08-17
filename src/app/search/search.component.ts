import { Component, OnInit } from '@angular/core';
import { DetailsService } from '../details.service';
import { Weather } from '../weather-data'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  
   public today = Date.now();
   public climate = {};
   public flag = false;
   public d = new Date();
   weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  constructor(private detail:DetailsService) { }

  ngOnInit() {
  }

  func(city)
  {
    this.detail.getWeather(city).subscribe((data:Weather)=>{
      this.climate = data;
    //  console.log(this.climate);
    },
    error => this.flag=false
    );
    if(this.climate != null)
     this.flag=true;
  }

  dayCheck(day)
  {
    var dayFinder = this.weekday[this.d.getDay()]
    if(day==dayFinder)
    {
      return true;
    }
    else{
      return false;
    }
  }


}
