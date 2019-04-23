import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';

import {ProductCategory} from '../../models/product-category.enum';
import {IProductModel} from '../../models/i-product-model';
import {CartService} from '../../../cart/services/cart.service';

@Component({
  selector: 'app-product-component',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input()
  productModel: IProductModel;

  name: string;
  description: string;
  price: number;
  category: ProductCategory;
  isAvailable: boolean;
  tags: Array<string>;

  constructor( public cartService: CartService) { }

  ngOnInit() {
    if (this.productModel) {
      this.name = this.productModel.name;
      this.description = this.productModel.description;
      this.price = this.productModel.price;
      this.category = this.productModel.category;
      this.isAvailable = this.productModel.isAvailable;
      this.tags = this.productModel.tags;
    } else {
      this.name = 'product';
      this.description = 'description';
      this.price = 100;
      this.category = ProductCategory.ACCESSORIES;
      this.isAvailable = true;
      this.tags = ['product', 'accessories'];
    }
  }

  onBuy($event: MouseEvent) {
    console.log(`Product \'${this.name}\' has been added to the cart`);
    this.cartService.addToCart(this.productModel);
  }
}
