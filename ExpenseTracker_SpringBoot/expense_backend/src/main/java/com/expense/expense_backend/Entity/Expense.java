package com.expense.expense_backend.Entity;

import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
@Table (name="expenses")
public class Expense {
	@Id
	@GeneratedValue(strategy =GenerationType.IDENTITY)
	private  long id ;
    private String title ;
    private String description;
    private double amount;
   private String category;
   @Column(name="expense_date")
   private LocalDate date;

   public long  getid()
   {
	   return id;
   }
   
   public long setid(long id)
   {
	   return this.id=id;
   }
   
   
   public String  gettitle()
   {
	   return title;
   }
   
   public String settitle(String title)
   {
	   return this.title=title;
   }
   
   public String  getdescription()
   {
	   return description;
   }
   
   public String setdescription(String description)
   {
	   return this.description=description;
   }
   
   
   

   public double getamount()
   {
	   return amount;
   }
   
   public double setamount(double amount)
   {
	   return this.amount=amount;
   }
   
   public String getcategory()
		   {
			   return category;
	   
   }

   public String setcategory(String category)
		   {
			   return this.category=category;
	   
   }
   
   
   public LocalDate getdate()
   {
	   return date;
   }
   

   public LocalDate setdate(LocalDate date)
   {
	   return this.date=date;
   }

   
}
