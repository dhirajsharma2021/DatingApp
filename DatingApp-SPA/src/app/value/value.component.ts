import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.scss']
})
export class ValueComponent implements OnInit {

  Values : any;

  constructor(private http : HttpClient) { }

  ngOnInit() {
    this.getValues();
  }

  getValues(){
    this.http.get("http://localhost:5000/api/WeatherForecast").subscribe(response =>{
      this.Values=response;
    },error => {
      console.error();
    }

    )};


}
