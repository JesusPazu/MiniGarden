import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListadoCultivosPage } from './listado-cultivos.page';

describe('ListadoCultivosPage', () => {
  let component: ListadoCultivosPage;
  let fixture: ComponentFixture<ListadoCultivosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoCultivosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
