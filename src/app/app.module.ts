import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { EffectsModule, Actions } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { credit_cardReducer } from './credit-card/state/credit_card.reducer';

import { StoreDevtoolsModule } from '@ngrx/store-devtools'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreditCardComponent } from './credit-card/credit_card.component';
import { CreditCardEffect } from './credit-card/state/credit_card.effects';

@NgModule({
  declarations: [
    AppComponent,
    CreditCardComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature("credit_card", credit_cardReducer),
    AppRoutingModule,
    StoreDevtoolsModule.instrument(),
    ReactiveFormsModule,
    HttpClientModule,
    EffectsModule.forRoot(),
    EffectsModule.forFeature([CreditCardEffect])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
