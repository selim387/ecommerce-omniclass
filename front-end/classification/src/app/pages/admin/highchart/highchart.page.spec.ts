import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HighchartPage } from './highchart.page';

describe('HighchartPage', () => {
  let component: HighchartPage;
  let fixture: ComponentFixture<HighchartPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HighchartPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HighchartPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
