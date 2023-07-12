import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private weatherData: any;


  constructor() { }
  setWeatherData(data: any): void {
    this.weatherData = data;
  }
  
  getWeatherData(): any {
    return this.weatherData;
  }
  
}
