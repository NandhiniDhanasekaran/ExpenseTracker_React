package com.expense.expense_backend.Controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.expense.expense_backend.Service.ExpenseService;
import com.expense.expense_backend.Entity.Expense;


@RestController
@RequestMapping("/api/expenses")
@CrossOrigin(origins="http://localhost:5175")
public class ExpenseController
{
	@Autowired
	private ExpenseService expenseservice;
	
@PostMapping
public Expense createExpense(@RequestBody Expense expense )
{
	return expenseservice.SaveExpense(expense);
}

@GetMapping

public List<Expense> getallExpenses()
{
	return expenseservice.getallExpenses();
}

@GetMapping("/{id}")

public Expense getbyExpenseid(@PathVariable long id)

{

return expenseservice.getExpensebyId(id);
}

@PutMapping("/{id}")
public Expense updateExpense(@PathVariable long id,@RequestBody Expense expense )
{
return expenseservice.updateExpense(id, expense);
}

@DeleteMapping("/{id}")

public  String  deleteExpense(@PathVariable long id )
{
 expenseservice.deleteExpense(id);
 
 return "Expense deleted successfully";
}


}


