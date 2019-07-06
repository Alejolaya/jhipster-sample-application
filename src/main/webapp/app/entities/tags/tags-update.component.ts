import { Component, OnInit } from '@angular/core';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { JhiAlertService } from 'ng-jhipster';
import { ITags, Tags } from 'app/shared/model/tags.model';
import { TagsService } from './tags.service';
import { ISugerenciaProducto } from 'app/shared/model/sugerencia-producto.model';
import { SugerenciaProductoService } from 'app/entities/sugerencia-producto';

@Component({
  selector: 'jhi-tags-update',
  templateUrl: './tags-update.component.html'
})
export class TagsUpdateComponent implements OnInit {
  isSaving: boolean;

  sugerenciaproductos: ISugerenciaProducto[];

  editForm = this.fb.group({
    id: [],
    descripcion: []
  });

  constructor(
    protected jhiAlertService: JhiAlertService,
    protected tagsService: TagsService,
    protected sugerenciaProductoService: SugerenciaProductoService,
    protected activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.isSaving = false;
    this.activatedRoute.data.subscribe(({ tags }) => {
      this.updateForm(tags);
    });
    this.sugerenciaProductoService
      .query()
      .pipe(
        filter((mayBeOk: HttpResponse<ISugerenciaProducto[]>) => mayBeOk.ok),
        map((response: HttpResponse<ISugerenciaProducto[]>) => response.body)
      )
      .subscribe((res: ISugerenciaProducto[]) => (this.sugerenciaproductos = res), (res: HttpErrorResponse) => this.onError(res.message));
  }

  updateForm(tags: ITags) {
    this.editForm.patchValue({
      id: tags.id,
      descripcion: tags.descripcion
    });
  }

  previousState() {
    window.history.back();
  }

  save() {
    this.isSaving = true;
    const tags = this.createFromForm();
    if (tags.id !== undefined) {
      this.subscribeToSaveResponse(this.tagsService.update(tags));
    } else {
      this.subscribeToSaveResponse(this.tagsService.create(tags));
    }
  }

  private createFromForm(): ITags {
    return {
      ...new Tags(),
      id: this.editForm.get(['id']).value,
      descripcion: this.editForm.get(['descripcion']).value
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<ITags>>) {
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

  trackSugerenciaProductoById(index: number, item: ISugerenciaProducto) {
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
