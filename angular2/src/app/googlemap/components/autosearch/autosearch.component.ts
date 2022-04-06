import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-autosearch',
  templateUrl: './autosearch.component.html',
  styleUrls: ['./autosearch.component.scss'],
})
export class AutosearchComponent implements OnInit {
  input: any;
  constructor() {}

  ngOnInit(): void {}
  formattedaddress = ' ';
  options :any= {
    componentRestrictions: {
      country: ['AS'],
    },
  };
  public AddressChange(address: any) {
    //setting address from API to local variable
    this.formattedaddress = address.formatted_address;
  }
}
