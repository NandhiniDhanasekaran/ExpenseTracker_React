import { useEffect, useState } from "react";
import axios from "axios";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";


function Reports() {


    const [expenses, setExpenses] = useState([]);

    const [fromDate, setFromDate] = useState("");

    const [toDate, setToDate] = useState("");

    const [selectedCategory, setSelectedCategory] = useState("");



    // Get Expenses

    useEffect(() => {

        axios
            .get("http://localhost:9243/api/expenses")

            .then((response) => {

                setExpenses(response.data);

            })

            .catch((error) => {

                console.log(error);

            });


    }, []);




    // Category Dropdown Values

    const categories = [
        ...new Set(
            expenses.map(
                (expense) => expense.category
            )
        )
    ];





    // Filter Data

    const filteredExpenses = expenses.filter((expense) => {


        if (fromDate && expense.date < fromDate) {

            return false;

        }


        if (toDate && expense.date > toDate) {

            return false;

        }



        if (
            selectedCategory &&
            expense.category !== selectedCategory
        ) {

            return false;

        }


        return true;


    });






    // Total Amount

    const totalAmount = filteredExpenses.reduce(

        (sum, expense) =>
            sum + Number(expense.amount),

        0

    );





    // Total Transactions

    const totalTransactions = filteredExpenses.length;





    // Average Expense

    const averageExpense =

        totalTransactions > 0

        ?

        (
            totalAmount /
            totalTransactions

        ).toFixed(2)

        :

        0;







    // Highest Expense

    const highestExpense =

        filteredExpenses.length > 0

        ?

        filteredExpenses.reduce(

            (max, expense) =>

                Number(expense.amount) >
                Number(max.amount)

                ?

                expense

                :

                max

        )

        :

        {
            title:"-",
            amount:0
        };








    // Export PDF

    const exportPDF = () => {


        const doc = new jsPDF();


        doc.setFontSize(18);

        doc.text(
            "Expense Report",
            14,
            20
        );



        doc.setFontSize(12);


        doc.text(
            `Total Amount: $${totalAmount.toFixed(2)}`,
            14,
            30
        );


        doc.text(
            `Total Transactions: ${totalTransactions}`,
            14,
            38
        );


        doc.text(
            `Average Expense: $${averageExpense}`,
            14,
            46
        );




        autoTable(doc, {


            startY:55,


            head:[
                [
                    "Title",
                    "Category",
                    "Amount",
                    "Date"
                ]
            ],



            body:

            filteredExpenses.map(
                (expense)=>[

                    expense.title,

                    expense.category,

                    `$${Number(expense.amount).toFixed(2)}`,

                    expense.date

                ]
            )


        });



        doc.save(
            "Expense_Report.pdf"
        );


    };







    // Export Excel

    const exportExcel = () => {


        const worksheet =
            XLSX.utils.json_to_sheet(
                filteredExpenses
            );



        const workbook =
            XLSX.utils.book_new();



        XLSX.utils.book_append_sheet(

            workbook,

            worksheet,

            "Expenses"

        );



        const excelBuffer =
            XLSX.write(

                workbook,

                {
                    bookType:"xlsx",
                    type:"array"
                }

            );



        const file = new Blob(

            [excelBuffer],

            {
                type:
                "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
            }

        );



        saveAs(

            file,

            "Expense_Report.xlsx"

        );


    };
    return (

<div
    className="container mt-4"
    style={{
        backgroundColor:"#F5F7FA",
        padding:"30px",
        borderRadius:"15px",
        minHeight:"100vh"
    }}
>


<h2
    className="text-center mb-4"
    style={{
        color:"#1E3A8A",
        fontWeight:"700"
    }}
>
    Expense Reports
</h2>





{/* FILTER CARD */}

<div
    className="card shadow-sm mb-4"
    style={{
        border:"none",
        borderRadius:"15px"
    }}
>

<div className="card-body">


<div className="row">


<div className="col-md-4">

<label className="form-label fw-bold">
From Date
</label>


<input

type="date"

className="form-control"

value={fromDate}

onChange={(e)=>
    setFromDate(e.target.value)
}

/>

</div>





<div className="col-md-4">

<label className="form-label fw-bold">
To Date
</label>


<input

type="date"

className="form-control"

value={toDate}

onChange={(e)=>
    setToDate(e.target.value)
}

/>

</div>






<div className="col-md-4">

<label className="form-label fw-bold">
Category
</label>


<select

className="form-select"

value={selectedCategory}

onChange={(e)=>
    setSelectedCategory(e.target.value)
}

>


<option value="">
All Categories
</option>



{
categories.map((category)=>(

<option

key={category}

value={category}

>

{category}

</option>


))
}



</select>


</div>


</div>






<div className="mt-4">


<button

className="btn me-2"

style={{

backgroundColor:"#64748B",

color:"white",

borderRadius:"8px"

}}

onClick={()=>{

setFromDate("");

setToDate("");

setSelectedCategory("");

}}

>

Clear Filters

</button>






<button

className="btn me-2"

style={{

backgroundColor:"#DC2626",

color:"white",

borderRadius:"8px"

}}

onClick={exportPDF}

>

Export PDF

</button>





<button

className="btn"

style={{

backgroundColor:"#16A34A",

color:"white",

borderRadius:"8px"

}}

onClick={exportExcel}

>

Export Excel

</button>


</div>


</div>

</div>






{/* SUMMARY CARDS */}


<div className="row">





<div className="col-md-3 mb-3">

<div

className="card shadow text-center"

style={{

backgroundColor:"#2563EB",

color:"white",

borderRadius:"15px",

border:"none"

}}

>


<div className="card-body">


<h5>
Total Amount
</h5>


<h3>
${totalAmount.toFixed(2)}
</h3>


</div>

</div>

</div>







<div className="col-md-3 mb-3">


<div

className="card shadow text-center"

style={{

backgroundColor:"#16A34A",

color:"white",

borderRadius:"15px",

border:"none"

}}

>


<div className="card-body">


<h5>
Transactions
</h5>


<h3>
{totalTransactions}
</h3>


</div>


</div>


</div>







<div className="col-md-3 mb-3">


<div

className="card shadow text-center"

style={{

backgroundColor:"#F59E0B",

color:"white",

borderRadius:"15px",

border:"none"

}}

>


<div className="card-body">


<h5>
Average
</h5>


<h3>
${averageExpense}
</h3>


</div>


</div>


</div>






<div className="col-md-3 mb-3">


<div

className="card shadow text-center"

style={{

backgroundColor:"#9333EA",

color:"white",

borderRadius:"15px",

border:"none"

}}

>


<div className="card-body">


<h5>
Highest
</h5>


<h4>
${Number(highestExpense.amount).toFixed(2)}
</h4>


<p>
{highestExpense.title}
</p>


</div>


</div>


</div>





</div>





<hr/>





<h3

style={{

color:"#1E3A8A",

fontWeight:"600"

}}

>

Expense Details

</h3>






<table

className="table table-hover mt-3"

style={{

backgroundColor:"white",

borderRadius:"12px",

overflow:"hidden",

boxShadow:"0 4px 10px rgba(0,0,0,0.1)"

}}

>


<thead

style={{

backgroundColor:"#1E3A8A",

color:"white"

}}

>


<tr>

<th>
Title
</th>

<th>
Category
</th>

<th>
Amount
</th>

<th>
Date
</th>

</tr>


</thead>





<tbody>


{
filteredExpenses.map((expense)=>(


<tr key={expense.id}>


<td>
{expense.title}
</td>


<td>
{expense.category}
</td>


<td>
${Number(expense.amount).toFixed(2)}
</td>


<td>
{expense.date}
</td>


</tr>


))
}



</tbody>


</table>



</div>


);
}

export default Reports;