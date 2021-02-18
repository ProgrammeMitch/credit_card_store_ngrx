import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import * as fromCreditCard from '../credit-card/state/credit_card.reducer';
import * as credit_cardActions from '../credit-card/state/credit_card.actions';
import { CreditCard }from '../credit-card/credit_card.model';
import { CreditCardService } from "../credit-card/credit_card.service";
import { Observable } from 'rxjs';
@Component({
  selector: 'app-credit-card',
  templateUrl: './credit_card.component.html',
  styleUrls: ['./credit_card.component.scss']
})
export class CreditCardComponent implements OnInit {

  creditCardDetails: FormGroup;
  idNumber = Math.random()*10;
  constructor(
    private fb: FormBuilder,
    private store: Store<fromCreditCard.AppState>
  ) {

  }

  ngOnInit() {
    this.creditCardDetails = this.fb.group({
      id: new FormControl(''),
      creditCardNumber: new FormControl('', Validators.required),
      cardHolder: new FormControl('', Validators.required),
      expirationDate: new FormControl('', Validators.required),
      securityCode: new FormControl(''),
      amount: new FormControl('', Validators.required)
    });

    const credit_card$: Observable<CreditCard>= this.store.select(
      fromCreditCard.getCurrentCreditCard
    )

    credit_card$.subscribe(currentCreditCard => {
      if (currentCreditCard) {
        this.creditCardDetails.patchValue({
          id: currentCreditCard.id,
          creditCardNumber: currentCreditCard.creditCardNumber,
          cardHolder: currentCreditCard.cardHolder,
          expirationDate: currentCreditCard.expirationDate,
          securityCode: currentCreditCard.securityCode,
          amount: currentCreditCard.amount
        })
      }
    })
  }

  onSubmit() {
    const newCreditCard: CreditCard = {
      id: this.idNumber,
      creditCardNumber: this.creditCardDetails.get('creditCardNumber').value,
      cardHolder: this.creditCardDetails.get('cardHolder').value,
      expirationDate: this.creditCardDetails.get('expirationDate').value,
      securityCode: this.creditCardDetails.get('securityCode').value,
      amount: this.creditCardDetails.get('amount').value
    };

    this.store.dispatch(new credit_cardActions.CreateCreditCard(newCreditCard))

    this.creditCardDetails.reset();
  }

}
