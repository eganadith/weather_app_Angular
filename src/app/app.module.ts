import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CityNameInputComponent } from './city-name-input/city-name-input.component';
import { ConnectionService } from './Connections/connection.service';
import { HumidityComponent } from './components/humidity/humidity.component';
import { TemparatureComponent } from './components/Temparature/Temparature.component';
import { TextIconComponent } from './text-icon/text-icon.component';

@NgModule({
  declarations: [
    AppComponent,
    CityNameInputComponent,
    HumidityComponent,
    TemparatureComponent,
    TextIconComponent
    
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [ConnectionService],
  bootstrap: [AppComponent],
})
export class AppModule {
  
}
