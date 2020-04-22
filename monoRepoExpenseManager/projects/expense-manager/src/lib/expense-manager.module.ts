import { NgModule } from '@angular/core';
import { MenuComponent } from './menu/menu.component';
import { ExpenseManagerRoutingModule } from './expense-manager-routing.module';
import { CommonModule } from '@angular/common';




@NgModule({
  declarations: [MenuComponent],
  imports: [
    ExpenseManagerRoutingModule,
    CommonModule
  ],
  exports: [MenuComponent]
})
export class ExpenseManagerModule { }
