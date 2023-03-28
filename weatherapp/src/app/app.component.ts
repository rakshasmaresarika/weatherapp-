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
  windSpeed: any;
  city:string = this.weatherService.cityName;
  cityName:any
  weather_details: any;


  _searchValue='mumbai';
 
 
  get searchValue(){
    return this._searchValue;
  }

  set searchValue(input:any){
    this._searchValue=input.toLowerCase();
  }

  constructor(private weatherService:WeatherService){}
  

  ngOnInit(){
    this.weatherService.getWeatherData(this.city).subscribe((data: any)=>{
      console.log(data);
      this.Response=data;
      this.temperature=this.Response.main.temp;
      this.max_temp=this.Response.main.temp_max;
      this.min_temp=this.Response.main.temp_min;
      this.humidity=this.Response.main.humidity;
      this.windSpeed=this.Response.main.wind;
      
      console.log(this.Response.main.temp_max);
      
      },

       (error: any)=>{
         console.log(" this data not found");
        
       }
        
      )
  }
  async weatherDetails(){
  console.log(this.searchValue);
  this.weatherService.getWeatherData(this.searchValue).subscribe((data: any)=>{
    this.weather_details = data;
    console.log(this.weather_details);
    this.Response = this.weather_details;
      this.temperature=this.Response.main.temp;
      this.max_temp=this.Response.main.temp_max;
      this.min_temp=this.Response.main.temp_min;
      this.humidity=this.Response.main.humidity;
      this.windSpeed=this.Response.main.wind;

  }, (error)=>{
    console.log("error handled");
    
  })
  
  }

}