import {Injectable} from '@angular/core';
import {IProductModel} from '../../products/models/i-product-model';
import {CartItemModel} from '../models/cart-item-model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItems: Array<CartItemModel> = new Array<CartItemModel>();

  constructor() {
  }

  getCartItems(): Array<CartItemModel> {
    return this.cartItems;
  }

  addToCart(product: IProductModel): void {
    for (const item of this.cartItems) {
      if (item && item.product && item.product.id === product.id) {
        item.quantity++;
        return;
      }
    }
    const cartItem: CartItemModel = new CartItemModel();
    cartItem.quantity = 1;
    cartItem.product = {...product};
    this.cartItems.push(cartItem);
  }
}
