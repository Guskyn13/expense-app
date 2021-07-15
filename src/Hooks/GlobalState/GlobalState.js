import React, { createContext, useReducer } from 'react'
import AppReducer from '../AppReducer/AppReducer'

const initialState = {
     transactions: [
          { id: 1, content: 'Games', amount: -20 },
          { id: 2, content: 'Food', amount: -154.57 },
          { id: 3, content: 'Paycheck', amount: 350 },
     ]
}

export const GlobalContext = createContext(initialState)

export const GlobalProvider = ({ children }) => {
     const [state, dispatch] = useReducer(AppReducer, initialState)

     function deleteTransaction(id) {
          dispatch({
               type: 'DELETE_TRANSACTION',
               payload: id
          })
     }

     function addTransaction(transaction) {
          dispatch({
               type: 'ADD_TRANSACTION',
               payload: transaction
          })
     }

     return (
          <GlobalContext.Provider value={{
               transactions: state.transactions,
               deleteTransaction,
               addTransaction
          }}>
               { children }
          </GlobalContext.Provider>
     )
}
