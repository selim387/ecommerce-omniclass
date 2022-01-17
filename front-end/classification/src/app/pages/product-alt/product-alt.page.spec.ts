import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProductAltPage } from './product-alt.page';

describe('ProductAltPage', () => {
  let component: ProductAltPage;
  let fixture: ComponentFixture<ProductAltPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductAltPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProductAltPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
