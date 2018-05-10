import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreProductsItemComponent } from './store-products-item.component';

describe('StoreProductsItemComponent', () => {
  let component: StoreProductsItemComponent;
  let fixture: ComponentFixture<StoreProductsItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreProductsItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreProductsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
