import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-city-form',
  templateUrl: './city-form.component.html',
  styleUrls: ['./city-form.component.css']
})
export class CityFormComponent {
  cityList: string[] = [];
  form!: FormGroup;
  fb = inject(FormBuilder)

  ngOnInit() {
    this.form = this.fb.group({
      city: this.fb.control<string>('', Validators.required)
    })
    if (sessionStorage.length > 0) {
      for (let i = sessionStorage.length - 1; i >= 0; i--) {
        this.cityList.push(sessionStorage.key(i) as string);
      }
    }
  }

  processForm() {
    this.cityList.push(this.form.value.city);
    sessionStorage.setItem(this.form.value.city, this.form.value.city);
  }

}
