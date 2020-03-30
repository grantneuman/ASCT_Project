import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiAutocompleteExampleComponent } from './multi-autocomplete-example.component';

describe('MultiAutocompleteExampleComponent', () => {
  let component: MultiAutocompleteExampleComponent;
  let fixture: ComponentFixture<MultiAutocompleteExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiAutocompleteExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiAutocompleteExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
