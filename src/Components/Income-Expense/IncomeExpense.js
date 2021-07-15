import React, { useContext } from 'react'
import IncExpCss from './IncExp.module.css'
import { GlobalContext } from '../../Hooks/GlobalState/GlobalState'

export const IncomeExpense = () => {
     const { transactions } = useContext(GlobalContext)

     const amounts = transactions.map((transaction) => transaction.amount)

     const income = amounts
          .filter(item => item > 0)
          .reduce((acc, item) => (acc += item), 0).toFixed(2)

     const expense = amounts
          .filter(item => item < 0)
          .reduce((acc, item) => (acc += item), 0).toFixed(2)

     return (
          <>
               <div className={IncExpCss.mainContainer}>
                    <div className={IncExpCss.revenueContainer}>
                         <h3>Revenue</h3>
                         <p>${income}</p>
                    </div>
                    <div className={IncExpCss.expenseContainer}>
                         <h3>Expense</h3>
                         <p>${ expense}</p>
                    </div>
               </div>
          </>
     )
}
