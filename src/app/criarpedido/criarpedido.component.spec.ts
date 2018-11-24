import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarpedidoComponent } from './criarpedido.component';

describe('CriarpedidoComponent', () => {
  let component: CriarpedidoComponent;
  let fixture: ComponentFixture<CriarpedidoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriarpedidoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CriarpedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
