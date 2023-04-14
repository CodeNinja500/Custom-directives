import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FeatureModel } from '../models/feature.model';

@Injectable({ providedIn: 'root' })
export class FeaturesService {
  constructor(private _httpClient: HttpClient) {}

  getFeaureFlags(): Observable<FeatureModel[]> {
    return this._httpClient.get<FeatureModel[]>(
      'https://636ce2d8ab4814f2b2712854.mockapi.io/feature-flags'
    );
  }
}
