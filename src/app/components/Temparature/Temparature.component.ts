import { Component, OnInit, Input } from '@angular/core';
import { ConnectionService } from 'src/app/Connections/connection.service';
import { Weather } from 'src/app/currentWheather';

@Component({
  selector: 'app-Temparature',
  templateUrl: './Temparature.component.html',
  styleUrls: ['./Temparature.component.css']
})
export class TemparatureComponent implements OnInit {
  @Input() weatherData: any;
  

 constructor(public conn:ConnectionService,private connectionService: ConnectionService) { 
    console.log(this.weatherData,"testt")

 }

 ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
