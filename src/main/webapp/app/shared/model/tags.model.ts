import { ISugerenciaProducto } from 'app/shared/model/sugerencia-producto.model';

export interface ITags {
  id?: number;
  descripcion?: string;
  sugerenciaProductos?: ISugerenciaProducto[];
}

export class Tags implements ITags {
  constructor(public id?: number, public descripcion?: string, public sugerenciaProductos?: ISugerenciaProducto[]) {}
}
