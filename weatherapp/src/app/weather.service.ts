import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
 
  // url!: string;
  // weatherUrl: any='https://api.openweathermap.org/data/2.5/weather?q';
 
  constructor(private http:HttpClient) { }
  // getWeatherApi(){
  //   return this.http.get(this.weatherUrl),{headers:this.'headerBody'}
  // }
   cityName:string = 'mumbai'
  getWeatherData(city:string){
    // let key="d85d6b62cd5b3d11e07f09beffd5f12b";
    // let appId="&appid";
    // let unit="&units=metric";
    // let lang="&lang=zh-cn";
    // let weatherUrl=this.weatherUrl+city + lang + appId + key + unit;
    // console.log('weather---->',weatherUrl);
    
    // return this.http.get(weatherUrl);
    this.cityName = city;
    console.log(this.cityName);    
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.cityName}&appid=d85d6b62cd5b3d11e07f09beffd5f12b&units=metric`)
  }




}
