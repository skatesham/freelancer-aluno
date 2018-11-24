import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropostapedidosComponent } from './propostapedidos.component';

describe('PropostapedidosComponent', () => {
  let component: PropostapedidosComponent;
  let fixture: ComponentFixture<PropostapedidosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropostapedidosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropostapedidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
