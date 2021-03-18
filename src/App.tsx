import { Header } from './Components/Header'
import {GlobalStyle} from './styles/global'
import { Dashboard } from './Components/Dashboard/'
import Modal from 'react-modal'
import { useState } from 'react'
import { NewTransactionModal } from './Components/NewTransactionModal'
import { TransactionProvider } from './hooks/useTransactions'


Modal.setAppElement('#root')

export function App() {

  const [isNewTransactionModalOpen, setIsNewTransactionOpen] = useState(false)
  

  function handleOpenNewTransactionModal(){
      setIsNewTransactionOpen(true)
  }

  function handleCloseNewTransactionModal(){
      setIsNewTransactionOpen(false)
  }


  return (
    <TransactionProvider>
        <Header handleOpenNewTransactionModal={handleOpenNewTransactionModal}/>
        <Dashboard/>

        <NewTransactionModal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseNewTransactionModal}/>

        <GlobalStyle/>
    </TransactionProvider>
  );
}


