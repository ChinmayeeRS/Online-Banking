import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Account } from 'src/app/account';
import { AccountService } from 'src/app/account.service';
import { Admin } from 'src/app/admin';
import { AdminService } from 'src/app/admin.service';
import { Customer } from 'src/app/customer';
import { CustomerService } from 'src/app/customer.service';


@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.css']
})
export class AddAccountComponent implements OnInit {

  account: Account = new Account();
  submitted = false;
  admines!: Observable<Admin[]>;
  customers!: Observable<Customer[]>;
  constructor(private customerService:CustomerService,private adminService:AdminService,private accountService: AccountService,  private router: Router) { }
  
  ngOnInit() {
    this.reloadData();
  }

  reloadData(){
    this.admines=this.adminService.viewAllAdmin();
    this.customers=this.customerService.viewAllCustomers();
  }

  newAccount(): void {
    this.submitted = false;
    this.account = new Account();
  }

  
  save() {
   // alert("save ="+this.account);
    this.accountService.addAccount(this.account).subscribe(data => {
      console.log(data)
      this.account = new Account();
      this.gotoList();
    }, 
    error => console.log(error));
  }


  onSubmit() {
  //  alert("onSubmit");
    this.submitted = true;
    this.save();    
  }


  gotoList() {
  //  alert("accountsList");
    this.router.navigate(['/account']);
  }

}
