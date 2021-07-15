import React, { useState } from 'react'

export const AddTransaction = () => {
     const [text, setText] = useState('')
     const [amount, setAmount] = useState(0)

     return (
          <>
               <h3>Add New Transaction</h3>
               <form>
                    <div>
                         <label htmlFor="text">Text</label>
                         <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>
                    </div>
                    <div>
                         <label htmlFor="amount">Amount</label>
                         <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..."/>
                    </div>
                    <button>Add Transaction</button>
               </form>
          </>
     )
}
