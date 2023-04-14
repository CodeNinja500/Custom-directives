import { Directive, Input, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';

@Directive({ selector: '[deleteProduct]' })
export class DeleteProductDirective implements OnInit {
  @Input() deleteProduct: string = '';
  constructor(private _productsService: ProductsService) {}

  ngOnInit(): void {
    this._productsService.deleteProduct(this.deleteProduct).subscribe();
  }
}
