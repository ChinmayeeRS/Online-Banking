import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FindbycustomeridComponent } from "./CustomerComponets/findbycustomerid/findbycustomerid.component";
import { ForgotPassComponent } from "./forgot-pass/forgot-pass.component";
import { HomeComponent } from "./home/home.component";
import { AddLoanComponent } from "./loan/add-loan/add-loan.component";
import { LoanApplicationGeneralComponent } from "./loan/loan-application-general/loan-application-general.component";
import { LoanDetailsComponent } from "./loan/loan-details/loan-details.component";
import { LoanListComponent } from "./loan/loan-list/loan-list.component";
import { LoandetailscustComponent } from "./loan/loandetailscust/loandetailscust.component";
import { UpdateLoanComponent } from "./loan/update-loan/update-loan.component";
import { LoginComponent } from "./login/login.component";

import { ViewAllAdminComponent } from "./AdminComponent/view-all-admin/view-all-admin.component";

import { ViewTransactionComponent } from "./TransactionComponents/view-transaction/view-transaction.component";
import { ViewallcustomersComponent } from "./CustomerComponets/viewallcustomers/viewallcustomers.component";
import { ViewalltransactionComponent } from "./TransactionComponents/viewalltransaction/viewalltransaction.component";
import { WelcomeComponent } from "./Welcome/welcome.component";
import { AddAccountComponent } from "./AccountComponents/add-Account/add-account.component";
import { FindByAccountComponent } from "./AccountComponents/find-by-account/find-by-account.component";
import { UpdateAccountComponent } from "./AccountComponents/update-account/update-account.component";
import { ViewAllComponent } from "./AccountComponents/view-all/view-all.component";
import { AddAdminComponent } from "./AdminComponent/add-admin/add-admin.component";
import { UpdateAdminComponent } from "./AdminComponent/update-admin/update-admin.component";
import { ViewAdminComponent } from "./AdminComponent/view-admin/view-admin.component";
import { AddcustomerComponent } from "./CustomerComponets/addcustomer/addcustomer.component";
import { UpdatecustomerComponent } from "./CustomerComponets/updatecustomer/updatecustomer.component";
import { AddtransactionComponent } from "./TransactionComponents/addtransaction/addtransaction.component";
import { CreditComponent } from "./TransactionComponents/credit/credit.component";
import { CredittransactionComponent } from "./TransactionComponents/credittransaction/credittransaction.component";
import { DebitComponent } from "./TransactionComponents/debit/debit.component";
import { DebittransactionComponent } from "./TransactionComponents/debittransaction/debittransaction.component";
import { UpdatetransactionComponent } from "./TransactionComponents/updatetransaction/updatetransaction.component";
import { CreateUserComponent } from "./UserComponent/create-user/create-user.component";






const routes: Routes = [
  { path: '', redirectTo: 'signIn', pathMatch: 'full' },
  { path: 'signIn', component: LoginComponent },
  { path: 'home', component: HomeComponent},
  { path: 'signUp', component: CreateUserComponent },
  { path: 'forgot', component: ForgotPassComponent },
  
 { path: 'welcome', component: WelcomeComponent },
  { path: 'account', component: ViewAllComponent },
  { path: 'newaccount', component: AddAccountComponent },
  { path: 'updateaccount/:accountId', component: UpdateAccountComponent },
  
  { path: 'admin', component: ViewAllAdminComponent },
  { path: 'newadmin', component: AddAdminComponent },
  { path: 'updateadmin/:adminId', component: UpdateAdminComponent },
  { path: 'view/:adminId', component: ViewAdminComponent },
  { path: 'newcustomer', component: AddcustomerComponent },
  { path: 'viewaccount/:accountId', component: FindByAccountComponent },
  { path: 'viewcustomer/:custId', component: FindbycustomeridComponent },
  { path: 'customer', component: ViewallcustomersComponent},
  { path: 'update/:custId', component: UpdatecustomerComponent },
 
  //loan component path
  { path: 'loans', component: LoanListComponent },
 // 
  { path: 'updateloan/:id', component: UpdateLoanComponent },
  { path: 'details/:id', component: LoanDetailsComponent },
  { path: 'custloan', component: AddLoanComponent },
  { path: 'genloan', component: LoanApplicationGeneralComponent },
  { path: 'details/:cid', component: LoandetailscustComponent },

  { path: 'creditOp', component: CredittransactionComponent},
  
  { path: 'debitOP', component: DebittransactionComponent},
 
  { path: 'viewtransaction/:accountNo', component: ViewTransactionComponent },
  { path: 'newtransaction', component: AddtransactionComponent },
  { path: 'transaction', component: ViewalltransactionComponent},
  { path: 'tran/update/:accountNo', component: UpdatetransactionComponent},
  { path: 'credittransaction/:accountNo', component: CredittransactionComponent},
  { path: 'debit' , component: DebitComponent},
  { path: 'credit', component: CreditComponent},
  { path: 'debittransaction/:accountNo', component: DebittransactionComponent},

  //  { path: '', redirectTo: 'home', pathMatch: 'full' },
  

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
