//Add Imports
import { Action } from '@ngrx/store';
import { Update } from "@ngrx/entity";
import { CreditCard } from '../credit_card.model';

//list valid action types
export enum CreditCardActionTypes {
    LOAD_CREDITCARD = '[CreditCard] Load CreditCard',
    LOAD_CREDITCARD_SUCCESS = '[CreditCard] Load CreditCard Success',
    LOAD_CREDITCARD_FAIL = '[CreditCard] Load CreditCard Fail',
    CREATE_CREDITCARD = '[CreditCard] Create CreditCard',
    CREATE_CREDITCARD_SUCCESS = '[CreditCard] Create CreditCard Success',
    CREATE_CREDITCARD_FAIL = '[CreditCard] Create CreditCard Fail',
    DELETE_CREDITCARD = '[CreditCard] Delete CreditCard',
    DELETE_CREDITCARD_SUCCESS = '[CreditCard] Delete CreditCard Success',
    DELETE_CREDITCARD_FAIL = '[CreditCard] Delete CreditCard Fail',
}

//Create actions using action creators
export class LoadCreditCard implements Action {
    readonly type = CreditCardActionTypes.LOAD_CREDITCARD
}

export class LoadCreditCardSuccess implements Action {
    readonly type = CreditCardActionTypes.LOAD_CREDITCARD_SUCCESS

    constructor(public payload: CreditCard[]) {}
}

export class LoadCreditCardFail implements Action {
    readonly type = CreditCardActionTypes.LOAD_CREDITCARD_FAIL

    constructor(public payload: string) {}
}

export class CreateCreditCard implements Action {
    readonly type = CreditCardActionTypes.CREATE_CREDITCARD;
    constructor(public payload: CreditCard) {}
}

export class CreateCreditCardSuccess implements Action {
    readonly type = CreditCardActionTypes.CREATE_CREDITCARD_SUCCESS

    constructor(public payload: CreditCard) {}
}

export class CreateCreditCardFail implements Action {
    readonly type = CreditCardActionTypes.CREATE_CREDITCARD_FAIL

    constructor(public payload: string) {}
}

export class DeleteCreditCard implements Action {
    readonly type = CreditCardActionTypes.DELETE_CREDITCARD;
    constructor(public payload: number) {}
}

export class DeleteCreditCardSuccess implements Action {
    readonly type = CreditCardActionTypes.DELETE_CREDITCARD_SUCCESS

    constructor(public payload: number) {}
}

export class DeleteCreditCardFail implements Action {
    readonly type = CreditCardActionTypes.DELETE_CREDITCARD_FAIL

    constructor(public payload: number) {}
}

export type Actioned = 
LoadCreditCard | 
LoadCreditCardSuccess | 
LoadCreditCardFail |
CreateCreditCard | 
CreateCreditCardSuccess | 
CreateCreditCardFail |
DeleteCreditCard | 
DeleteCreditCardSuccess | 
DeleteCreditCardFail;