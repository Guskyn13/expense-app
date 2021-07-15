import  './App.css'
import React, { useState } from 'react'
import { Header } from './Components/Header/Header'
import { Balance } from './Components/Balance/Balance'
import { IncomeExpense } from './Components/Income-Expense/IncomeExpense'
import { TransactionList } from './Components/Transactions/TransactionList'
import { AddTransaction } from './Components/Add-Transaction/AddTransaction'

import { GlobalProvider } from './Hooks/GlobalState/GlobalState'

export default function App() {
     const [show, setShow] = useState(false)
     
     return (
          <GlobalProvider>
               <Header />
               <Balance />
               <IncomeExpense />
               <TransactionList onClick={() => setShow(true)} setShow={setShow} />
               <AddTransaction onClose={() => setShow(false)} show={show} setShow={setShow} />
          </GlobalProvider>
     )
}
