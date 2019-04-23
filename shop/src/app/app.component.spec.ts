import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {ProductComponent} from './products/components/product-component/product.component';
import {ProductListComponent} from './products/components/product-list-component/product-list.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ProductComponent,
        ProductListComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

});
