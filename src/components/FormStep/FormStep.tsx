import { Button, Input, TextField } from "@mui/material"
import { useState } from "react"
import InputMask from 'react-input-mask';
import Modal from '../Modal/Modal'

const fields = [
  {
    label: 'CNPJ',
    name: 'cnpj',
    mask: '99.999.999/9999',
  },
  {
    label: 'Nome completo',
    name: 'fullname',
  },
  {
    label: 'Email',
    name: 'email',
    type: 'email',
  },
  {
    label: 'Telefone',
    name: 'phoneNumber',
    mask: '(99) 99999-9999',
    type: 'tel',
  },
]

const FormStep: React.FC = () => {
  const [currentField, setCurrentField] = useState(0)
  const [value, setValue] = useState('')
  const [formValues, setValues] = useState({})

  const {label, name, mask = '', type} = fields[currentField];

  console.log(formValues)
  
  const nextField = () => {
    if (currentField === fields.length - 1) {
      alert('reminou')
      return
    }

    setCurrentField(prev => prev + 1)
  }

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setValues({
      ...formValues,
      [name]: value
    })

    setValue('')

    nextField();
  }
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="text-center">
      <h1 className="mt-10">Solicite sua proposta</h1>

      <p className="mt-6">Complete seu cadastro e comprove seu faturamento</p>

      <form 
        className="flex gap-x-2 justify-center mt-24 w-full px-8" 
        onSubmit={submitForm}
        >
          <InputMask
            mask={mask}
            onChange={(e) => setValue(e.target.value)}
            value={value}
          >
            <TextField 
              InputLabelProps={{ required: false }}
              type={type}
              label={label}
              className="flex-1" 
              helperText="precione enter ou ok"
              required
            />
          </InputMask>
          <button /*type="submit"*/ onClick={()=>openModal()}>OK</button>
      </form>
      <Modal
        isOpen={modalIsOpen}
        closeModal={closeModal}
        //style={customStyles}
        //preventScroll
      />
    </div>
  )
}

export default FormStep