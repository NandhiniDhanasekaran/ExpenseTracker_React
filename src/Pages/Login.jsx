import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

function Login() {

    const navigate = useNavigate();
    const [message, setMessage] = useState("");

    const [login, setLogin] = useState({
        email: "",
        password: ""
    });


    const handleChange = (e) => {

        setLogin({
            ...login,
            [e.target.name]: e.target.value
        });

    };


    const handleSubmit = (e) => {

        e.preventDefault();


        axios
            .post("http://localhost:9243/api/auth/login", login)

            .then((response) => {

                console.log(response.data);

                setMessage("Login successful! Welcome back.");

setTimeout(() => {

    navigate("/dashboard");

}, 1500);
            })

            .catch((error) => {

                console.log(error);

                setMessage("Invalid email or password.");

            });
            
    };


    return (

        <div className="container mt-5">

            <div className="row justify-content-center">

                <div className="col-md-5">

                    <div className="card shadow">

                        <div className="card-body">


                            <h2 className="text-center mb-4">
                                Expense Tracker Login
                            </h2>
{
    message && (

        <div
            className={
                message.includes("successful")
                ?
                "alert alert-success text-center"
                :
                "alert alert-danger text-center"
            }
        >

            {message}

        </div>

    )
}


                            <form onSubmit={handleSubmit}>


                                <div className="mb-3">

                                    <label>
                                        Email
                                    </label>

                                    <input
                                        type="email"
                                        name="email"
                                        className="form-control"
                                        value={login.email}
                                        onChange={handleChange}
                                        required
                                    />

                                </div>



                                <div className="mb-3">

                                    <label>
                                        Password
                                    </label>

                                    <input
                                        type="password"
                                        name="password"
                                        className="form-control"
                                        value={login.password}
                                        onChange={handleChange}
                                        required
                                    />

                                </div>



                                <button
                                    className="btn btn-primary w-100"
                                    type="submit"
                                >
                                    Login
                                </button>


                            </form>



                            <div className="text-center mt-3">

                                Don't have an account?

                                <Link to="/register">
                                    {" "}Register
                                </Link>

                            </div>



                        </div>

                    </div>

                </div>

            </div>

        </div>

    );

}


export default Login;