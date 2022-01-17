import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Shopgrid3Page } from './shopgrid3.page';

describe('Shopgrid3Page', () => {
  let component: Shopgrid3Page;
  let fixture: ComponentFixture<Shopgrid3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Shopgrid3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Shopgrid3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
