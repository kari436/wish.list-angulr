import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DestinoViajeComponent } from './destino-viaje/destino-viaje.component';
import { ListaDestinoComponent } from './lista-destino/lista-destino.component';
import { DestinoDetalleComponent } from './destino-detalle/destino-detalle.component';
import { FormDestinoViajeComponent } from './form-destino-viaje/form-destino-viaje.component';
import { DestinosApiClient } from './models/destinos-api-client.model';
import { DestinosViajesState, reducerDestinosViajes } from './models/destinos-viajes-state.model';
import { ActionReducerMap } from '@ngrx/store';

//redux init
export interface AppState{
  destinos:DestinosViajesState;
}

const reducers:ActionReducerMap<AppState>={
  destinos: reducerDestinosViajes
}


@NgModule({
  declarations: [
    AppComponent,
    DestinoViajeComponent,
    ListaDestinoComponent,
    DestinoDetalleComponent,
    FormDestinoViajeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,//imports para creacion de formularios
    ReactiveFormsModule,//imports para creacion de formularios
    AppRoutingModule,    
  ],
  providers: [
    DestinosApiClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
