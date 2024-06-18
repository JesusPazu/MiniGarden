import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistroCultivosPage } from './registro-cultivos.page';

describe('RegistroCultivosPage', () => {
  let component: RegistroCultivosPage;
  let fixture: ComponentFixture<RegistroCultivosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroCultivosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
