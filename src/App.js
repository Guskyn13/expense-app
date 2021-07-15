import React from 'react'
import { Header } from './Components/Header/Header'
import { Balance } from './Components/Balance/Balance'
import { IncomeExpense } from './Components/Income-Expense/IncomeExpense'
import {TransactionList } from './Components/Transactions/TransactionList'
import { AddTransaction } from './Components/Add-Transaction/AddTransaction'

export default function App() {
     return (
          <div>
               <Header />
               <div className="container">
                    <Balance />
                    <IncomeExpense />
                    <TransactionList />
                    <AddTransaction />
               </div>
          </div>
     )
}
