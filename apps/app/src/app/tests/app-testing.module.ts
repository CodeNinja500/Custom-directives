import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from '../app.component';
import { MaterialModule } from '../material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';
import { SnackbarDirectiveTestComponent } from './snackbar-directive.test-component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MoveDirectiveTestComponent } from './move-directive.test-component';
import { BgCarouselDirectiveTestComponent } from './bg-carousel-directive.test-component';
import { FeatureFlagDirectiveTestComponent } from './feature-flag-directive.test-component';
import { DeleteProductDirectiveTestComponent } from './delete-product-directive.test-component';
import { BlockPasteDirectiveTestComponent } from './block-paste-directive.test-component';
import { ConfirmDialogDirectiveTestComponent } from './confirm-dialog-directive.test.component';
import { UrlValidatorDirectiveTestComponent } from './url-vaidator-directive.test-component';
import { ReactiveFormsModule } from '@angular/forms';
import { TelValidatorDirectiveTestComponent } from './tel-validator-directive.test-component';
import { SnackBarDirectiveModule } from '../directives/snack-bar.directive-module';
import { ConfirmDialogComponentModule } from '../components/confirm-dialog/confirm-dialog.component-module';
import { ConfirmDialogDirectiveModule } from '../directives/confirm-dialog.directive-module';
import { BlockPasteDirectiveModule } from '../directives/block-paste.directive-module';
import { BackgroundCarouselDirectiveModule } from '../directives/background-carousel.directive-module';
import { MovableDirectiveModule } from '../directives/movable.directive-module';
import { DeleteProductDirectiveModule } from '../directives/delete-product.directive-module';

@NgModule({
  declarations: [
    SnackbarDirectiveTestComponent,
    MoveDirectiveTestComponent,
    BgCarouselDirectiveTestComponent,
    FeatureFlagDirectiveTestComponent,
    DeleteProductDirectiveTestComponent,
    BlockPasteDirectiveTestComponent,
    ConfirmDialogDirectiveTestComponent,
    UrlValidatorDirectiveTestComponent,
    TelValidatorDirectiveTestComponent,
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    HttpClientModule,
    MaterialModule,
    RouterModule,
    AppRoutingModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    SnackBarDirectiveModule,
    ConfirmDialogComponentModule,
    ConfirmDialogDirectiveModule,
    BlockPasteDirectiveModule,
    BackgroundCarouselDirectiveModule,
    MovableDirectiveModule,
    DeleteProductDirectiveModule,
  ],
  providers: [],
  bootstrap: [],
})
export class AppTestingModule {}
