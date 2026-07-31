import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";


function Register() {

    const navigate = useNavigate();

    const [message, setMessage] = useState("");


    const [user, setUser] = useState({

        name: "",
        email: "",
        password: ""

    });



    const handleChange = (e) => {

        setUser({

            ...user,

            [e.target.name]: e.target.value

        });

    };




    const handleSubmit = (e) => {

        e.preventDefault();


        axios

            .post("http://localhost:9243/api/auth/register", user)

            .then((response) => {


                console.log(response.data);


                setMessage(
                    "User created successfully! Please login."
                );



                setTimeout(() => {

                    navigate("/login");

                }, 1500);



            })


            .catch((error) => {


                console.log(error);


                setMessage(
                    "Registration failed. Please try again."
                );


            });


    };




    return (


        <div className="container mt-5">


            <div className="row justify-content-center">


                <div className="col-md-5">


                    <div className="card shadow">


                        <div className="card-body">



                            <h2 className="text-center mb-4">

                                Register

                            </h2>




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

                                        {message}

                                    </div>

                                )
                            }







                            <form onSubmit={handleSubmit}>



                                <div className="mb-3">


                                    <label>
                                        Name
                                    </label>


                                    <input

                                        type="text"

                                        name="name"

                                        className="form-control"

                                        value={user.name}

                                        onChange={handleChange}

                                        required

                                    />


                                </div>







                                <div className="mb-3">


                                    <label>
                                        Email
                                    </label>


                                    <input

                                        type="email"

                                        name="email"

                                        className="form-control"

                                        value={user.email}

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

                                        value={user.password}

                                        onChange={handleChange}

                                        required

                                    />


                                </div>







                                <button

                                    className="btn btn-success w-100"

                                    type="submit"

                                >

                                    Register

                                </button>





                            </form>







                            <div className="text-center mt-3">


                                Already have an account?


                                <Link to="/login">

                                    {" "}Login

                                </Link>



                            </div>





                        </div>


                    </div>


                </div>


            </div>


        </div>


    );


}


export default Register;