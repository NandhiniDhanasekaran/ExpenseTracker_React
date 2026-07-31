function SummaryCards({ expenses }) {


    const totalExpenses = expenses.length;


    const totalAmount = expenses.reduce(
        (sum, expense) => sum + Number(expense.amount),
        0
    );


    const totalCategories = new Set(
        expenses.map(expense => expense.category)
    ).size;



    return (

        <div className="row mb-4">


            <div className="col-md-4">

                <div className="card shadow">

                    <div className="card-body text-center">

                        <h5>
                            Total Expenses
                        </h5>

                        <h3>
                            {totalExpenses}
                        </h3>

                    </div>

                </div>

            </div>



            <div className="col-md-4">

                <div className="card shadow">

                    <div className="card-body text-center">

                        <h5>
                            Total Amount
                        </h5>

                        <h3>
                            ${totalAmount}
                        </h3>

                    </div>

                </div>

            </div>



            <div className="col-md-4">

                <div className="card shadow">

                    <div className="card-body text-center">

                        <h5>
                            Categories
                        </h5>

                        <h3>
                            {totalCategories}
                        </h3>

                    </div>

                </div>

            </div>


        </div>

    );

}


export default SummaryCards;