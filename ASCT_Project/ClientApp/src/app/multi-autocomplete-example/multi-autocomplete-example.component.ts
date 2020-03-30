import { Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { SelectAutocompleteComponent } from 'mat-select-autocomplete';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'multi-autocomplete-example',
  templateUrl: './multi-autocomplete-example.component.html',
  styleUrls: ['./multi-autocomplete-example.component.css']
})
export class MultiAutocompleteExampleComponent {
  @ViewChild(SelectAutocompleteComponent) multiSelect:
    SelectAutocompleteComponent;

  options = [
    {
      display: 'One',
      value: '1'
    },
    {
      display: 'Two',
      value: '2'
    },
    {
      display: 'Three',
      value: '3'
    },
    {
      display: 'Four',
      value: '4'
    },
    {
      display: 'Five',
      value: '5'
    },
    {
      display: 'Six',
      value: '6'
    }
  ];
  profileForm = new FormGroup({
    selected: new FormControl(['1', '2', '3'])
  });

  constructor() { }

  onToggleDropdown() {
    this.multiSelect.toggleDropdown();
  }

  onSubmit() {
    console.log(this.profileForm.value);
  }

}
