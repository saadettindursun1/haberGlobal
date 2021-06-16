import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';

const MatModuller = [
  MatButtonModule,
  MatIconModule,
  MatDividerModule,
  MatCardModule,
  MatToolbarModule,
  MatDialogModule, 
  MatFormFieldModule,
  MatSidenavModule,
  MatListModule,
  MatInputModule,
  MatSelectModule,
  MatCarouselModule.forRoot(),
  MatTableModule,

];

@NgModule({
  imports: [MatModuller],
  exports: [MatModuller],
})
export class MaterialModule {}
