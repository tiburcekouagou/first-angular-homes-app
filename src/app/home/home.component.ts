import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingService } from '../housing.service';
import { Housinglocation } from '../housinglocation';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  readonly baseUrl = "https://angular.dev/assets/tutorials/common"

  housingLocationList: Housinglocation[] = [];
  // injection du service HousingService
  housingService: HousingService = inject(HousingService);
  filteredLocationList: Housinglocation[] = [];

  constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocations();
    this.filteredLocationList = this.housingLocationList;
  }

  filterResults(text: string) {
    this.filteredLocationList = this.housingLocationList.filter(
      (housingLocation) => housingLocation.city.toLowerCase().includes(text.toLowerCase())
    )
  }
}
