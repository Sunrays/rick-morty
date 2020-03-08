import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RickMortyDetailsComponent } from './rick-morty-details.component';

describe('RickMortyDetailsComponent', () => {
  let component: RickMortyDetailsComponent;
  let fixture: ComponentFixture<RickMortyDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RickMortyDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RickMortyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
