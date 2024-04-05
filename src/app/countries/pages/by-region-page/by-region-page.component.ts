import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { Region } from '../../interfaces/region.type';
import { CountriesService } from '../../services/countries.service';


@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
})
export class ByRegionPageComponent implements OnInit {

  public countries: Country[] = [];

  public regions: Region[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']

  public selectedRegion?: Region;

  constructor( private countriesServices: CountriesService ) {}

  ngOnInit(): void {
    this.countries = this.countriesServices.cacheStore.byRegion.countries
    this.selectedRegion = this.countriesServices.cacheStore.byRegion.region
  }

  searchByRegion( term: Region) {

    this.selectedRegion = term

    this.countriesServices.searchRegion( term )
    .subscribe( countries => {
      this.countries = countries
    } )
  }



}
