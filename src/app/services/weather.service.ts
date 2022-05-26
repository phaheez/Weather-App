import { WeatherData } from './../models/weather.model';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  baseUrl: string = environment.weatherApiBaseUrl;
  xRapidApiHostName: string = environment.XRapidAPIHostHeaderName;
  xRapidApiHostValue: string = environment.XRapidAPIHostHeaderValue;
  xRapidApiKeyName: string = environment.XRapidAPIKeyHeaderName;
  xRapidApiKeyValue: string = environment.XRapidAPIKeyHeaderValue;

  constructor(private httpClient: HttpClient) { }

  getWeatherData(cityName: string): Observable<WeatherData> {
    return this.httpClient.get<WeatherData>(this.baseUrl, {
      headers: new HttpHeaders()
      .set(this.xRapidApiHostName, this.xRapidApiHostValue)
      .set(this.xRapidApiKeyName, this.xRapidApiKeyValue),
      params: new HttpParams()
      .set('q', cityName)
      .set('units', 'metric')
      .set('mode', 'json')
    })
  }
}
