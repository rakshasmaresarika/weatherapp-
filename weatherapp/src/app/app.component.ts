import { Component } from '@angular/core';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'weatherapp';
  temperature: any;
  Response: any;
  min_temp: any;
  max_temp: any;
  humidity:any;
  city_name: any;
  windspeed: any;
  city!:string;
  cityName:any
  weather_details: any;
  notFound = false;


  _searchValue='mumbai';
 
 
  get searchValue(){
    return this._searchValue;
  }

  set searchValue(input:any){
    this._searchValue=input.toLowerCase();
  }

  constructor(private weatherService:WeatherService){}
  

  ngOnInit(){
    this.city = 'mumbai';
    // this.weatherService.getWeatherData(this.city).subscribe((data: any)=>{
    //   console.log(data);
    //   this.Response=data;
    //   this.temperature=this.Response.main.temp;
    //   this.max_temp=this.Response.main.temp_max;
    //   this.min_temp=this.Response.main.temp_min;
    //   this.humidity=this.Response.main.humidity;
    //   this.windspeed=this.Response.wind.speed;
    //   console.log(this.windspeed);
    //   console.log(this.Response.main.temp_max);
    //   },
    //    (error: any)=>{
    //      console.log(" this data not found");
    //    }
    // )

    this.weatherDetails()
  }

  async weatherDetails(){
    this.Response = "";
  console.log(this.searchValue);
  this.weatherService.getWeatherData(this.searchValue).subscribe((data: any)=>{
    this.notFound = false;
    this.weather_details = data;
    console.log(this.weather_details);
    this.Response = this.weather_details;
      this.temperature=this.Response.main.temp;
      this.max_temp=this.Response.main.temp_max;
      this.min_temp=this.Response.main.temp_min;
      this.humidity=this.Response.main.humidity;
      this.windspeed=this.Response.wind.speed;

  }, (error)=>{
    this.Response = "";
    this.temperature="";
      this.max_temp="";
      this.min_temp="";
      this.humidity="";
      this.windspeed="";
    console.log("error handled");
    this.notFound = true;
  })
  
  }

}