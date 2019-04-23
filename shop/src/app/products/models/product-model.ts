import {ProductCategory} from './product-category.enum';
import {IProductModel} from './i-product-model';

export class ProductModel implements IProductModel {

  constructor( public id: number,
               public name: string,
               public description: string,
               public price: number,
               public category: ProductCategory,
               public isAvailable?: boolean,
               public tags?: Array<string> ) {
    this.tags = tags || [category.toString()];
  }

}
