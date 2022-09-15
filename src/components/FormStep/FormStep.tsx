import { Button, CircularProgress, Input, TextField, Typography } from "@mui/material"
import { Box } from "@mui/system";
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


  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  const {label, name, mask = '', type} = fields[currentField] || {};

  console.log(formValues)
  
  const nextField = () => {
     
    if (currentField === fields?.length - 1) {
      openModal()
      
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


  return (
    <div className="text-center" >
      <h1 className="mt-10">Solicite sua proposta</h1>

      <p className="mt-6">Complete seu cadastro e comprove seu faturamento</p>

          <form 
            className="flex gap-x-2 justify-center mt-24 w-full px-8" 
            onSubmit={submitForm}
            >
              <Box sx={{ position: 'relative', display: 'inline-flex', marginTop: '-6px' }}>
              <CircularProgress   
                className="mr-2"
                  size={64}
                  variant="determinate"
                  value={(currentField + 1) * 25} 
                  thickness={5}
              />

                <Box
                  sx={{
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    position: 'absolute',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: 64,
                    width: 64
                  }}
                >
                  <Typography
                    variant="caption"
                    component="div"
                    color="text.secondary"
                  >{currentField + 1} de 4</Typography>
                </Box>
              </Box>
           

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
              <button type="submit">OK</button>
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