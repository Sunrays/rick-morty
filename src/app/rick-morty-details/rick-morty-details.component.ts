import { Component, OnInit } from '@angular/core';
import { RickMortyService } from '../rick-morty.service';
import { apiResponse, dataResponse } from '../response.interface';

@Component({
  selector: 'app-rick-morty-details',
  templateUrl: './rick-morty-details.component.html',
  styleUrls: ['./rick-morty-details.component.scss']
})
export class RickMortyDetailsComponent implements OnInit {

  filterselectedArray: string[] = [];
  displayData: dataResponse[] = [];
  filteredDisplayData: dataResponse[];
  private tempDisplayData: dataResponse[] = [];
  isFilterEnabled: boolean;
/*   private el = {
    value: ''
  }; */
  sortName : string = 'ascending';

  constructor(private rickMortyService: RickMortyService) { }

  ngOnInit() {
    this.fetchRickAndMortyDetails();
    // this.filteredDisplayData = [];
    // this.isFilterEnabled = false;
  }

  fetchRickAndMortyDetails() {
    this.rickMortyService.fetchDetails().subscribe(response => {
      this.displayData = response.results;
    });
  }

  // IS CASE INSENTIVE AND EQUAL?
  ciEquals(a, b) {
    return a.localeCompare(b, undefined, { sensitivity: 'base' }) === 0;
  }

  filterDisplayData() {
    this.tempDisplayData = this.displayData;
    this.filterselectedArray.forEach(filter => {
      this.filteredDisplayData = [];
      this.tempDisplayData.forEach(data => {
        if(this.ciEquals(data.species, filter)
          || this.ciEquals(data.gender, filter)
          || this.ciEquals(data.origin.name, filter)){
          this.filteredDisplayData.push(data);
        }
      });
      // this.tempDisplayData = [];
      this.tempDisplayData = this.filteredDisplayData;
    });
  }

  addElementsToFilter($event) {
    if ($event.target.checked) {
      this.filterselectedArray.push($event.target.value);
      this.filterDisplayData();
    } else {
      const index = this.filterselectedArray.indexOf($event.target.value);
      this.filterselectedArray.splice(index, 1);

      // const filterWrap = document.getElementById('#filtersContainer');
      const filterCheckboxes = document.querySelectorAll('input[type=checkbox]');
      filterCheckboxes.forEach((el) => {
        let elVal = el['value'];
        if(this.filterselectedArray.indexOf(elVal) === -1) {
          el['checked'] = false;
        }
      });

      this.filterDisplayData();
    }

    if (this.filterselectedArray.length == 0) {
      this.tempDisplayData = [];
      this.filteredDisplayData = [];
      this.isFilterEnabled = false;
    } else {
      this.isFilterEnabled = true;
    }
  }

}