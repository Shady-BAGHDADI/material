import { NgModule } from "@angular/core";
//import * as Material from "@angular/material";
import {
  MatCheckboxModule,
  MatRadioModule,
  MatSelectModule,
  MatFormFieldModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatIconModule,
  MatButtonModule,
  MatChipsModule,
  MatProgressSpinnerModule,
  MatTooltipModule,
  MatTabsModule,
  MatDialogModule,
} from "@angular/material";
import { EditCourceComponent } from "./edit-cource/edit-cource.component";

@NgModule({
  // entryComponents : Register all the components that are added dynamically else
  //error : No component  factory found  for X component
  entryComponents: [EditCourceComponent],

  exports: [
    // Material.MatCheckboxModule
    MatCheckboxModule,
    MatRadioModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatIconModule,
    MatButtonModule,
    MatChipsModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
    MatTabsModule,
    MatDialogModule,
    MatNativeDateModule,
  ],
})
export class MatComponentsModule {}
