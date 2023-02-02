import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { IgxButtonModule, IgxIconModule, IgxNavbarModule, IgxNavigationDrawerModule } from 'igniteui-angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { CookieService } from 'ngx-cookie-service';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { RoleComponent } from './role/role.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { StorageModule } from './storage/storage.module';
import { ToastrModule } from 'ngx-toastr';
import { UserModule } from './user/user.module';

@NgModule({
  declarations: [
    AppComponent,
    RoleComponent,
      NavbarComponent,
      SidebarComponent,
   
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    NgxSpinnerModule,
    IgxButtonModule,
    UserModule,
    IgxNavbarModule,
    IgxIconModule,
    IgxNavigationDrawerModule,
    StorageModule
  ],
  providers:[CookieService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {
}
