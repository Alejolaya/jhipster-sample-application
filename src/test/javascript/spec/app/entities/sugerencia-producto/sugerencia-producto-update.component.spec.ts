/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { Observable, of } from 'rxjs';

import { JhipsterSampleApplicationTestModule } from '../../../test.module';
import { SugerenciaProductoUpdateComponent } from 'app/entities/sugerencia-producto/sugerencia-producto-update.component';
import { SugerenciaProductoService } from 'app/entities/sugerencia-producto/sugerencia-producto.service';
import { SugerenciaProducto } from 'app/shared/model/sugerencia-producto.model';

describe('Component Tests', () => {
  describe('SugerenciaProducto Management Update Component', () => {
    let comp: SugerenciaProductoUpdateComponent;
    let fixture: ComponentFixture<SugerenciaProductoUpdateComponent>;
    let service: SugerenciaProductoService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [JhipsterSampleApplicationTestModule],
        declarations: [SugerenciaProductoUpdateComponent],
        providers: [FormBuilder]
      })
        .overrideTemplate(SugerenciaProductoUpdateComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(SugerenciaProductoUpdateComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(SugerenciaProductoService);
    });

    describe('save', () => {
      it('Should call update service on save for existing entity', fakeAsync(() => {
        // GIVEN
        const entity = new SugerenciaProducto(123);
        spyOn(service, 'update').and.returnValue(of(new HttpResponse({ body: entity })));
        comp.updateForm(entity);
        // WHEN
        comp.save();
        tick(); // simulate async

        // THEN
        expect(service.update).toHaveBeenCalledWith(entity);
        expect(comp.isSaving).toEqual(false);
      }));

      it('Should call create service on save for new entity', fakeAsync(() => {
        // GIVEN
        const entity = new SugerenciaProducto();
        spyOn(service, 'create').and.returnValue(of(new HttpResponse({ body: entity })));
        comp.updateForm(entity);
        // WHEN
        comp.save();
        tick(); // simulate async

        // THEN
        expect(service.create).toHaveBeenCalledWith(entity);
        expect(comp.isSaving).toEqual(false);
      }));
    });
  });
});
