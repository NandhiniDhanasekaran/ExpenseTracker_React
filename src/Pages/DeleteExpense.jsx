import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";


function DeleteExpense() {

    const { id } = useParams();
    const navigate = useNavigate();
const [message, setMessage] = useState("");
    const handleDelete = () => {

        axios.delete(`http://localhost:9243/api/expenses/${id}`)
            .then(() => {
                setMessage("Expense deleted successfully!");

    setTimeout(() => {

        navigate("/");

    }, 1500);

})
            .catch(error => {
                console.log(error);
            });

    };

    return (
        <div>
            <h2>Delete Expense</h2>

            {
    message && (

        <div className="alert alert-success text-center">

            ✓ {message}

        </div>

    )
}

            <p>Are you sure you want to delete this expense?</p>

            <button onClick={handleDelete}>
                Yes, Delete
            </button>

            <button onClick={() => navigate("/")}>
                Cancel
            </button>
        </div>
    );
}

export default DeleteExpense;