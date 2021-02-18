import { Component } from '@angular/core';

import { select, Store } from '@ngrx/store';
import { Observable } from "rxjs";

import * as credit_cardActions from '../app/credit-card/state/credit_card.actions'
import * as fromCreditCard from '../app/credit-card/state/credit_card.reducer';
import { CreditCard } from '../app/credit-card/credit_card.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  displaying = false;
  credit_card$: Observable<CreditCard[]>;
  stores = 'display database'


  display() {
    this.displaying = !this.displaying;
    if (this.displaying) {
      this.stores = 'hide database'
    } else {
      this.stores = 'display database'
    }
    this.store.dispatch(new credit_cardActions.LoadCreditCard());
    this.credit_card$ = this.store.pipe(select(fromCreditCard.getCreditCard))
  }

  
  constructor(private store: Store<any>) { }

  ngOnInit(): void {

  }
}
