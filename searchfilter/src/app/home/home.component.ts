import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogginService } from '../login/loggin.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})

export class HomeComponent implements OnInit {
  
  userRole: any;
  status!: boolean;
  
  constructor(public lService: LogginService,private router:Router) { }

  ngOnInit(): void {
    
  }

  AddAdmin(){
    this.router.navigate(['/newadmin']);
  }
  AddCust(){
    this.router.navigate(['/newcustomer']);
  }

  AddAcc(){
    this.router.navigate(['/newaccount']);
  }
  AdminList(){
    this.router.navigate(['/admin']);
  }
  CustomerList(){
    this.router.navigate(['/customer']);
  }
  
  CreditList(){
    this.router.navigate(['/credit']);
  }
  
  DebitList(){
    this.router.navigate(['/debit']);
  }

  TransactionList(){
    this.router.navigate(['/transaction']);
  }
  
  LoansList(){
    this.router.navigate(['/loans']);
  }

  AccountList(){
    this.router.navigate(['/account']);
  }
  


  
  CreditOp(){
    this.router.navigate(['/credit']);
  }

  DebitOp(){
    this.router.navigate(['/debit']);
  }
  
  ApplyLoanCust(){
    this.router.navigate(['/custloan']);
  }

  ApplyLoanGen(){
    this.router.navigate(['/genloan']);
  }
   
   
  AddBal(){
    this.router.navigate(['/newtransaction'])
  }



    }


