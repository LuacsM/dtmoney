import { useState } from "react";
import { Dashboard } from "./componenents/Dashboard";
import Modal from 'react-modal';
import { Header } from "./componenents/Header";
import { GlobalStyle } from "./styles/global";
import { NewTransactionModal } from "./componenents/NewTransactionModal";

Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

    function handleOpenNewTransactionModal(){
        setIsNewTransactionModalOpen(true);
    }

    function handleCloseNewTransactionModal(){
     setIsNewTransactionModalOpen(false);   
    }
  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <NewTransactionModal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseNewTransactionModal}/>
      <Dashboard/>
      <GlobalStyle/>
    </>
  );
}