package com.expense.expense_backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.expense.expense_backend.Entity.Expense;

public interface ExpenseRepository extends JpaRepository<Expense,Long>
{
	
}


