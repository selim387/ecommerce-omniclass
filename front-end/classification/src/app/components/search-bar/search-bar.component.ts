import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage';
import { DataService } from '../../services/data-service.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})

export class SearchBarComponent implements OnInit {

  searchInput: FormControl;
  search: FormGroup;
  myControl = new FormControl();
  filteredOptions: Observable<string[]>;
  autoCompleteList: any[]

  @ViewChild('autocompleteInput') autocompleteInput: ElementRef;
  @Output() onSelectedOption = new EventEmitter();

  disable: boolean = true;
  private all_products;
  constructor(private storage: Storage, private dataService: DataService, private _formBuilder: FormBuilder) { }


  ngOnInit() {

    this.dataService.getAllProducts().subscribe(res => {
      this.storage.set('all', res);
      this.all_products = res;
      this.disable = false;
    });

    /* this.search = this._formBuilder.group({
      searchInput: [
        {
          value: 'hello',
          disabled: this.disable
        }
      ]
    }); */


    // when user types something in input, the value changes will come through this
    this.myControl.valueChanges.subscribe(userInput => {
      this.autoCompleteExpenseList(userInput);
    })
  }


  private autoCompleteExpenseList(input) {
    let categoryList = this.filterCategoryList(input)
    this.autoCompleteList = categoryList;
  }

  // this is where filtering the data happens according to you typed value
  filterCategoryList(val) {
    var categoryList = []
    /*     if (typeof val != "string") {
          return [];
        } */
    if (val === '' || val === null) {
      return [];
    }
    return val ? this.all_products.filter(s => s.product_name.toLowerCase().indexOf(String(val).toLowerCase()) != -1)
      : this.all_products;
  }

  // after you clicked an autosuggest option, this function will show the field you want to show in input
  displayFn(product: any) {
    let k = product ? product.product_name : product;
    return k;
  }

  filterProductsList(event) {
    var products = event.source.value;
    if (!products) {
      this.dataService.searchOption = []
    }
    else {
      this.dataService.searchOption.push(products);
      this.onSelectedOption.emit(this.dataService.searchOption)
    }
    this.focusOnPlaceInput();
  }

  removeOption(option) {

    let index = this.dataService.searchOption.indexOf(option);
    if (index >= 0)
      this.dataService.searchOption.splice(index, 1);
    this.focusOnPlaceInput();

    this.onSelectedOption.emit(this.dataService.searchOption)
  }

  // focus the input field and remove any unwanted text.
  focusOnPlaceInput() {
    this.autocompleteInput.nativeElement.focus();
    this.autocompleteInput.nativeElement.value = '';
  }

}
