import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";


function EditExpense() {

    const { id } = useParams();

    const navigate = useNavigate();
    const [message, setMessage] = useState("");


    const [expense, setExpense] = useState({

        title: "",
        amount: "",
        category: "",
        date: "",
        description: ""

    });



    // Load existing expense data

    useEffect(() => {

        axios.get(`http://localhost:9243/api/expenses/${id}`)

        .then((response) => {

            setExpense(response.data);

        })

        .catch((error) => {

            console.log(error);

        });


    }, [id]);




    // Handle input changes

    const handleChange = (e) => {


        setExpense({

            ...expense,

            [e.target.name]: e.target.value

        });


    };




    // Update expense

    const handleSubmit = async (e) => {


        e.preventDefault();


        try {


            await axios.put(

                `http://localhost:9243/api/expenses/${id}`,

                expense

            );


            setMessage("Expense updated successfully!");

setTimeout(() => {

    navigate("/");

}, 1500);


        }

        catch(error) {


            console.log(error);


        }


    };




    return (

        <div style={{width:"500px", margin:"20px auto"}}>


            <h2>Edit Expense</h2>

            {
    message && (

        <div className="alert alert-success text-center">

            ✓ {message}

        </div>

    )
}




            <form onSubmit={handleSubmit}>


                <input

                    type="text"

                    name="title"

                    placeholder="Title"

                    value={expense.title}

                    onChange={handleChange}

                />

                <br/><br/>




                <input

                    type="number"

                    name="amount"

                    placeholder="Amount"

                    value={expense.amount}

                    onChange={handleChange}

                />


                <br/><br/>




                <input

                    type="text"

                    name="category"

                    placeholder="Category"

                    value={expense.category}

                    onChange={handleChange}

                />


                <br/><br/>




                <input

                    type="date"

                    name="date"

                    value={expense.date}

                    onChange={handleChange}

                />


                <br/><br/>




                <textarea

                    name="description"

                    placeholder="Description"

                    value={expense.description}

                    onChange={handleChange}

                />


                <br/><br/>




                <button type="submit">

                    Update Expense

                </button>



                <button

                    type="button"

                    onClick={() => navigate("/")}

                >

                    Cancel

                </button>



            </form>


        </div>


    );

}


export default EditExpense;