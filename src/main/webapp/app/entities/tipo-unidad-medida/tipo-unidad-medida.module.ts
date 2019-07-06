import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JhiLanguageService } from 'ng-jhipster';
import { JhiLanguageHelper } from 'app/core';

import { JhipsterSampleApplicationSharedModule } from 'app/shared';
import {
  TipoUnidadMedidaComponent,
  TipoUnidadMedidaDetailComponent,
  TipoUnidadMedidaUpdateComponent,
  TipoUnidadMedidaDeletePopupComponent,
  TipoUnidadMedidaDeleteDialogComponent,
  tipoUnidadMedidaRoute,
  tipoUnidadMedidaPopupRoute
} from './';

const ENTITY_STATES = [...tipoUnidadMedidaRoute, ...tipoUnidadMedidaPopupRoute];

@NgModule({
  imports: [JhipsterSampleApplicationSharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [
    TipoUnidadMedidaComponent,
    TipoUnidadMedidaDetailComponent,
    TipoUnidadMedidaUpdateComponent,
    TipoUnidadMedidaDeleteDialogComponent,
    TipoUnidadMedidaDeletePopupComponent
  ],
  entryComponents: [
    TipoUnidadMedidaComponent,
    TipoUnidadMedidaUpdateComponent,
    TipoUnidadMedidaDeleteDialogComponent,
    TipoUnidadMedidaDeletePopupComponent
  ],
  providers: [{ provide: JhiLanguageService, useClass: JhiLanguageService }],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterSampleApplicationTipoUnidadMedidaModule {
  constructor(private languageService: JhiLanguageService, private languageHelper: JhiLanguageHelper) {
    this.languageHelper.language.subscribe((languageKey: string) => {
      if (languageKey !== undefined) {
        this.languageService.changeLanguage(languageKey);
      }
    });
  }
}
