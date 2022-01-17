import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PostWithoutSidebarPage } from './post-without-sidebar.page';

describe('PostWithoutSidebarPage', () => {
  let component: PostWithoutSidebarPage;
  let fixture: ComponentFixture<PostWithoutSidebarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostWithoutSidebarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PostWithoutSidebarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
