import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Error500Page } from './error500.page';

describe('Error500Page', () => {
  let component: Error500Page;
  let fixture: ComponentFixture<Error500Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Error500Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Error500Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
