import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatRippleModule,
  DateAdapter as MatDateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
} from '@angular/material/core';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';

import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import {
  MatProgressSpinner,
  MatProgressSpinnerModule,
} from '@angular/material/progress-spinner';
import { MatListModule } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSliderModule } from '@angular/material/slider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatBadgeModule } from '@angular/material/badge';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    MatCheckboxModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatDialogModule,
    MatDividerModule,
    MatDatepickerModule,
    MatProgressBarModule,
    MatInputModule,
    MatSnackBarModule,
    MatSlideToggleModule,
    MatProgressSpinnerModule,
    MatChipsModule,
    MatCardModule,
    MatRippleModule,
    MatListModule,
    MatBadgeModule,
    MatToolbarModule,
    SlickCarouselModule,
  ],
  exports: [
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    MatCheckboxModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatDialogModule,
    MatDividerModule,
    MatDatepickerModule,
    MatProgressBarModule,
    MatInputModule,
    MatSnackBarModule,
    MatSlideToggleModule,
    MatProgressSpinnerModule,
    MatChipsModule,
    MatCardModule,
    MatRippleModule,
    MatListModule,
    MatBadgeModule,
    MatToolbarModule,
    SlickCarouselModule,
  ],
})
export class SharedModule {}
