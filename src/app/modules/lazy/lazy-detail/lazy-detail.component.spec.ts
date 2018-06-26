import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyDetailComponent } from './lazy-detail.component';

describe('LazyDetailComponent', () => {
  let component: LazyDetailComponent;
  let fixture: ComponentFixture<LazyDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LazyDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
