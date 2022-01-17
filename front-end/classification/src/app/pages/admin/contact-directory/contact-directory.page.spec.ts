import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ContactDirectoryPage } from './contact-directory.page';

describe('ContactDirectoryPage', () => {
  let component: ContactDirectoryPage;
  let fixture: ComponentFixture<ContactDirectoryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactDirectoryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ContactDirectoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
