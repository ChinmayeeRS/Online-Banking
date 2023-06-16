package com.cg.BankingApp.service;
import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import com.cg.BankingApp.dto.loanDto;
import com.cg.BankingApp.entity.Admin;
import com.cg.BankingApp.entity.Customer;
import com.cg.BankingApp.entity.Loan;

public interface ILoanService {
	public Loan addLoan(Loan add);
	public Loan createLoan(loanDto loanDto);
	public Loan updateLoan(Loan add);
	public Loan removeLoan(Loan add);
	public List<Loan> viewAllLoan();
	Optional<Loan> viewLoanById(long loanId);
	public Optional<Customer> viewLoanByCustomer(int cId);
	public Optional<Admin> viewLoanByAdmin(int admId);


}