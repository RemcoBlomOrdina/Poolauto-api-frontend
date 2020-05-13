import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputLicenseplatenumberComponent } from './components/input-licenseplatenumber/input-licenseplatenumber.component';
import { PoolautoApiService } from "./services/poolauto-api.service";
import {FormsModule} from "@angular/forms";
import {ClipboardModule} from "@angular/cdk/clipboard";
import { HeaderComponent } from './components/header/header.component';
import { DataDisplayComponent } from './components/data-response/data-display.component';

@NgModule({
  declarations: [
    AppComponent,
    InputLicenseplatenumberComponent,
    HeaderComponent,
    DataDisplayComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ClipboardModule,
    ],
  providers: [PoolautoApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
