import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

function CategoryPieChart({ expenses }) {
  const categoryData = {};

  expenses.forEach((expense) => {
    const category = expense.category || "Other";

    categoryData[category] =
      (categoryData[category] || 0) + Number(expense.amount);
  });

  const data = Object.keys(categoryData).map((category) => ({
    name: category,
    value: categoryData[category],
  }));

  const COLORS = [
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FF8042",
    "#AF19FF",
    "#FF4560",
  ];

  return (
    <div>
      <h3 style={{ textAlign: "center", marginBottom: "20px" }}>
        Expenses by Category
      </h3>

      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={100}
            label
          >
            {data.map((entry, index) => (
              <Cell
                key={index}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>

          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default CategoryPieChart;