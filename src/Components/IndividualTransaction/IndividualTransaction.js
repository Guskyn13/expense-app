import React, { useContext } from 'react'
import TransListCss from '../Transactions/Transactions.module.css'
import { GlobalContext } from '../../Hooks/GlobalState/GlobalState'

function moneyFormatter(num) {
     let p = num.toFixed(2).split('.');
     return (
          '$ ' +
          p[0]
               .split('')
               .reverse()
               .reduce(function (acc, num, i) {
                    return num === '-' ? acc : num + (i && !(i % 3) ? ',' : '') + acc;
               }, '') +
          '.' +
          p[1]
     );
}

export const IndividualTransaction = ({ transaction }) => {
     const { deleteTransaction } = useContext(GlobalContext)

     return (
          <div className={TransListCss.transacationContainer}>
               <li className={TransListCss.amount < 0 ? 'negative' : 'positive'}>
                    {transaction.content} <span>{moneyFormatter(transaction.amount)}</span>
               </li>
                    <button className={TransListCss.deleteBtn} onClick={() => deleteTransaction(transaction.id)}>X</button>
          </div>
     )
}
