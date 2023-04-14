import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ReactiveFormsModule } from '@angular/forms';
import { SnackBarDirectiveModule } from './directives/snack-bar.directive-module';
import { ConfirmDialogComponentModule } from './components/confirm-dialog/confirm-dialog.component-module';
import { ConfirmDialogDirectiveModule } from './directives/confirm-dialog.directive-module';
import { BlockPasteDirectiveModule } from './directives/block-paste.directive-module';
import { BackgroundCarouselDirectiveModule } from './directives/background-carousel.directive-module';
import { MovableDirectiveModule } from './directives/movable.directive-module';
import { DeleteProductDirectiveModule } from './directives/delete-product.directive-module';
import { FeatureFlagsDirectiveModule } from './directives/feature-flags.directive-module';
import { UrlValidatorDirectiveModule } from './directives/url-validator.directive-module';

@NgModule({
  declarations: [AppComponent],
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
    FeatureFlagsDirectiveModule,
    UrlValidatorDirectiveModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
