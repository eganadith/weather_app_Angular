import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Weather } from '../currentWheather';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })

export class ConnectionService {
  weatherData: Weather | undefined

  Api_url = "http://localhost:8000";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  constructor(private httpClient: HttpClient) {}

  GetWeather(cityName: any): Observable<Weather> {
    console.log(cityName)
    let API_URL = `${this.Api_url}/weather/${cityName}`;
    console.log(API_URL);
    let data=this.httpClient.post(API_URL,cityName,this.httpOptions )
    console.log('passing');
    console.log(data);
    
    
    return data
      .pipe(
        map((response: any) => {
          
          console.log('temperature:', response.temperature);
          console.log('humidity:', response.humidity);
          console.log('humidity:', response.description);
          
          this.weatherData = {
            cityName: cityName,
            temperature: response.temperature,
            humidity: response.humidity,
            description:response.description,
            icon:response.icon
          };
       
          return this.weatherData;
         
        }),
        
        catchError(this.handleError)
        
      );
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Handle client error
      errorMessage = error.error.message;
    } else {
      // Handle server error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
  getData(){
    return this.weatherData
  }
}
