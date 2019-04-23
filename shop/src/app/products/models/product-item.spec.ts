import {ProductModel} from './product-model';
import {ProductCategory} from './product-category.enum';

describe('ProductModel', () => {
  it('should create an instance', () => {
    expect(new ProductModel(1, 'name', 'description', 0, ProductCategory.ACCESSORIES)).toBeTruthy();
  });
});
