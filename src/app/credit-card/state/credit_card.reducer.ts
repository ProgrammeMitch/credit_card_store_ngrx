import * as credit_cardActions from './credit_card.actions';
import { CreditCard } from '../credit_card.model';
import * as fromRoot from '../../app-state';


import { EntityState, EntityAdapter, createEntityAdapter } from "@ngrx/entity";
import { state } from '@angular/animations';


import { Action } from 'rxjs/internal/scheduler/Action';
import { createFeatureSelector, createSelector } from "@ngrx/store";

export interface CreditCardState extends EntityState<CreditCard>{
    selectedCreditCardId: 1;
    loading: boolean;
    loaded: boolean;
    error: string;
}

export interface AppState extends fromRoot.AppState {
    credit_card: CreditCardState
}

export const credit_cardAdapter: EntityAdapter<CreditCard> = createEntityAdapter<CreditCard>();

export const defaultCreditCard: CreditCardState = {
    ids: [],
    entities: {},
    selectedCreditCardId: null,
    loading: false,
    loaded: false,
    error: ""
}

export const initialState = credit_cardAdapter.getInitialState(defaultCreditCard)

export function credit_cardReducer(
    state = initialState,
    action: credit_cardActions.Actioned
): CreditCardState {
    switch(action.type) {
        case credit_cardActions.CreditCardActionTypes.LOAD_CREDITCARD_SUCCESS: {
            return credit_cardAdapter.addMany(action.payload, {
                ...state,
                loading: false,
                loaded: true
            })
        }
        case credit_cardActions.CreditCardActionTypes.LOAD_CREDITCARD_FAIL: {
            return {
                ...state,
                entities: {},
                loading: false,
                loaded: false,
                error: action.payload
            };
        }

        case credit_cardActions.CreditCardActionTypes.CREATE_CREDITCARD_SUCCESS: {
            return credit_cardAdapter.addOne(action.payload, state)
        }

        case credit_cardActions.CreditCardActionTypes.CREATE_CREDITCARD_FAIL: {
            return {
                ...state,
                error: action.payload
            };
        }

        default: {
            return state;
        }
    }
}


const getCreditCardFeatureState = createFeatureSelector<CreditCardState>('credit_card')

export const getCreditCard = createSelector(
    getCreditCardFeatureState,
    credit_cardAdapter.getSelectors().selectAll
)

export const getCreditCardLoading = createSelector(
    getCreditCardFeatureState,
    (state: CreditCardState) => state.loading
)

export const getCreditCardLoaded = createSelector(
    getCreditCardFeatureState,
    (state: CreditCardState) => state.loaded
)

export const getError = createSelector(
    getCreditCardFeatureState,
    (state: CreditCardState) => state.error
)

export const getCurrentCreditCardId = createSelector(
    getCreditCardFeatureState,
    (state: CreditCardState) => state.selectedCreditCardId
);

export const getCurrentCreditCard = createSelector(
    getCreditCardFeatureState,
    getCurrentCreditCardId,
    state => state.entities[state.selectedCreditCardId]
);