import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YoTestPreviewComponent } from './yo-test-preview.component';

describe('YoTestPreviewComponent', () => {
  let component: YoTestPreviewComponent;
  let fixture: ComponentFixture<YoTestPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YoTestPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YoTestPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
