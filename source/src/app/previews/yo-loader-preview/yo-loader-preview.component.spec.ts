import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YoLoaderPreviewComponent } from './yo-loader-preview.component';

describe('YoLoaderPreviewComponent', () => {
  let component: YoLoaderPreviewComponent;
  let fixture: ComponentFixture<YoLoaderPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YoLoaderPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YoLoaderPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
