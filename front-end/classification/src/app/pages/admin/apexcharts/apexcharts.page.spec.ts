import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ApexchartsPage } from './apexcharts.page';

describe('ApexchartsPage', () => {
  let component: ApexchartsPage;
  let fixture: ComponentFixture<ApexchartsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApexchartsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ApexchartsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
