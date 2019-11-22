import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendaPassagensComponent } from './venda-passagens.component';

describe('VendaPassagensComponent', () => {
  let component: VendaPassagensComponent;
  let fixture: ComponentFixture<VendaPassagensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendaPassagensComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendaPassagensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
