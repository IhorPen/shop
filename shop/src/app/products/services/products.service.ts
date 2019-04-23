import {Injectable} from '@angular/core';

import {ProductModel} from '../models/product-model';
import {ProductCategory} from '../models/product-category.enum';
import {IProductModel} from '../models/i-product-model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  getProducts(): Array<IProductModel> {
    return [
      new ProductModel(1, 'LG DF323LC', 'LG TV 32\'\'', 24000, ProductCategory.TV, false),
      new ProductModel(2, 'Samsung J6', 'Samsung J6', 4000, ProductCategory.CELL_PHONE, false),
      new ProductModel(3, 'Brain GH35', 'Intel Quad i7, 32Gb Ram, 4TB, Nvidia G-Force 1080', 18000, ProductCategory.COMPUTERS, true),
      new ProductModel(4, 'Kingston Keyboard K400', 'Kingston Mechanical Keyboard K400', 1400, ProductCategory.COMPUTER_HARDWARE,
        true, ['computers', 'hardware'])
    ];
  }
}
