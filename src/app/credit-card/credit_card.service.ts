import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CreditCard } from './credit_card.model';
import { CreditCardState } from './state/credit_card.reducer';

@Injectable({
    providedIn: 'root'
})

export class CreditCardService {
    constructor(private http: HttpClient) {}

    getCreditCard() {
        return this.http.get('http://localhost:3000/credit_card')
    }

    createCreditCard(credit_card: CreditCard) {
        console.log('presenceS')
        return this.http.post('http://localhost:3000/credit_card', credit_card)
    }
}