package com.cg.BankingApp.entity;

import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;

import com.cg.BankingApp.entity.*;
import com.fasterxml.jackson.annotation.JsonFormat;
@Entity
//This is an class with connected customer as an object
public class Loan {
	@Id
    @GeneratedValue(strategy = GenerationType.AUTO)
	private long LoanId;
	@OneToOne(cascade= {CascadeType.PERSIST})
	@JoinColumn(name="customer_loan_fk")
	private Customer customer;
	
	@OneToOne(cascade= {CascadeType.PERSIST})
	@JoinColumn(name="admin_loan_fk")
	private Admin admin;
	
	
	// private Account account;
	   // public Account acc;
	
	//@NotEmpty(message="applicant_name cannot be empty")
	private String applicant_name;
	//@NotEmpty(message="PhoneNo. cannot be empty")
	private String phoneNumber;
	 @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
     private  Date DateOfApplication;
	 @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
     private  Date birthDate;
	 @NotEmpty(message="id_type cannot be empty")
		private String id_type;
	 @NotEmpty(message="idProofNo cannot be empty")
		private String idProofNo;
	 @NotEmpty(message="marital_status cannot be empty")
		private String marital_status;
	 @NotEmpty(message="employement_status cannot be empty")
		private String employement_status;
	// @NotEmpty(message="place_of_wor cannot be empty")
		private String place_of_work;
	// @NotEmpty(message="job_title cannot be empty")
		private String job_title;
	 
		private String  anual_income;
	    private int loanAmount ;
	    private String  loanType;
	    private String adminLoanAproval;
	    private String acceptancebutton;
	   
	    

		public Loan() {
			super();
			// TODO Auto-generated constructor stub
		}



		public Loan(long loanId, Customer customer, Admin admin,
				@NotEmpty(message = "applicant_name cannot be empty") String applicant_name,
				@NotEmpty(message = "PhoneNo. cannot be empty") String phoneNumber, Date dateOfApplication,
				Date birthDate, @NotEmpty(message = "id_type cannot be empty") String id_type,
				@NotEmpty(message = "idProofNo cannot be empty") String idProofNo,
				@NotEmpty(message = "marital_status cannot be empty") String marital_status,
				@NotEmpty(message = "employement_status cannot be empty") String employement_status,
				String place_of_work, String job_title, String anual_income, int loanAmount, String loanType,
				String adminLoanAproval, String acceptancebutton) {
			super();
			LoanId = loanId;
			this.customer = customer;
			this.admin = admin;
			this.applicant_name = applicant_name;
			this.phoneNumber = phoneNumber;
			DateOfApplication = dateOfApplication;
			this.birthDate = birthDate;
			this.id_type = id_type;
			this.idProofNo = idProofNo;
			this.marital_status = marital_status;
			this.employement_status = employement_status;
			this.place_of_work = place_of_work;
			this.job_title = job_title;
			this.anual_income = anual_income;
			this.loanAmount = loanAmount;
			this.loanType = loanType;
			this.adminLoanAproval = adminLoanAproval;
			this.acceptancebutton = acceptancebutton;
		}



		public long getLoanId() {
			return LoanId;
		}



		public void setLoanId(long loanId) {
			LoanId = loanId;
		}



		public Customer getCustomer() {
			return customer;
		}



		public void setCustomer(Customer customer) {
			this.customer = customer;
		}



		public Admin getAdmin() {
			return admin;
		}



		public void setAdmin(Admin admin) {
			this.admin = admin;
		}



		public String getApplicant_name() {
			return applicant_name;
		}



		public void setApplicant_name(String applicant_name) {
			this.applicant_name = applicant_name;
		}



		public String getPhoneNumber() {
			return phoneNumber;
		}



		public void setPhoneNumber(String phoneNumber) {
			this.phoneNumber = phoneNumber;
		}



		public Date getDateOfApplication() {
			return DateOfApplication;
		}



		public void setDateOfApplication(Date dateOfApplication) {
			DateOfApplication = dateOfApplication;
		}



		public Date getBirthDate() {
			return birthDate;
		}



		public void setBirthDate(Date birthDate) {
			this.birthDate = birthDate;
		}



		public String getId_type() {
			return id_type;
		}



		public void setId_type(String id_type) {
			this.id_type = id_type;
		}



		public String getIdProofNo() {
			return idProofNo;
		}



		public void setIdProofNo(String idProofNo) {
			this.idProofNo = idProofNo;
		}



		public String getMarital_status() {
			return marital_status;
		}



		public void setMarital_status(String marital_status) {
			this.marital_status = marital_status;
		}



		public String getEmployement_status() {
			return employement_status;
		}



		public void setEmployement_status(String employement_status) {
			this.employement_status = employement_status;
		}



		public String getPlace_of_work() {
			return place_of_work;
		}



		public void setPlace_of_work(String place_of_work) {
			this.place_of_work = place_of_work;
		}



		public String getJob_title() {
			return job_title;
		}



		public void setJob_title(String job_title) {
			this.job_title = job_title;
		}



		public String getAnual_income() {
			return anual_income;
		}



		public void setAnual_income(String anual_income) {
			this.anual_income = anual_income;
		}



		public int getLoanAmount() {
			return loanAmount;
		}



		public void setLoanAmount(int loanAmount) {
			this.loanAmount = loanAmount;
		}



		public String getLoanType() {
			return loanType;
		}



		public void setLoanType(String loanType) {
			this.loanType = loanType;
		}



		public String getAdminLoanAproval() {
			return adminLoanAproval;
		}



		public void setAdminLoanAproval(String adminLoanAproval) {
			this.adminLoanAproval = adminLoanAproval;
		}



		public String getAcceptancebutton() {
			return acceptancebutton;
		}



		public void setAcceptancebutton(String acceptancebutton) {
			this.acceptancebutton = acceptancebutton;
		}



		@Override
		public String toString() {
			return "Loan [LoanId=" + LoanId + ", customer=" + customer + ", admin=" + admin + ", applicant_name="
					+ applicant_name + ", phoneNumber=" + phoneNumber + ", DateOfApplication=" + DateOfApplication
					+ ", birthDate=" + birthDate + ", id_type=" + id_type + ", idProofNo=" + idProofNo
					+ ", marital_status=" + marital_status + ", employement_status=" + employement_status
					+ ", place_of_work=" + place_of_work + ", job_title=" + job_title + ", anual_income=" + anual_income
					+ ", loanAmount=" + loanAmount + ", loanType=" + loanType + ", adminLoanAproval=" + adminLoanAproval
					+ ", acceptancebutton=" + acceptancebutton + "]";
		}


}