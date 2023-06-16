package com.cg.BankingApp.service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cg.BankingApp.dto.loanDto;
import com.cg.BankingApp.entity.Admin;
import com.cg.BankingApp.entity.Customer;
import com.cg.BankingApp.entity.Loan;
import com.cg.BankingApp.repository.IAdminRepository;
import com.cg.BankingApp.repository.ICustomerRepository;
import com.cg.BankingApp.repository.ILoanRepository;



@Service
public class LoanServiceImpl implements ILoanService {

	@Autowired
	private ILoanRepository loanRepository;

	@Autowired
	private ICustomerRepository custRepo;
	
	@Autowired
	private IAdminRepository adminRepo; 
	
	/*
	 * Method for adding loan object -POST
	 */

	@Override
	public Loan addLoan(Loan add) {
		return loanRepository.save(add);
	}
	
	/*
	 * Method for Creating loan object with admin and customer object  -POST
	 */
	
	
	@Override
	public Loan createLoan(loanDto loanDto)
	{
		Optional<Admin> adm= adminRepo.findById(loanDto.getAdmin());
		Optional<Customer> cust= custRepo.findById(loanDto.getCustomer());
		Loan loan = new Loan();
		loan.setAdmin(adm.get());
		loan.setCustomer(cust.get());
		loan.setAcceptancebutton(loanDto.getAcceptancebutton());
		loan.setAdminLoanAproval(loanDto.getAdminLoanAproval());
		loan.setAnual_income(loanDto.getAnual_income());
		
		loan.setApplicant_name(loanDto.getApplicant_name());
		loan.setBirthDate(loanDto.getBirthDate());
		loan.setDateOfApplication(loanDto.getDateOfApplication());
		loan.setEmployement_status(loanDto.getEmployement_status());
		loan.setId_type(loanDto.getId_type());
		loan.setIdProofNo(loanDto.getIdProofNo());
		loan.setJob_title(loanDto.getJob_title());
		loan.setLoanAmount(loanDto.getLoanAmount());
		loan.setLoanId(loanDto.getLoanId());
		loan.setLoanType(loanDto.getLoanType());
		loan.setMarital_status(loanDto.getMarital_status());
		loan.setPhoneNumber(loanDto.getPhoneNumber());
		loan.setPlace_of_work(loanDto.getPlace_of_work());
				
			return loanRepository.save(loan);
	}
	
	

	@Override
	public Loan updateLoan(Loan add) {
		
		return loanRepository.save(add);
	}

	

	/*
	 * cancel booking
	 */
	@Override
	public Loan removeLoan(Loan add) {
		
		 loanRepository.delete(add);
		 return add;
	}

	

	/*
	 * view all bookings
	 */
	@Override
	public List<Loan> viewAllLoan() {
		
		return loanRepository.findAll();
	}

	
	/*
	 * view booking by booking id
	 */
	
	@Override
	public Optional<Loan> viewLoanById(long loanId) {
	
		return loanRepository.findById(loanId);
	}

	@Override
	public Optional<Customer> viewLoanByCustomer(int cId) {
		Optional<Customer> c1=custRepo.findById(cId);
		return custRepo.findById(cId);
	}

	@Override
	public Optional<Admin> viewLoanByAdmin(int admId) {
		
		return adminRepo.findById(admId);
	}

	
	
	
	

	

}