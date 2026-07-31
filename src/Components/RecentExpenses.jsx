function RecentExpenses({ expenses }) {

  const recentExpenses = [...expenses]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 5);

  return (
    <div>

      <h3
        style={{
          marginBottom: "20px",
          color: "#0d6efd"
        }}
      >
        Recent Expenses
      </h3>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
        }}
      >

        <thead>

          <tr
            style={{
              backgroundColor: "#0d6efd",
              color: "white"
            }}
          >

            <th style={{ padding: "12px", border: "1px solid #dee2e6" }}>
              Title
            </th>

            <th style={{ padding: "12px", border: "1px solid #dee2e6" }}>
              Category
            </th>

            <th style={{ padding: "12px", border: "1px solid #dee2e6" }}>
              Amount
            </th>

            <th style={{ padding: "12px", border: "1px solid #dee2e6" }}>
              Date
            </th>

          </tr>

        </thead>

        <tbody>

          {recentExpenses.map((expense, index) => (

            <tr
              key={expense.id}
              style={{
                backgroundColor:
                  index % 2 === 0 ? "#f8f9fa" : "white"
              }}
            >

              <td style={{ padding: "12px", border: "1px solid #dee2e6" }}>
                {expense.title}
              </td>

              <td style={{ padding: "12px", border: "1px solid #dee2e6" }}>
                {expense.category}
              </td>

              <td style={{ padding: "12px", border: "1px solid #dee2e6" }}>
                ${Number(expense.amount).toFixed(2)}
              </td>

              <td style={{ padding: "12px", border: "1px solid #dee2e6" }}>
                {expense.date}
              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default RecentExpenses;