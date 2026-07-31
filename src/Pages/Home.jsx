import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import SummaryCards from "../Components/SummaryCards";
import Dashboard from "../Pages/Dashboard";


function Home() {

    const [expenses, setExpenses] = useState([]);

    const navigate = useNavigate();


    useEffect(() => {

        axios.get("http://localhost:9243/api/expenses")

            .then((response) => {

                setExpenses(response.data);

            })

            .catch((error) => {

                console.log(error);

            });

    }, []);



    return (

        <div className="container mt-4">


            <h2 className="text-center mb-4">
                Expense Tracker
            </h2>



            {/* Dashboard Cards */}

            <SummaryCards expenses={expenses} />
            




            <div className="d-flex justify-content-between align-items-center mt-4">

                <h3>
                    Expense List
                </h3>


                <button

                    className="btn btn-primary"

                    onClick={() => navigate("/create")}

                >

                    + Add Expense

                </button>


            </div>


            <br />



            <table className="table table-striped table-hover shadow">


                <thead className="table-dark">

                    <tr>

                        <th>
                            Title
                        </th>


                        <th>
                            Amount
                        </th>


                        <th>
                            Description
                        </th>


                        <th>
                            Date
                        </th>


                        <th>
                            Category
                        </th>


                        <th>
                            Action
                        </th>


                    </tr>


                </thead>




                <tbody>


                    {

                    [...expenses]
        .sort((a, b) => b.id - a.id)
.map((expense) => (


                        <tr key={expense.id}>


                            <td>
                                {expense.title}
                            </td>



                            <td>
                                ${expense.amount}
                            </td>



                            <td>
                                {expense.description}
                            </td>



                            <td>
                                {expense.date}
                            </td>



                            <td>
                                {expense.category}
                            </td>



                            <td>


                                <button

                                    className="btn btn-warning btn-sm me-2"

                                    onClick={() =>
                                        navigate(`/edit/${expense.id}`)
                                    }

                                >

                                    Edit

                                </button>



                                <button

                                    className="btn btn-danger btn-sm"

                                    onClick={() =>
                                        navigate(`/delete/${expense.id}`)
                                    }

                                >

                                    Delete

                                </button>



                            </td>


                        </tr>


                    ))

                    }



                </tbody>


            </table>



        </div>


    );

}


export default Home;