import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ProductsService {
  constructor(private _httpClient: HttpClient) {}

  public deleteProduct(productId: string): Observable<void> {
    return this._httpClient.delete<void>(
      'https://fakestoreapi.com/products/' + productId
    );
  }
}
