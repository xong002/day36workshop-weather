import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WeatherDetails } from 'src/app/models';
import { WeatherAPIService } from 'src/app/weather-api.service';

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.css']
})
export class WeatherDetailsComponent {
  route = inject(ActivatedRoute)
  svc = inject(WeatherAPIService)
  router = inject(Router)
  wd! : WeatherDetails

  ngOnInit(){
    this.wd = new WeatherDetails();
    this.wd.name = this.route.snapshot.params['city']
    this.svc.getWeather(this.wd.name).then((data) => {
      console.log(data)
      this.wd.description = data.weather[0].description;
      this.wd.icon = 'https://openweathermap.org/img/wn/' + data.weather[0].icon + '.png';
      this.wd.temperature = (data.main.temp - 273.15);
    }
    ).catch(error => {
      alert(error);
      this.router.navigate(['/']);
    })
  }
}
