import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TanquesAguaComponent } from './tanques-agua.component';

describe('TanquesAguaComponent', () => {
  let component: TanquesAguaComponent;
  let fixture: ComponentFixture<TanquesAguaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TanquesAguaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TanquesAguaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
