import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { FormsModule } from '@angular/forms';

// Servicio scripts
import { CargarScriptsService } from './services/cargar-scripts.service';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SweetAlert2Module.forRoot(),
    FormsModule
  ],
  providers: [
    CargarScriptsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
