import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-autosearch',
  templateUrl: './autosearch.component.html',
  styleUrls: ['./autosearch.component.scss'],
})
export class AutosearchComponent implements OnInit {
  input: any;
  constructor() {}

  ngOnInit(): void {}
  myControl = new FormControl();
  options: string[] = ['Delhi', 'Mumbai', 'Banglore'];
}
