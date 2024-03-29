import { Admin } from "../admin";
import { Customer } from "../customer";

export class Loan {
    loanId!: number;
    applicant_name : string="";
    phoneNumber!: number;
    dateOfApplication : string="";
    birthDate : string="";
    id_type : string="";
    idProofNo : string="";
    marital_status : string="";
    employement_status : string="";
    place_of_work : string="";
    job_title : string ="";
    anual_income!: number;
    loanAmount!: number;
    loanType:string="";
    adminLoanAproval:string="";
    acceptancebutton:string="";
    documentProof!: File;
    admin!: Admin;
    customer!: Customer;

    //adminId 6
    //cust id 8
    }
    