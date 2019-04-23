import {Component, OnInit, Output} from '@angular/core';
import {ProductsService} from '../../services/products.service';
import {IProductModel} from '../../models/i-product-model';

@Component({
  selector: 'app-product-list-component',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  @Output()
  products: Array<IProductModel>;

  constructor(private productsService: ProductsService) {
  }

  ngOnInit() {
    this.products = this.productsService.getProducts();
  }

}
