import { Component, Input } from '@angular/core';
import { ConnectionService } from '../Connections/connection.service';
import { Weather } from '../currentWheather';

@Component({
  selector: 'app-city-name-input',
  templateUrl: './city-name-input.component.html',
  styleUrls: ['./city-name-input.component.css']
})
export class CityNameInputComponent {

  data: any
  cityName = "";

  UrlImage = "https://openweathermap.org/img/wn/10d@2x.png"
button: any;

  constructor(private connectionService: ConnectionService) {

  }

  ngOnInit(): void {
  }

  search(): void {
    console.log('City Name ' + this.cityName);
    this.connectionService.GetWeather(this.cityName).subscribe((data: any) => {
      this.data = data
      this.UrlImage = "https://openweathermap.org/img/wn/" + data.icon + "@2x.png"


      console.log(data)
    });

  }
}

