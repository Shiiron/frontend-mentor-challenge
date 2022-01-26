import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class CountryService {
  baseUrl = 'https://restcountries.com/v2';
  constructor(protected http: HttpClient) {}

  getCountryList(): Promise<any> {
    return this.http.get(`${this.baseUrl}/all`).toPromise();
  }

  getFilteredCountryList() {}
}
