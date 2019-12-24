import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionSvgComponent } from './mission-svg.component';

describe('MissionSvgComponent', () => {
  let component: MissionSvgComponent;
  let fixture: ComponentFixture<MissionSvgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MissionSvgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MissionSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
