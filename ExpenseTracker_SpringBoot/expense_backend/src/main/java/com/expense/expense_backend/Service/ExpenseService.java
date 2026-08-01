package com.expense.expense_backend.Service;

import java.util.List;

import com.expense.expense_backend.Entity.Expense;
import com.expense.expense_backend.repository.ExpenseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service


public class ExpenseService
{
	
@Autowired

public ExpenseRepository expenserepository;

public Expense SaveExpense(Expense expense)
{
	return expenserepository.save(expense);
}

public List<Expense> getallExpenses()
{
	return expenserepository.findAll();
}
public Expense getExpensebyId(long id)
{
	return expenserepository.findById(id).orElse(null);
}

public Expense updateExpense(Long id,Expense updatedexpense)
{
	Expense expense=expenserepository.findById(id).orElse(null);
	if(expense!=null) 
	{
		expense.settitle(updatedexpense.gettitle());
		expense.setcategory(updatedexpense.getcategory());
		expense.setdescription(updatedexpense.getdescription());
		expense.setdate(updatedexpense.getdate());
		expense.setamount(updatedexpense.getamount());
		return expenserepository.save(expense);
	}
	return null;
}
	

public void deleteExpense(long id) 
{
	
	 expenserepository.deleteById(id);
	
}
	
}
