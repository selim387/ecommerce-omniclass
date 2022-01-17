import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BasicTablePage } from './basic-table.page';

describe('BasicTablePage', () => {
  let component: BasicTablePage;
  let fixture: ComponentFixture<BasicTablePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicTablePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BasicTablePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
