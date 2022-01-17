import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FormWizardPage } from './form-wizard.page';

describe('FormWizardPage', () => {
  let component: FormWizardPage;
  let fixture: ComponentFixture<FormWizardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormWizardPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FormWizardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
