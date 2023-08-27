import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherAPIService {

  http = inject(HttpClient)
  url = "https://api.openweathermap.org/data/2.5/weather"
  API_KEY = "476e23fe1116f4e69d2a3e68672604e1"

  getWeather(city : string){
    return firstValueFrom(this.http.get<any>(this.url, { params: {
      q : city,
      appid : this.API_KEY
    }}))
  }


}
