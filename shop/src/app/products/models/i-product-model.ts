import {ProductCategory} from './product-category.enum';

export interface IProductModel {

  id: number;
  name: string;
  description: string;
  price: number;
  category: ProductCategory;
  isAvailable?: boolean;
  tags?: Array<string>;

}
