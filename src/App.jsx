import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import CreateExpense from "./Pages/CreateExpense";
import EditExpense from "./Pages/EditExpense";
import DeleteExpense from "./Pages/DeleteExpense";

import Navbar from "./Components/Navbar";

import Dashboard from "./Pages/Dashboard";
import Reports from "./Pages/Reports";

import Login from "./Pages/Login";
import Register from "./Pages/Register";


function App() {


    return (

        <BrowserRouter>


            <Routes>


                {/* Login and Register pages without Navbar */}

                <Route 
                    path="/login" 
                    element={<Login />} 
                />


                <Route 
                    path="/register" 
                    element={<Register />} 
                />



                {/* Application pages with Navbar */}

                <Route
                    path="/"
                    element={
                        <>
                            <Navbar />
                            <Home />
                        </>
                    }
                />


                <Route
                    path="/create"
                    element={
                        <>
                            <Navbar />
                            <CreateExpense />
                        </>
                    }
                />


                <Route
                    path="/edit/:id"
                    element={
                        <>
                            <Navbar />
                            <EditExpense />
                        </>
                    }
                />


                <Route
                    path="/delete/:id"
                    element={
                        <>
                            <Navbar />
                            <DeleteExpense />
                        </>
                    }
                />



                <Route
                    path="/dashboard"
                    element={
                        <>
                            <Navbar />
                            <Dashboard />
                        </>
                    }
                />



                <Route
                    path="/reports"
                    element={
                        <>
                            <Navbar />
                            <Reports />
                        </>
                    }
                />


            </Routes>


        </BrowserRouter>

    );

}


export default App;