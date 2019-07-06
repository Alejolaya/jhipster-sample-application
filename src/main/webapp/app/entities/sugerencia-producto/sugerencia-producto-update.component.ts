import { Component, OnInit } from '@angular/core';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import * as moment from 'moment';
import { DATE_TIME_FORMAT } from 'app/shared/constants/input.constants';
import { JhiAlertService } from 'ng-jhipster';
import { ISugerenciaProducto, SugerenciaProducto } from 'app/shared/model/sugerencia-producto.model';
import { SugerenciaProductoService } from './sugerencia-producto.service';
import { IUnidadMedida } from 'app/shared/model/unidad-medida.model';
import { UnidadMedidaService } from 'app/entities/unidad-medida';
import { IMarca } from 'app/shared/model/marca.model';
import { MarcaService } from 'app/entities/marca';
import { ICategoria } from 'app/shared/model/categoria.model';
import { CategoriaService } from 'app/entities/categoria';
import { ITags } from 'app/shared/model/tags.model';
import { TagsService } from 'app/entities/tags';
import { INutrientesAdicionales } from 'app/shared/model/nutrientes-adicionales.model';
import { NutrientesAdicionalesService } from 'app/entities/nutrientes-adicionales';

@Component({
  selector: 'jhi-sugerencia-producto-update',
  templateUrl: './sugerencia-producto-update.component.html'
})
export class SugerenciaProductoUpdateComponent implements OnInit {
  isSaving: boolean;

  unidadmedidas: IUnidadMedida[];

  marcas: IMarca[];

  categorias: ICategoria[];

  tags: ITags[];

  nutrientesadicionales: INutrientesAdicionales[];

  editForm = this.fb.group({
    id: [],
    nombreAlimento: [],
    tamanoPorcion: [],
    medidaCasera: [],
    valorEnergetico: [],
    caloriasGrasa: [],
    grasaTotal: [],
    grasaSaturada: [],
    grasaInsaturada: [],
    grasaTrans: [],
    colesterol: [],
    sodio: [],
    carbohidrato: [],
    fibraDietaria: [],
    fibraInsoluble: [],
    fibraSoluble: [],
    azucares: [],
    proteina: [],
    vitaminaA: [],
    vitaminaC: [],
    calcio: [],
    hierro: [],
    gluten: [],
    azucar: [],
    integral: [],
    fechaCreacion: [],
    fechaUltimaModificacion: [],
    estadoActivo: [],
    codigoDeBarras: [],
    imagen: [],
    observaciones: [],
    estadoSugerencia: [],
    unidadPorcion: [],
    unidadMedidaCasera: [],
    marca: [],
    categoria: [],
    tags: [],
    nutrientesAdicionales: []
  });

  constructor(
    protected jhiAlertService: JhiAlertService,
    protected sugerenciaProductoService: SugerenciaProductoService,
    protected unidadMedidaService: UnidadMedidaService,
    protected marcaService: MarcaService,
    protected categoriaService: CategoriaService,
    protected tagsService: TagsService,
    protected nutrientesAdicionalesService: NutrientesAdicionalesService,
    protected activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.isSaving = false;
    this.activatedRoute.data.subscribe(({ sugerenciaProducto }) => {
      this.updateForm(sugerenciaProducto);
    });
    this.unidadMedidaService
      .query()
      .pipe(
        filter((mayBeOk: HttpResponse<IUnidadMedida[]>) => mayBeOk.ok),
        map((response: HttpResponse<IUnidadMedida[]>) => response.body)
      )
      .subscribe((res: IUnidadMedida[]) => (this.unidadmedidas = res), (res: HttpErrorResponse) => this.onError(res.message));
    this.marcaService
      .query()
      .pipe(
        filter((mayBeOk: HttpResponse<IMarca[]>) => mayBeOk.ok),
        map((response: HttpResponse<IMarca[]>) => response.body)
      )
      .subscribe((res: IMarca[]) => (this.marcas = res), (res: HttpErrorResponse) => this.onError(res.message));
    this.categoriaService
      .query()
      .pipe(
        filter((mayBeOk: HttpResponse<ICategoria[]>) => mayBeOk.ok),
        map((response: HttpResponse<ICategoria[]>) => response.body)
      )
      .subscribe((res: ICategoria[]) => (this.categorias = res), (res: HttpErrorResponse) => this.onError(res.message));
    this.tagsService
      .query()
      .pipe(
        filter((mayBeOk: HttpResponse<ITags[]>) => mayBeOk.ok),
        map((response: HttpResponse<ITags[]>) => response.body)
      )
      .subscribe((res: ITags[]) => (this.tags = res), (res: HttpErrorResponse) => this.onError(res.message));
    this.nutrientesAdicionalesService
      .query()
      .pipe(
        filter((mayBeOk: HttpResponse<INutrientesAdicionales[]>) => mayBeOk.ok),
        map((response: HttpResponse<INutrientesAdicionales[]>) => response.body)
      )
      .subscribe(
        (res: INutrientesAdicionales[]) => (this.nutrientesadicionales = res),
        (res: HttpErrorResponse) => this.onError(res.message)
      );
  }

  updateForm(sugerenciaProducto: ISugerenciaProducto) {
    this.editForm.patchValue({
      id: sugerenciaProducto.id,
      nombreAlimento: sugerenciaProducto.nombreAlimento,
      tamanoPorcion: sugerenciaProducto.tamanoPorcion,
      medidaCasera: sugerenciaProducto.medidaCasera,
      valorEnergetico: sugerenciaProducto.valorEnergetico,
      caloriasGrasa: sugerenciaProducto.caloriasGrasa,
      grasaTotal: sugerenciaProducto.grasaTotal,
      grasaSaturada: sugerenciaProducto.grasaSaturada,
      grasaInsaturada: sugerenciaProducto.grasaInsaturada,
      grasaTrans: sugerenciaProducto.grasaTrans,
      colesterol: sugerenciaProducto.colesterol,
      sodio: sugerenciaProducto.sodio,
      carbohidrato: sugerenciaProducto.carbohidrato,
      fibraDietaria: sugerenciaProducto.fibraDietaria,
      fibraInsoluble: sugerenciaProducto.fibraInsoluble,
      fibraSoluble: sugerenciaProducto.fibraSoluble,
      azucares: sugerenciaProducto.azucares,
      proteina: sugerenciaProducto.proteina,
      vitaminaA: sugerenciaProducto.vitaminaA,
      vitaminaC: sugerenciaProducto.vitaminaC,
      calcio: sugerenciaProducto.calcio,
      hierro: sugerenciaProducto.hierro,
      gluten: sugerenciaProducto.gluten,
      azucar: sugerenciaProducto.azucar,
      integral: sugerenciaProducto.integral,
      fechaCreacion: sugerenciaProducto.fechaCreacion != null ? sugerenciaProducto.fechaCreacion.format(DATE_TIME_FORMAT) : null,
      fechaUltimaModificacion:
        sugerenciaProducto.fechaUltimaModificacion != null ? sugerenciaProducto.fechaUltimaModificacion.format(DATE_TIME_FORMAT) : null,
      estadoActivo: sugerenciaProducto.estadoActivo,
      codigoDeBarras: sugerenciaProducto.codigoDeBarras,
      imagen: sugerenciaProducto.imagen,
      observaciones: sugerenciaProducto.observaciones,
      estadoSugerencia: sugerenciaProducto.estadoSugerencia,
      unidadPorcion: sugerenciaProducto.unidadPorcion,
      unidadMedidaCasera: sugerenciaProducto.unidadMedidaCasera,
      marca: sugerenciaProducto.marca,
      categoria: sugerenciaProducto.categoria,
      tags: sugerenciaProducto.tags,
      nutrientesAdicionales: sugerenciaProducto.nutrientesAdicionales
    });
  }

  previousState() {
    window.history.back();
  }

  save() {
    this.isSaving = true;
    const sugerenciaProducto = this.createFromForm();
    if (sugerenciaProducto.id !== undefined) {
      this.subscribeToSaveResponse(this.sugerenciaProductoService.update(sugerenciaProducto));
    } else {
      this.subscribeToSaveResponse(this.sugerenciaProductoService.create(sugerenciaProducto));
    }
  }

  private createFromForm(): ISugerenciaProducto {
    return {
      ...new SugerenciaProducto(),
      id: this.editForm.get(['id']).value,
      nombreAlimento: this.editForm.get(['nombreAlimento']).value,
      tamanoPorcion: this.editForm.get(['tamanoPorcion']).value,
      medidaCasera: this.editForm.get(['medidaCasera']).value,
      valorEnergetico: this.editForm.get(['valorEnergetico']).value,
      caloriasGrasa: this.editForm.get(['caloriasGrasa']).value,
      grasaTotal: this.editForm.get(['grasaTotal']).value,
      grasaSaturada: this.editForm.get(['grasaSaturada']).value,
      grasaInsaturada: this.editForm.get(['grasaInsaturada']).value,
      grasaTrans: this.editForm.get(['grasaTrans']).value,
      colesterol: this.editForm.get(['colesterol']).value,
      sodio: this.editForm.get(['sodio']).value,
      carbohidrato: this.editForm.get(['carbohidrato']).value,
      fibraDietaria: this.editForm.get(['fibraDietaria']).value,
      fibraInsoluble: this.editForm.get(['fibraInsoluble']).value,
      fibraSoluble: this.editForm.get(['fibraSoluble']).value,
      azucares: this.editForm.get(['azucares']).value,
      proteina: this.editForm.get(['proteina']).value,
      vitaminaA: this.editForm.get(['vitaminaA']).value,
      vitaminaC: this.editForm.get(['vitaminaC']).value,
      calcio: this.editForm.get(['calcio']).value,
      hierro: this.editForm.get(['hierro']).value,
      gluten: this.editForm.get(['gluten']).value,
      azucar: this.editForm.get(['azucar']).value,
      integral: this.editForm.get(['integral']).value,
      fechaCreacion:
        this.editForm.get(['fechaCreacion']).value != null
          ? moment(this.editForm.get(['fechaCreacion']).value, DATE_TIME_FORMAT)
          : undefined,
      fechaUltimaModificacion:
        this.editForm.get(['fechaUltimaModificacion']).value != null
          ? moment(this.editForm.get(['fechaUltimaModificacion']).value, DATE_TIME_FORMAT)
          : undefined,
      estadoActivo: this.editForm.get(['estadoActivo']).value,
      codigoDeBarras: this.editForm.get(['codigoDeBarras']).value,
      imagen: this.editForm.get(['imagen']).value,
      observaciones: this.editForm.get(['observaciones']).value,
      estadoSugerencia: this.editForm.get(['estadoSugerencia']).value,
      unidadPorcion: this.editForm.get(['unidadPorcion']).value,
      unidadMedidaCasera: this.editForm.get(['unidadMedidaCasera']).value,
      marca: this.editForm.get(['marca']).value,
      categoria: this.editForm.get(['categoria']).value,
      tags: this.editForm.get(['tags']).value,
      nutrientesAdicionales: this.editForm.get(['nutrientesAdicionales']).value
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<ISugerenciaProducto>>) {
    result.subscribe(() => this.onSaveSuccess(), () => this.onSaveError());
  }

  protected onSaveSuccess() {
    this.isSaving = false;
    this.previousState();
  }

  protected onSaveError() {
    this.isSaving = false;
  }
  protected onError(errorMessage: string) {
    this.jhiAlertService.error(errorMessage, null, null);
  }

  trackUnidadMedidaById(index: number, item: IUnidadMedida) {
    return item.id;
  }

  trackMarcaById(index: number, item: IMarca) {
    return item.id;
  }

  trackCategoriaById(index: number, item: ICategoria) {
    return item.id;
  }

  trackTagsById(index: number, item: ITags) {
    return item.id;
  }

  trackNutrientesAdicionalesById(index: number, item: INutrientesAdicionales) {
    return item.id;
  }

  getSelected(selectedVals: Array<any>, option: any) {
    if (selectedVals) {
      for (let i = 0; i < selectedVals.length; i++) {
        if (option.id === selectedVals[i].id) {
          return selectedVals[i];
        }
      }
    }
    return option;
  }
}
