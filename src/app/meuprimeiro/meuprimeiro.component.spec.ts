import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeuprimeiroComponent } from './meuprimeiro.component';

describe('MeuprimeiroComponent', () => {
  let component: MeuprimeiroComponent;
  let fixture: ComponentFixture<MeuprimeiroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeuprimeiroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeuprimeiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
