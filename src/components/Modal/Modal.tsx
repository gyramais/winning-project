import React,{ useState } from 'react';
import Modal from 'react-modal';
import Form from '../Form/Form'

import santander from '../../assets/santander 1.png'
import itau from '../../assets/itau.png'
import bradesco from '../../assets/bradesco.png'
import caixa from '../../assets/caixa.png'
import next from '../../assets/next.png'

import "./style.css"

const integrationsImagens = [
  itau,
  bradesco,
  santander,
  caixa,
  next,
]

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

//Add tabs da MUI
const IntegrationModal:React.FC<{ isOpen: boolean, closeModal: Function}> = ( {isOpen:modalIsOpen, closeModal}) => {
  const [ step, setStep ] = useState(0)
  const [ params, setParams ] = useState(0)

  return (
    <Modal
    isOpen={modalIsOpen}
    contentLabel="Example Modal"
  >
    <>
      <div className='modal-header'>
        <h2>Conecte suas contas</h2>
        <button onClick={()=>closeModal()}>X</button>
      </div>
      <div className='integrations-tabs'>
        <ul className='list-item'>
          <li>Bancos</li>
          <li>Meios de pagamento</li>
          <li>Marketplaces</li>
        </ul>
      </div>
    {
    step === 0 && (
      <>
      <div className='integrations'>
        { 
        integrationsImagens.map((el)=>(
          <div className='integration-item'>
            <img src={el} alt="integration item"/>
          </div>  
        ))
        }
      </div>
    </>
    )
  }
  {
    step === 1 && (
      <Form/>
    )
  }
  </>
  </Modal>
  );
}

export default IntegrationModal
