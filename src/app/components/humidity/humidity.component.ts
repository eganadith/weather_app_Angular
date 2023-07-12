import { Component, OnInit,Input } from '@angular/core';
import { ConnectionService } from 'src/app/Connections/connection.service';

@Component({
  selector: 'app-humidity',
  templateUrl: './humidity.component.html',
  styleUrls: ['./humidity.component.css']
})
export class HumidityComponent implements OnInit {
  @Input() weatherData:any

  constructor(public conn:ConnectionService,private connectionService: ConnectionService) { 
    console.log(this.weatherData,"testt")


    

  }

  ngOnInit() {

    
  }
}
