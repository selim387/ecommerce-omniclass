import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Error400Page } from './error400.page';

describe('Error400Page', () => {
  let component: Error400Page;
  let fixture: ComponentFixture<Error400Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Error400Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Error400Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
