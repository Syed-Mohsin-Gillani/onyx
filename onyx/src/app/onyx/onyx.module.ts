import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstpageComponent } from './firstpage/FirstpageComponent';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FirstpageComponent
  ],

  exports:[FirstpageComponent]
})
export class OnyxModule { }
