import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreditCardComponent } from './credit-card/credit_card.component'

const routes: Routes = [
  { path: '', component: CreditCardComponent },
  { path: 'credit_card', component: CreditCardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
