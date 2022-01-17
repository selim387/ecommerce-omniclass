import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Error503Page } from './error503.page';

describe('Error503Page', () => {
  let component: Error503Page;
  let fixture: ComponentFixture<Error503Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Error503Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Error503Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
