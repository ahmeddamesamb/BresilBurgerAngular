import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonAnimationComponent } from './button-animation/button-animation.component';
import { CustomCardComponent } from './custom-card/custom-card.component';
import { IconTitleComponent } from './icon-title/icon-title.component';



@NgModule({
  declarations: [
    ButtonAnimationComponent,
    CustomCardComponent,
    IconTitleComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
