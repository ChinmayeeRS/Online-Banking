// import { NgModule } from '@angular/core';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FindbycustomeridComponent } from "./CustomerComponets/findbycustomerid/findbycustomerid.component";
import { ForgotPassComponent } from "./forgot-pass/forgot-pass.component";
import { HomeComponent } from "./home/home.component";
import { ViewAllAdminComponent } from "./AdminComponent/view-all-admin/view-all-admin.component";

import { ViewTransactionComponent } from "./TransactionComponents/view-transaction/view-transaction.component";
import { ViewallcustomersComponent } from "./CustomerComponets/viewallcustomers/viewallcustomers.component";
import { ViewalltransactionComponent } from "./TransactionComponents/viewalltransaction/viewalltransaction.component";
import { WelcomeComponent } from "./Welcome/welcome.component";
import { AddAccountComponent } from "./AccountComponents/add-Account/add-account.component";
import { FindByAccountComponent } from "./AccountComponents/find-by-account/find-by-account.component";
import { RemoveAccountComponent } from "./AccountComponents/remove-account/remove-account.component";
import { UpdateAccountComponent } from "./AccountComponents/update-account/update-account.component";
import { ViewAllComponent } from "./AccountComponents/view-all/view-all.component";
import { AddAdminComponent } from "./AdminComponent/add-admin/add-admin.component";
import { RemoveAdminComponent } from "./AdminComponent/remove-admin/remove-admin.component";
import { UpdateAdminComponent } from "./AdminComponent/update-admin/update-admin.component";
import { ViewAdminComponent } from "./AdminComponent/view-admin/view-admin.component";
import { AddcustomerComponent } from "./CustomerComponets/addcustomer/addcustomer.component";
import { FindByCustomerComponent } from "./CustomerComponets/find-by-customer/find-by-customer.component";
import { RemovecustomerComponent } from "./CustomerComponets/removecustomer/removecustomer.component";
import { UpdatecustomerComponent } from "./CustomerComponets/updatecustomer/updatecustomer.component";
import { AddtransactionComponent } from "./TransactionComponents/addtransaction/addtransaction.component";
import { CreditComponent } from "./TransactionComponents/credit/credit.component";
import { CredittransactionComponent } from "./TransactionComponents/credittransaction/credittransaction.component";
import { DebitComponent } from "./TransactionComponents/debit/debit.component";
import { DebittransactionComponent } from "./TransactionComponents/debittransaction/debittransaction.component";
import { UpdatetransactionComponent } from "./TransactionComponents/updatetransaction/updatetransaction.component";
import { LoginComponent } from "./login/login.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { CreateUserComponent } from "./UserComponent/create-user/create-user.component";
import { UserComponent } from "./UserComponent/user/user.component";
import { AddLoanComponent } from "./loan/add-loan/add-loan.component";
import { LoanApplicationGeneralComponent } from "./loan/loan-application-general/loan-application-general.component";
import { LoanDetailsComponent } from "./loan/loan-details/loan-details.component";
import { LoanListComponent } from "./loan/loan-list/loan-list.component";
import { LoandetailscustComponent } from "./loan/loandetailscust/loandetailscust.component";
import { UpdateLoanComponent } from "./loan/update-loan/update-loan.component";


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    CreateUserComponent,
    LoginComponent,
    ForgotPassComponent,
    AddAccountComponent,
    UpdateAccountComponent,
    RemoveAccountComponent,
    ViewAllComponent,
    //ViewAccountComponent,
    ViewAllComponent,
    AddAdminComponent,
    UpdateAdminComponent,
    RemoveAdminComponent,
    ViewAdminComponent,
    ViewAllAdminComponent,
    FindByAccountComponent,
    AddcustomerComponent,
    FindByCustomerComponent,
    FindbycustomeridComponent,
    RemovecustomerComponent,
    UpdatecustomerComponent,
    ViewallcustomersComponent,
    NavbarComponent,
    AppComponent,
    AddLoanComponent,
    LoanListComponent,
    LoanDetailsComponent,
    UpdateLoanComponent,
     
 
    HomeComponent,
    WelcomeComponent,


    AddtransactionComponent,

    ViewTransactionComponent,
    CreditComponent,
    DebitComponent,
 
    UpdatetransactionComponent,
    ViewalltransactionComponent,
    CredittransactionComponent,
    DebittransactionComponent,
    
    LoanApplicationGeneralComponent,
    LoandetailscustComponent,
   
    // HomeComponent,

   
  
    // AllMoviesComponent,
    // CreateMovieComponent,
    // UpdateMoviesComponent,
    // DetailViewMovieComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
      // NgxCaptchaModule,
    //  TextMaskModule
  ],
  providers: [
   
    // AppAssetData,
 ],
  bootstrap: [AppComponent],
  //entryComponents: [LoginComponent]
})
export class AppModule { }
