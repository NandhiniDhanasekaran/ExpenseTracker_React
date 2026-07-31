import { useNavigate } from "react-router-dom";

function Navbar() {
const handleLogout = () => {

    localStorage.removeItem("user");

    navigate("/login");

};

const navigate = useNavigate();
    return (
        
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">

            <div className="container">

                <a className="navbar-brand" href="/">
                    💰 Expense Tracker
                </a>


                <div>

                    <ul className="navbar-nav">

                        <li className="nav-item">
                            <a className="nav-link" href="/">
                                Expenses
                            </a>
                        </li>


                        <li className="nav-item">
                            <a className="nav-link" href="/dashboard">
                                Dashboard
                            </a>
                        </li>


                        <li className="nav-item">
                            <a className="nav-link" href="/reports">
                                Reports
                            </a>
                        </li>

                        <button
    className="btn btn-danger"
    onClick={handleLogout}
>
    Logout
</button>

                    </ul>

                    

                </div>

            </div>

        </nav>
    );

}

export default Navbar;