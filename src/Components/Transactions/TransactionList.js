import React, { useContext } from 'react'
import TransListCss from './Transactions.module.css'
import { GlobalContext } from '../../Hooks/GlobalState/GlobalState'
import { IndividualTransaction } from '../../Components/IndividualTransaction/IndividualTransaction'

export const TransactionList = ({ setShow }) => {
     const { transactions } = useContext(GlobalContext)

     return (
          <div className={TransListCss.mainContainer}>
               <h3>Recent Transactions</h3>
               <ul className={TransListCss.transactionList}>
                    {transactions.map(transaction => (<IndividualTransaction key={transaction.id} transaction={transaction} className={TransListCss.something}/>))}
               </ul>
               <button className={TransListCss.addBtn} onClick={() => setShow(true)}>Add Transaction</button>
          </div>
     )
}