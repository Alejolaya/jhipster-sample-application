import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'producto',
        loadChildren: './producto/producto.module#JhipsterSampleApplicationProductoModule'
      },
      {
        path: 'nutrientes-adicionales',
        loadChildren: './nutrientes-adicionales/nutrientes-adicionales.module#JhipsterSampleApplicationNutrientesAdicionalesModule'
      },
      {
        path: 'tags',
        loadChildren: './tags/tags.module#JhipsterSampleApplicationTagsModule'
      },
      {
        path: 'unidad-medida',
        loadChildren: './unidad-medida/unidad-medida.module#JhipsterSampleApplicationUnidadMedidaModule'
      },
      {
        path: 'tipo-unidad-medida',
        loadChildren: './tipo-unidad-medida/tipo-unidad-medida.module#JhipsterSampleApplicationTipoUnidadMedidaModule'
      },
      {
        path: 'marca',
        loadChildren: './marca/marca.module#JhipsterSampleApplicationMarcaModule'
      },
      {
        path: 'categoria',
        loadChildren: './categoria/categoria.module#JhipsterSampleApplicationCategoriaModule'
      }
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ])
  ],
  declarations: [],
  entryComponents: [],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterSampleApplicationEntityModule {}
