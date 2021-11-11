import { Component } from '@angular/core';

//Cargar js
import { CargasJsService } from './services/cargas-js.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private _CargasJsService:CargasJsService){
    _CargasJsService.Carga(['app']);
  }

  title = 'AngularRounting';
}
