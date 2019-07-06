import { IUnidadMedida } from 'app/shared/model/unidad-medida.model';
import { ISugerenciaProducto } from 'app/shared/model/sugerencia-producto.model';

export interface INutrientesAdicionales {
  id?: number;
  descripcion?: string;
  valor?: string;
  unidadPorcion?: IUnidadMedida;
  sugerenciaProductos?: ISugerenciaProducto[];
}

export class NutrientesAdicionales implements INutrientesAdicionales {
  constructor(
    public id?: number,
    public descripcion?: string,
    public valor?: string,
    public unidadPorcion?: IUnidadMedida,
    public sugerenciaProductos?: ISugerenciaProducto[]
  ) {}
}
