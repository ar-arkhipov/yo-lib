import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YoLoaderComponent } from './yo-loader.component';

describe('YoLoaderComponent', () => {
  let component: YoLoaderComponent;
  let fixture: ComponentFixture<YoLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YoLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YoLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
