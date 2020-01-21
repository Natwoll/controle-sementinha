import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricoAlunosComponent } from './historico-alunos.component';

describe('HistoricoAlunosComponent', () => {
  let component: HistoricoAlunosComponent;
  let fixture: ComponentFixture<HistoricoAlunosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoricoAlunosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoricoAlunosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
