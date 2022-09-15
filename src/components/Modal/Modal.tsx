import React,{ useState } from 'react';
import Modal from 'react-modal';
import Form from '../Form/Form'

import "./style.css"

const integrationsImagens = [
  'src/assets/santander 1.png',
  'src/assets/itau.png',
  'src/assets/banco-do-brasil.png',
  'src/assets/bradesco.png',
  'src/assets/banco-pan-logo-8 1.png',
  'src/assets/caixa.png',
  'src/assets/Logo_Oficial_Banco_Original_-_Verde.png',
  'src/assets/next.png',
  'src/assets/nubank.png',
  'src/assets/neon-logo.png'
]

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

//Add tabs da MUI
const widgetModal:React.FC<{ isOpen: boolean, closeModal: Function}> = ( {isOpen:modalIsOpen, closeModal}) => {
  const [ step, setStep ] = useState(0)
  const [ params, setParams ] = useState(0)

  return (
    <Modal
    isOpen={modalIsOpen}
    //style={customStyles}
    preventScroll
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
            <img src={el} alt="integration item" />
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

export default widgetModal
