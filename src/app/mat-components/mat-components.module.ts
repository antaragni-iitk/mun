import {NgModule} from '@angular/core';
import {
  MatButtonModule, MatCardModule, MatDatepickerModule, MatDialogModule, MatDividerModule, MatInputModule, MatNativeDateModule,
  MatPaginatorModule, MatListModule,
  MatSelectModule, MatSnackBarModule, MatProgressSpinnerModule, MatSortModule, MatTableModule, MatTabsModule, MatTooltipModule, MatRadioModule
} from '@angular/material';
import {MatSidenavModule} from '@angular/material/sidenav';
import { ScrollDispatchModule } from '@angular/cdk/scrolling';

@NgModule({
  exports: [
    MatButtonModule,
    MatInputModule,
    MatTooltipModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatDividerModule,
    MatTabsModule,
    MatButtonModule,
    MatCardModule,
    MatSnackBarModule,
    MatSidenavModule,
    MatDialogModule,
    MatListModule,
    ScrollDispatchModule,
    MatRadioModule,
    MatProgressSpinnerModule,
  ]
})
export class MatComponentsModule {
}
