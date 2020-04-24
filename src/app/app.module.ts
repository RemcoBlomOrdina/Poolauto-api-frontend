import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputLicenseplatenumberComponent } from './components/input-licenseplatenumber/input-licenseplatenumber.component';
import { PoolautoApiService } from "./services/poolauto-api.service";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    InputLicenseplatenumberComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [PoolautoApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
