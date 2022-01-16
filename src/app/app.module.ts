import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HotelListComponent } from './hotel-list/hotel-list.compnents';
import { ReplaceComma } from './shared/pipes/replace-comma.pipe';
import { StarRatingComponent } from './shared/pipes/components/star-rating/star-rating.component';

registerLocaleData(localeFr, 'fr');
@NgModule({
  declarations: [
    AppComponent,
    HotelListComponent,
    ReplaceComma,
    StarRatingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
