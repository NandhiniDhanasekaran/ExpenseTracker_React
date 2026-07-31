import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; 
function CreateExpense()
{
    const navigate = useNavigate();

    const[expense,setExpense]=useState({
        title: "",
        amount: "",
        category: "",
        date: "",
        description: ""


    });
    const handlechange=(e)=>{setExpense({

        ...expense,[e.target.name]:e.target.value
    });
    
};

const [message, setMessage] = useState("");

const handlesubmit = async (e) => {
    e.preventDefault();

    try {
        await axios.post(
            "http://localhost:9243/api/expenses",
            expense
        );

        setMessage(
                "Expense created successfully!"
            );
          setTimeout(() => {

           navigate("/");

            }, 1500);


    } catch (error) {
        console.log(error);

                    setMessage(
                "Failed to create expense"
            );

    }
};
    return(
<div style={{ width: "500px", margin: "20px auto" }}>
            <h2>Create Expense</h2>

            {
    message && (

        <div
            className={
                message.includes("successfully")
                ?
                "alert alert-success text-center"
                :
                "alert alert-danger text-center"
            }
            style={{
                borderRadius:"10px",
                fontWeight:"500"
            }}
        >

            ✓ {message}

        </div>

    )
}
<form onSubmit={handlesubmit}>
<input
type="text"
name="title"
placeholder="title"
value={expense.title}
onChange={handlechange}/>
<br/><br/>
<input
type="number"
name="amount"
placeholder="amount"
value={expense.amount}
onChange={handlechange}/>
<br/><br/>
<input
type="text"
name="category"
placeholder="category"
value={expense.category}
onChange={handlechange}/>
<br/><br/>
<input
type="date"
name="date"
value={expense.date}
onChange={handlechange}/>
<br/><br/>
<textarea
name="description"

value={expense.description}
onChange={handlechange}/>
<br/><br/>
<button type="submit">Save Expense</button>




</form>



    
</div>


    );
}

export default CreateExpense;