import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [
  ]
})
export class ByCapitalPageComponent implements OnInit {

  public countries: Country[] = [];

  public isLoading: boolean = false

  public initialValue: string = ''

  constructor ( private countrieService: CountriesService) {}

  ngOnInit(): void {
    this.countries = this.countrieService.cacheStore.byCapital.countries;
    this.initialValue = this.countrieService.cacheStore.byCapital.term;
  }

  

  searchByCapital( term: string ) {

    this.isLoading = true

    this.countrieService.searchCapital( term )
      .subscribe( countries => {
        this.countries = countries

        this.isLoading = false

      } )
  }

}
