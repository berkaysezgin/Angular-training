import { RouterModule, Routes } from '@angular/router';

import { CommonModule } from '@angular/common';
import { DataBindingComponent } from './data-binding.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

const routes:Routes=[{
  path:"",
  component:DataBindingComponent
}]

@NgModule({
  declarations: [ DataBindingComponent],
  imports: [
    CommonModule, RouterModule.forChild(routes),FormsModule
  ]
})
export class DataBindingModule { }
