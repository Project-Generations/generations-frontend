import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeambuilderComponent } from './teambuilder.component';

describe('TeambuilderComponent', () => {
  let component: TeambuilderComponent;
  let fixture: ComponentFixture<TeambuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TeambuilderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeambuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
