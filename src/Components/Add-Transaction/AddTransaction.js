import React, { useState, useContext } from 'react'
import AddCss from './AddTrans.module.css'
import { GlobalContext } from '../../Hooks/GlobalState/GlobalState'

export const AddTransaction = ({ onClose, show, setShow }) => {
     const [content, setContent] = useState('')
     const [amount, setAmount] = useState(0)

     const { addTransaction } = useContext(GlobalContext)

     const onSubmit = e => {
          e.preventDefault()

          const newTransaction = {
               id: Math.random(),
               content,
               amount: +amount,
          }
          
          addTransaction(newTransaction)

          setContent("")
          setAmount(0)
          setShow(false)
     }

     if (!show) {
          return(null)
     }

     return (
          <div onClick={onClose} className={AddCss.modal}>
               <div className={AddCss.mainContainer}>
                    <div className={AddCss.formContainer} onClick={e => e.stopPropagation()}>
                         <h3>Add Transaction</h3>
                         <form onSubmit={onSubmit}>
                              <div>
                                   <input type="text" value={content} onChange={(e) => setContent(e.target.value)} placeholder="Item" />
                              </div>
                              <div>
                                   <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
                              </div>
                              <button className={AddCss.add} >Add Transaction</button>
                         </form>
                    </div>
               </div>
          </div>
     )
}
