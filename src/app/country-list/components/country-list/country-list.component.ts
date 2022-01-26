import { Component, OnInit } from '@angular/core';
import { Country } from '../../models/country';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss'],
})
export class CountryListComponent implements OnInit {
  countryList: Country[] = [];

  constructor(private countryService: CountryService) {}

  async ngOnInit(): Promise<void> {
    this.countryList = await this.countryService.getCountryList();
  }
}
