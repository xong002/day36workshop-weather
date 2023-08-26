import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CityFormComponent } from './components/city-form/city-form.component';
import { WeatherDetailsComponent } from './components/weather-details/weather-details.component';

const routes: Routes = [
  { path: '', component: CityFormComponent },
  { path: 'weather/:city', component: WeatherDetailsComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
