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
  ],
  providers: [],
  bootstrap: [],
})
export class AppTestingModule {}
