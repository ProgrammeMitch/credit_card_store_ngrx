import { Injectable } from '@angular/core';

import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';

import { Observable, of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';

import { CreditCardService } from '../credit_card.service';
import * as credit_cardActions from '../state/credit_card.actions';
import { CreditCard } from '../credit_card.model';

@Injectable()
export class CreditCardEffect {

    constructor(
        private actions$: Actions,
        private credit_cardService: CreditCardService
    ) {}

    @Effect()
    loadCreditCard$: Observable<Action> = this.actions$.pipe(
        ofType<credit_cardActions.LoadCreditCard>(
            credit_cardActions.CreditCardActionTypes.LOAD_CREDITCARD
        ),
        mergeMap((action: credit_cardActions.LoadCreditCard) => 
            this.credit_cardService.getCreditCard().pipe(
                map(
                    (credit_card: CreditCard[]) =>
                    new credit_cardActions.LoadCreditCardSuccess(credit_card)
                ),
                catchError(err => of(new credit_cardActions.LoadCreditCardFail(err)))
            )
        )
    );

    @Effect()
    createCreditCard$: Observable<Action> = this.actions$.pipe(
        ofType<credit_cardActions.CreateCreditCard>(
            credit_cardActions.CreditCardActionTypes.CREATE_CREDITCARD
        ),
        map((action: credit_cardActions.CreateCreditCard) => action.payload),
        mergeMap((credit_card: CreditCard) => 
            this.credit_cardService.createCreditCard(credit_card).pipe(
                map(
                    (credit_card: CreditCard) =>
                    new credit_cardActions.CreateCreditCardSuccess(credit_card)
                ),
                catchError(err => of(new credit_cardActions.CreateCreditCardFail(err)))
            )
        )
    )

    @Effect()
    deleteCreditCard$: Observable<Action> = this.actions$.pipe(
        ofType<credit_cardActions.DeleteCreditCard>(
            credit_cardActions.CreditCardActionTypes.DELETE_CREDITCARD
        ),
        map((action: credit_cardActions.DeleteCreditCard) => action.payload),
        mergeMap((id: number) => 
            this.credit_cardService.deleteCreditCard(id).pipe(
                map(
                    () =>
                    new credit_cardActions.DeleteCreditCardSuccess(id)
                ),
                catchError(err => of(new credit_cardActions.DeleteCreditCardFail(err)))
            )
        )
    )
}