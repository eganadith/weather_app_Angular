import { Component, Input } from '@angular/core';
import { ConnectionService } from '../Connections/connection.service';

@Component({
  selector: 'app-text-icon',
  templateUrl: './text-icon.component.html',
  styleUrls: ['./text-icon.component.css']
})
export class TextIconComponent {
  @Input() weatherData:any

  constructor(public conn:ConnectionService,private connectionService: ConnectionService) { 


    

  }

  ngOnInit() {

    
  }
}
