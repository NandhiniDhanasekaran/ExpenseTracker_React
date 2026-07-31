import { useEffect, useState } from "react";
import axios from "axios";

import SummaryCards from "../Components/SummaryCards";
import MonthlyChart from "../Components/MonthlyChart";
import CategoryPieChart from "../Components/CategoryPieChart";
import RecentExpenses from "../Components/RecentExpenses";

function Dashboard() {

    const [expenses, setExpenses] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:9243/api/expenses")
            .then((response) => {
                console.log(response.data);
                setExpenses(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div
            style={{
                padding: "30px",
                backgroundColor: "#f4f6f9",
                minHeight: "100vh"
            }}
        >

            <h1
                style={{
                    textAlign: "center",
                    marginBottom: "30px"
                }}
            >
                Expense Tracker Dashboard
            </h1>

            {/* Summary Cards */}
            <SummaryCards expenses={expenses} />

            {/* Monthly Chart */}
            <div
                style={{
                    backgroundColor: "white",
                    marginTop: "30px",
                    padding: "20px",
                    borderRadius: "10px",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
                }}
            >
                <MonthlyChart expenses={expenses} />
            </div>

            {/* Category Pie Chart */}
            <div
                style={{
                    backgroundColor: "white",
                    marginTop: "30px",
                    padding: "20px",
                    borderRadius: "10px",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
                }}
            >
                <CategoryPieChart expenses={expenses} />
            </div>

            {/* Recent Expenses */}
            <div
                style={{
                    backgroundColor: "white",
                    marginTop: "30px",
                    padding: "20px",
                    borderRadius: "10px",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
                }}
            >
                <RecentExpenses expenses={expenses} />
            </div>

        </div>
    );
}

export default Dashboard;