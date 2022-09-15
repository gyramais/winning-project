import { Button, Input, TextField } from "@mui/material"
import { useState } from "react"
import InputMask from 'react-input-mask';
import { CSSTransition, SwitchTransition } from "react-transition-group";

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

  return (
    <div className="text-center">
      <h1 className="mt-10">Solicite sua proposta</h1>

      <p className="mt-6">Complete seu cadastro e comprove seu faturamento</p>

      <SwitchTransition>
        <CSSTransition
          key={name}
          addEndListener={(node, done) => node.addEventListener("transitionend", done, false)}
          classNames='fade'
        >
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
              <button type="submit">OK</button>
          </form>
        </CSSTransition>
      </SwitchTransition>
    </div>
  )
}

export default FormStep