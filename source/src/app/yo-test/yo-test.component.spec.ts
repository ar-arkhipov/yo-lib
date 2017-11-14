import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YoTestComponent } from './yo-test.component';

describe('YoTestComponent', () => {
  let component: YoTestComponent;
  let fixture: ComponentFixture<YoTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YoTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YoTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
