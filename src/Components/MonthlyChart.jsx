import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

function MonthlyChart({ expenses }) {

  const monthlyData = {};

  expenses.forEach((expense) => {
    const month = new Date(expense.date).toLocaleString("default", {
      month: "short",
    });

    monthlyData[month] = (monthlyData[month] || 0) + Number(expense.amount);
  });

  const chartData = Object.keys(monthlyData).map((month) => ({
    month,
    amount: monthlyData[month],
  }));

  return (
    <div
      style={{
        background: "#fff",
        padding: "20px",
        borderRadius: "10px",
        marginTop: "20px",
      }}
    >
      <h3>Monthly Expenses</h3>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="amount" fill="#4CAF50" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default MonthlyChart;