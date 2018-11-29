import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoscadastroComponent } from './poscadastro.component';

describe('PoscadastroComponent', () => {
  let component: PoscadastroComponent;
  let fixture: ComponentFixture<PoscadastroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoscadastroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoscadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
