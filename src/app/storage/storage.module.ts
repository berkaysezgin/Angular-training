import { RouterModule, Routes } from '@angular/router';

import { CommonModule } from '@angular/common';
import { CookieComponent } from './cookie/cookie.component';
import { FormsModule } from '@angular/forms';
import { LocalStorageComponent } from './local-storage/local-storage.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'cookie',
        component: CookieComponent,
      },
      {
        path: 'local-storage',
        component: LocalStorageComponent,
      },
      {
        path: '',
        redirectTo: 'local-storage',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  
  declarations: [LocalStorageComponent, CookieComponent],
  imports: [CommonModule, RouterModule.forChild(routes), FormsModule],
})
export class StorageModule {}
