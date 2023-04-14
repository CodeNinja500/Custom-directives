import {
  Directive,
  Input,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { FeaturesService } from '../services/features.service';
import { take, tap } from 'rxjs';

@Directive({ selector: '[featureFlag]' })
export class FeatureFlagsDirective implements OnInit {
  @Input() featureFlag: string | null = null;
  @Input() featureFlagElse: TemplateRef<any> | null = null;

  constructor(
    private _featuresService: FeaturesService,
    private _templateRef: TemplateRef<any>,
    private _viewContainer: ViewContainerRef
  ) {}

  ngOnInit(): void {
    if (this.featureFlag)
      this._featuresService
        .getFeaureFlags()
        .pipe(
          take(1),
          tap((flags) => {
            if (
              flags.find(
                (flagBe) =>
                  flagBe.name.toLowerCase() === this.featureFlag?.toLowerCase()
              )
            ) {
              this._viewContainer.createEmbeddedView(this._templateRef);
            } else {
              this._viewContainer.clear();
              if (this.featureFlagElse) {
                this._viewContainer.createEmbeddedView(this.featureFlagElse);
              }
            }
          })
        )
        .subscribe();
    else {
      this._viewContainer.clear();
      if (this.featureFlagElse) {
        this._viewContainer.createEmbeddedView(this.featureFlagElse);
      }
    }
  }
}
