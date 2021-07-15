import React, { useContext } from 'react'
import BalanceCss from './Balance.module.css'
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

export const Balance = () => {
     const { transactions } = useContext(GlobalContext)
     const amounts = transactions.map((transaction) => transaction.amount)
     const total = amounts.reduce((acc, amount) => (acc += amount), 0)

     return (
          <div className={BalanceCss.balanceContainer}>
               <div className={BalanceCss.container}>
                    <h3>Balance</h3>
                    <h1>{moneyFormatter(total)}</h1>
               </div>
          </div>
     )
}
