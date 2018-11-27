import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarpropostaComponent } from './criarproposta.component';

describe('CriarpropostaComponent', () => {
  let component: CriarpropostaComponent;
  let fixture: ComponentFixture<CriarpropostaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriarpropostaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CriarpropostaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
