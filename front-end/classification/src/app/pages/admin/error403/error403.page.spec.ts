import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Error403Page } from './error403.page';

describe('Error403Page', () => {
  let component: Error403Page;
  let fixture: ComponentFixture<Error403Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Error403Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Error403Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
